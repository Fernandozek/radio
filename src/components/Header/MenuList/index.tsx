import styled from 'styled-components';

const MenuList = styled.ul`
    list-style: none;
    margin-left: 2rem;
    margin-top: 1rem;

    li {
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    .MenuLink{
        color: var(--branco);
        text-decoration: none;
        text-align: center;
        font-size: 25px;
        @media(min-width: 768px){
            color: var(--branco);
        }
    }
   
    @media(min-width: 768px){
        display: flex;
        margin: 0;
        li {
            margin-left: 1rem;
            margin-bottom: 0;
            color: var(--branco);
        }
    }
`

export default MenuList;