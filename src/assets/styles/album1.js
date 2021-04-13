import styled from 'styled-components';
import BackGround from '../images/bgl.jpg';

export const Page = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Album1Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    height: 450px;
`
export const Section = styled.section`
    width: 500px;
    height: 80%;
    margin-top: 30px;
    margin-left: 550px;
    padding: 0 10px; 
    border-left: 1px groove var(--cinza);
    
    position: absolute;
    display: inline;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--cinza); 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #909090; 
    }
`
export const Music = styled.div`
    background-color: rgba(41, 84, 77, 0.1);
    background: rgba(41, 84, 77, 0.2);
    display: flex;
    align-items: inherit;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 0 20px;
    width: 100%;
    height: 60px;
    color: var(--branco);
    border: 1px solid var(--cinza);
    border-radius: 5px;
    cursor: pointer;
`
export const MusicSelected = styled.div`
    background-color: rgba(41, 84, 77, 0.1);
    background: rgba(41, 84, 77, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 0 20px;
    width: 100%;
    height: 60px;
    color: green;
    border: 1px solid var(--cinza);
    border-radius: 5px;
    cursor: pointer;
`
export const MusicName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        font-size: 20px;
    }
`
export const Name = styled.h3`
    font-size: 14px;
    margin-left: 10px;
    font-weight: 300;
    margin-top: 9px;
`
export const MusicTime = styled.div`
    font-size: 14px;

`
export const Left = styled.div`
    width: calc(100% - 250px);
    height: 100%;
    position: relative;
    background-image: url(${BackGround});
    background-repeat: no-repeat;
    background-size: cover;
`
export const Selected = styled.div`
    width:500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: var(--branco);
`
export const CapaSelected = styled.img`
    width: 150px;
    height: 150px;
`
export const Title = styled.h3`

`
export const Efects = styled.div`

`
export const Right = styled.div`
    width: 250px;
    overflow: inherit;
    height: 450px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(17,79,93,1) 30%, rgba(17,81,95,1) 70%, rgba(0,0,0,1) 100%);
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Recomendadas = styled.h2`
    text-align: center;
    font-size: 14px;
    margin: 20px 0;
`

export const ImgBox = styled.div`
    width: 150px;
    height: 150px;
    position: absolute;
    transition: 0.3s;
    
`
export const Item = styled.div`
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    color: white;
    -webkit-box-shadow: 3px 6px 9px 0px rgba(200,200,200,0.75); 
    box-shadow: 3px 6px 9px 0px rgba(200,200,200,0.75);
    :hover{
        transform: scale(1.1);
        ${ImgBox}{
            filter: brightness(0.2);
        }
    }
`
export const Albuns = styled.div`
    width: 250px;
    height: 450px;
    color: white;
    overflow-y: auto;
    margin-right: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--cinza); 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #909090; 
    }

    ${Item}:last-child{
        margin-bottom: 50px;
    }
`
export const Content = styled.div`
    position: absolute;
    bottom: -100%;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    transition: 0.3s;
`
export const Config = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    :hover{
        ${Content}{
            bottom:20%;
        }
    }
`
export const AudioPlayer = styled.audio`
    width: 500px;
    outline: none;
`
export const Volume = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 100px;
    opacity: 1;
    outline: none;
    background-color: #282828;
    margin: 0 20px;
    border-radius: 0;
    ::-webkit-slider-runnable-track {
        background-color: #393939;
        height: 5px;
    }
    ::-webkit-slider-thumb {
        appearance: none;
        -webkit-appearance: none;
        background: #5c5c5c;
        height: 5px;
        width: 5px;
    }   

`
export const Image = styled.img`
    height: 150px;
    width: 150px;
    position: absolute;
    
    :hover{
        transition: 0.3s;
    }
`
export const TitleAlbun = styled.h3`
    font-size: 15px;
`
export const Player = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--primaria);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Musica = styled.div`
    width: 800px;
    height: 100%;
    h2{
        font-size: 16px;
    }
    ${AudioPlayer}{
        height: 30px;
    }
    .rhap_container{
        background-color: rgba(0,0,0,0) !important;
        border: none !important;
        color: white;
        box-shadow: none;
    }
    .rhap_additional-controls {
        width: 100px;
        height:20px;
        position: relative;
        overflow-x: none;
        overflow-y: none;
        ::-webkit-scrollbar {
            width: 1px;
        }

    }
    .rhap_container h3{
        position: absolute;
        width: 250px;
        height: 35px;
        margin: 30px 0 0 40px;
        font-size: 15px;
    }
`




