import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BackGround from '../images/bg.jpg'
export const HomeContainer = styled.div`
    height: 500px;
    width: 100%;
    background-image: url(${BackGround});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Wellcome = styled.div`
    width: 50%;
    height: 100%;
`
export const Right = styled.div`
    width: 50%;
    height: 100%;
`
export const Tocados = styled.h2`
    font-size: 24px;
    margin: 30px 0 20px 40px;
    color: var(--branco);
`
export const Albuns = styled.div`
    width: 85%;
    height: 400px;
    color: white;
    margin-right: 100px;
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
    height: 150px;
    width: 150px;
    position: absolute;
    
    :hover{
        transition: 0.3s;
    }
`

export const TitleAlbun = styled.h3`
    font-size: 17px;
`