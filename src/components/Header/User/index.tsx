import React from 'react';
import styled from 'styled-components';
import Picture from '../../../assets/images/user.png';


const ImageUser = styled.img`
    width: 100px;    
    height: 100px;
    border-radius: 360px;
    border: 3px solid #fff;
    position: relative;
    margin: 0 auto;

`
const Perfil = styled.div`
    width: calc(100% - 170px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`
export default function User(){
    return(
        <Perfil>
            <ImageUser src={Picture} alt="Profile Picture"/>
        </Perfil>
    );
}