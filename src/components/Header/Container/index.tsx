import React from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';

const MainHeader = styled.header`
    background-color: var(--primaria);
    
`
export interface MenuProps{
    imageSrc?: boolean;
    title?: string;
    topBar?: boolean;
}
const Header: React.FC<MenuProps> =  (props) => {
    return(
        <MainHeader>
            {props.topBar &&
                <TopBar /> 
            }
        </MainHeader>
    );
}

export default Header;