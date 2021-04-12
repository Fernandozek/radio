import React from 'react';
import styled from 'styled-components';
import Page from '../Page';

const PageContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container: React.FC = (props) => {
    return(
        <Page>
            <PageContainer>
                {props.children}
            </PageContainer>
        </Page>
    );
}

export default Container;