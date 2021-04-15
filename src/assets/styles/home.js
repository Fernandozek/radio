import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackGround from '../images/bg.jpg'
export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BackGround});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    
    @media(min-width: 768px){
        height: 500px;
        flex-direction: row;
        align-items: center;
        justify-content: center;

    }
`

export const Wellcome = styled.div`
    width: 100%;
    @media(min-width: 768px){
        width: 50%;
        height: 100%;

    }
`
export const Icon = styled.div`
    width: 150px;
    padding-left: 100px;
    div{
        margin-left: 0;
        margin-right: 100px;
    }
`
export const Message = styled.div`
    width: 100%;
    color: white;
    margin-top: 30px;
    padding-left: 20px;
    h1{
        font-size: 25px;
        margin-bottom: 30px;
    }
    p{
        width: 300px;
        font-size: 15px;
    }
    @media(min-width: 768px){
        padding-left: 80px;
    }
`
export const Right = styled.div`
    width: 100%;
    @media(min-width: 768px){
        width: 50%;
        height: 100%;
    }
`
export const Tocados = styled.h2`
    font-size: 24px;
    margin: 30px 0 20px 40px;
    color: var(--branco);
`
export const Albuns = styled.div`
    @media(max-width: 768px){
        width: 100%;
        margin-right: 10px;
        height: 300px;
    }
    width: 550px;
    height: 400px;
    color: white;
    display: grid;
    grid-gap: 15px 30px;
    grid-template-columns: 27% 27% 27%;
    padding: 10px;
`
export const ImgBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.3s;
    
`
export const Item = styled(Link)`
    @media(max-width: 768px){
        height: 90px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
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
export const Content = styled.div`
    @media(max-width: 768px){
        bottom: -70%;
    }
    position: absolute;
    bottom: -100%;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    transition: 0.3s;
`
export const Config = styled.div`
    width: 100%;
    height: 100%;
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

export const Image = styled.img`
    position: absolute;
    width: 90px;
    height: 90px;
    
    :hover{
        transition: 0.3s;
    }
    @media(min-width: 768px){
        width: 150px;
        height: 150px;

    }
    
`

export const TitleAlbun = styled.h3`
    font-size: 17px;
`