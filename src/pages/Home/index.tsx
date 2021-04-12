import React from 'react';
import PageTemplate from '../PageTemplate';
import { HomeContainer, Wellcome, Right, Tocados, Albuns, Config, Item, ImgBox, Image, Content, TitleAlbun } from '../../assets/styles/home.js';
import { INFO } from '../../Utils/Albuns';
import Imgs from '../../assets/images/queen.jpg';
export default function Home() {
    return (
        <PageTemplate
            topBar={true}
        >
            <HomeContainer>
                <Wellcome></Wellcome>
                <Right>
                    <Tocados>Mais tocados na semana!</Tocados>
                    <Albuns>
                        {
                            INFO.map((info) => {
                                return (
                                    <Item key={info.nome} >
                                        <Config>
                                            <ImgBox>
                                                <Image src={Imgs} height="100px" width="100px" alt={info.nome} />
                                            </ImgBox>
                                            <Content>
                                                <TitleAlbun>{info.nome} </TitleAlbun>

                                            </Content>
                                        </Config>
                                    </Item>
                                );
                            })
                        }
                    </Albuns>
                </Right>
            </HomeContainer>
        </PageTemplate>
    );
}