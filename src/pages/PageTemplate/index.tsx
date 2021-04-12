import React from 'react';
import Header from '../../components/Header/Container';
import {MenuProps} from '../../components/Header/Container';
import Footer from '../../components/Footer/Container';
import Container from '../../components/Container';

const PageTemplate: React.FC<MenuProps> = (props) => {
    return(
        <>
            <Header {...props}/>
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    );
}

export default PageTemplate;