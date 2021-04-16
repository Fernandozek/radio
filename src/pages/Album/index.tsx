import React, { createContext, forwardRef, ReactNode, useContext, useEffect, useState } from 'react';
import PageTemplate from '../PageTemplate';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Page, Album1Container, Section, Left, Right, Albuns, Name, CapaSelected, MusicName, MusicTime, Player, Recomendadas, Selected, Music, Musica, Item, Config, ImgBox, Image, Content, TitleAlbun, MusicSelected, Volume, Lotie, Right2, Albuns2 } from '../../assets/styles/album1';
import { Queen } from '../../Data/queen';
import { RHCP } from '../../Data/rhcp';
import { Muse } from '../../Data/muse';
import { Lp } from '../../Data/lp';
import { Pj } from '../../Data/pj';
import { Ls } from '../../Data/ls';
import { ALBUNS } from '../../Utils/Albuns';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { BsMusicNote } from 'react-icons/bs';
import capa1 from '../../assets/images/queen.jpg';
import capa2 from '../../assets/images/red hot chili peppers.jpg';
import capa3 from '../../assets/images/muse.jpg';
import capa4 from '../../assets/images/Linkin Park.jpg';
import capa5 from '../../assets/images/pearl jam.jpg';
import capa6 from '../../assets/images/lynyrd skynyrd.jpg';

