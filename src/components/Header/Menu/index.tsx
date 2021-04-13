import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import MenuIcon from '../MenuIcon';
import MenuList from '../MenuList';
interface MenusProps {
    open?: boolean;
}

const MenuContainer = styled.div`
    margin: 0 1.6rem;
    & ${MenuIcon}{
        position: fixed;
        right: 16px;
        top: 16px;
    }
`

const Menus = styled.nav`
    background-color: var(--primaria);
    z-index: 1;
    width: 240px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    box-shadow: none;
    transform: ${(props: MenusProps) => props.open ? 'translateX(100%)' : 'translateX(0)'};
    transition: 0.3s;
    
    @media(min-width: 768px){
        margin-left: 10%;
        width:500px;
        transform: none;
        display: flex;
        position: static;
        height: 100%;
        flex: 1;
        background-color: transparent;
        justify-content: space-between;  
    }
`
export default function Menu() {

    const [open, setOpen] = useState(true);

    return (
        <MenuContainer>
            {open &&
                <MenuIcon open={open} onClick ={() => setOpen(!open)}>
                    <FiMenu />
                </MenuIcon>
            }
            {!open &&
                <MenuIcon open={open} onClick ={() => setOpen(!open)}>
                    <RiCloseFill />
                </MenuIcon>
            }
            <Menus open={open}>
                
                <MenuList>
                    <li><Link to="/" className="MenuLink" >Home</Link></li>
                </MenuList>
            </Menus>
            
        </MenuContainer>
    );
}