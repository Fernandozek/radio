import { createContext, ReactNode, useEffect, useState } from 'react';

interface MPContextData {
    isPlaying: boolean;
    isMute: boolean;
    volume: number;
    currentTime: number;
    totalTime: number;
    audioIndex: number;
    configAudio: ()=>void;
    toonglePlayPause: ()=> void;

}

interface MPContextProviderProps{
    children: ReactNode;
}

export const MPContext = createContext({} as MPContextData);

const MPContextProvider = ({children}:MPContextProviderProps) => {
    
    const [audio, setAudio] = useState<HTMLAudioElement>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const [volume, setVolume] = useState(1);
    const [panner, setPanner] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTimeTotal] = useState(0);
    const [audioIndex, setAudioIndex] = useState(0); 
    const [gain, setGain] = useState<GainNode>(); 
    const [stered, setStereo] = useState<StereoPannerNode>();

    useEffect(() => {
        if (audio) {
            audio.onloadeddata = ()=> {
                setTimeTotal(audio.duration);
                setCurrentTime(0);

                if (isPlaying) {
                    play();
                }
            }
    
            audio.ontimeupdate = ()=> {
                setCurrentTime(audio.currentTime);
            }

            audio.onended = () => {
                //setAudioIndex(audioIndex + 1);
                updateAudio(audioIndex + 1);
            }
        }
    }, [audio]);

    const configAudio = () => {
        updateAudio(0);
    }
    
    
    const updateAudio = (index: number) => {
        const newAudioIndex = index % 3;
        const updatedAudio = new Audio(`/audios/audio${newAudioIndex + 1}.mp3`);
        setAudioIndex(newAudioIndex);
        setCurrentTime(0);
        setAudio(updatedAudio);

        const audioConext = new AudioContext();
        const media = audioConext.createMediaElementSource(updatedAudio);
        const updatedGain = audioConext.createGain();
        const updatedStereo = audioConext.createStereoPanner();
        media.connect(updatedGain);
        updatedGain.connect(updatedStereo);
        updatedStereo.connect(audioConext.destination);
        
        updatedAudio.onplay = () => {
            audioConext.resume();
        }
        setGain(updatedGain);
        setStereo(updatedStereo);
    }
    const configAudioIndex = (index: number) => {
        updateAudio(index);
        setAudioIndex(index);
        setIsPlaying(false);
        audio?.pause();
    }
    const toonglePlayPause = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        }
        else {
            play();
            setIsPlaying(true);
        }
    }
    const play = ()=> {
        audio?.play();
    }
    const pause = ()=> {
        audio?.pause();
    }
    
    
    

   
    return (
        <MPContext.Provider value={{
            isPlaying,
            isMute,
            volume,
            currentTime,
            totalTime,
            audioIndex,
            configAudio,
            toonglePlayPause
        }}>
        {children}
        </MPContext.Provider>
    );
}

export default MPContextProvider;