import Lottie from 'react-lottie';
import animationData from './kiss-of-the-heart.json';
export default function Album(props: any) {
    const [albumexibe, setAlbumexibe] = useState(props.location.state.albumselect);
    if(albumexibe !== 1 && albumexibe !== 2 && albumexibe !== 3 && albumexibe !== 4 && albumexibe !== 5 && albumexibe !== 6){
        setAlbumexibe(0);
    }
    const [played, setPlayed] = useState(1);
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const [al, setAl] = useState("aria-label");
    function selectMusic(id: number) {
        setCurrentMusicIndex(id - 1);
    }
    function albumSelect(id: number) {
        setAlbumexibe(id);
        setPlayed(1);
        setCurrentMusicIndex(0);
    }
    const handleClickPrevious = (): void => {
        if (currentMusicIndex === 0) {
            setCurrentMusicIndex(playlist.length - 1);
        } else {
            var ne = currentMusicIndex - 1;
            setCurrentMusicIndex(ne);
        }
    }
    const handleClickNext = (): void => {
        if (currentMusicIndex < playlist.length - 1) {
            var ne = currentMusicIndex + 1;
            setCurrentMusicIndex(ne);
        } else {
            setCurrentMusicIndex(0);
        }
    }
    let playlist;
    if (albumexibe === 1) {
        playlist = Queen;
    } else {
        if (albumexibe === 2) {
            playlist = RHCP;
        } else {
            if (albumexibe === 3) {
                playlist = Muse;
            } else {
                if (albumexibe === 4) {
                    playlist = Lp
                } else {
                    if (albumexibe === 5) {
                        playlist = Pj;
                    } else {
                        playlist = Ls;
                    }
                }
            }
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (

        <PageTemplate
            topBar={true}
        >
            <Page>

                <Album1Container>
                    <Left>
                        <Selected>
                            {
                                albumexibe === 1 &&
                                <CapaSelected src={capa1} />
                            }
                            {
                                albumexibe === 2 &&
                                <CapaSelected src={capa2} />
                            }
                            {
                                albumexibe === 3 &&
                                <CapaSelected src={capa3} />
                            }
                            {
                                albumexibe === 4 &&
                                <CapaSelected src={capa4} />
                            }
                            {
                                albumexibe === 5 &&
                                <CapaSelected src={capa5} />
                            }
                            {
                                albumexibe === 6 &&
                                <CapaSelected src={capa6} />
                            }

                            <h3>{ALBUNS[albumexibe - 1].nome}</h3>
                        </Selected>
                        <Section>
                            {
                                playlist.map((music) => {
                                    return (
                                        <>
                                            {
                                                music.id === currentMusicIndex + 1 &&
                                                <MusicSelected key={music.name} onClick={() => selectMusic(music.id)}>
                                                    <Lotie>
                                                        <Lottie
                                                            options={defaultOptions}
                                                            height={20}
                                                            width={"100%"}
                                                        />
                                                    </Lotie>
                                                    <MusicName>
                                                        <p><BsMusicNote /></p>
                                                        <Name>{music.name}</Name>
                                                        <div>

                                                        </div>
                                                    </MusicName>
                                                    <MusicTime>
                                                        {music.time}
                                                    </MusicTime>
                                                </MusicSelected>
                                            }
                                            {
                                                music.id !== currentMusicIndex + 1 &&
                                                <Music key={music.name} onClick={() => selectMusic(music.id)}>
                                                    <MusicName>
                                                        <p><AiOutlinePlayCircle /></p>
                                                        <Name>{music.name}</Name>
                                                    </MusicName>
                                                    <MusicTime>
                                                        {music.time}
                                                    </MusicTime>
                                                </Music>
                                            }
                                        </>
                                    );
                                })
                            }
                        </Section>
                    </Left>
                    <Right>
                        <Albuns>
                            <Recomendadas>
                                Ouça também
                            </Recomendadas>
                            {
                                ALBUNS.filter(p => p.post === true && p.id !== albumexibe).map((music) => {
                                    return (
                                        <Item key={music.nome} onClick={() => albumSelect(music.id)}>
                                            <Config>
                                                <ImgBox>

                                                    {
                                                        music.id === 1 &&
                                                        <Image src={capa1} />
                                                    }
                                                    {
                                                        music.id === 2 &&
                                                        <Image src={capa2} />
                                                    }
                                                    {
                                                        music.id === 3 &&
                                                        <Image src={capa3} />
                                                    }
                                                    {
                                                        music.id === 4 &&
                                                        <Image src={capa4} />
                                                    }
                                                    {
                                                        music.id === 5 &&
                                                        <Image src={capa5} />
                                                    }
                                                    {
                                                        music.id === 6 &&
                                                        <Image src={capa6} />
                                                    }
                                                </ImgBox>
                                                <Content>
                                                    <TitleAlbun>{music.nome} </TitleAlbun>

                                                </Content>
                                            </Config>
                                        </Item>
                                    );
                                })
                            }
                        </Albuns>
                    </Right>
                </Album1Container>
                <Player>
                    <Musica>
                        <AudioPlayer
                            autoPlay={true}
                            className="ap"
                            layout="stacked-reverse"
                            src={playlist[currentMusicIndex].src}
                            autoPlayAfterSrcChange={true}
                            showSkipControls={true} showJumpControls={true}
                            onClickPrevious={handleClickPrevious}
                            onClickNext={handleClickNext}
                            customAdditionalControls={
                                [
                                    RHAP_UI.LOOP,
                                    <h3>{playlist[currentMusicIndex].name}</h3>
                                ]
                            }
                        />

                    </Musica>
                </Player>
                <Right2>
                    <Recomendadas>
                        Ouça também
                    </Recomendadas>
                    <Albuns2>
                        {
                            ALBUNS.filter(p => p.post === true && p.id !== albumexibe).map((music) => {
                                return (
                                    <Item key={music.nome} onClick={() => albumSelect(music.id)}>
                                        <Config>
                                            <ImgBox>
                                                {
                                                    music.id === 1 &&
                                                    <Image src={capa1} />
                                                }
                                                {
                                                    music.id === 2 &&
                                                    <Image src={capa2} />
                                                }
                                                {
                                                    music.id === 3 &&
                                                    <Image src={capa3} />
                                                }
                                                {
                                                    music.id === 4 &&
                                                    <Image src={capa4} />
                                                }
                                                {
                                                    music.id === 5 &&
                                                    <Image src={capa5} />
                                                }
                                                {
                                                    music.id === 6 &&
                                                    <Image src={capa6} />
                                                }
                                            </ImgBox>
                                            <Content>
                                                <TitleAlbun>{music.nome} </TitleAlbun>

                                            </Content>
                                        </Config>
                                    </Item>
                                );
                            })
                        }
                    </Albuns2>
                </Right2>
            </Page>
        </PageTemplate>
    );
}