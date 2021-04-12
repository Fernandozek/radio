import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Perfil from '../Perfil';

const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--primaria);
    height: 7rem;
    
`

export default function TopBar(){
    return(
        <TopBarContainer>
            <Menu />
            <Perfil />
        </TopBarContainer>
    );
}