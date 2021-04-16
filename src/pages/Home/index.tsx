import React, { useState } from 'react';
import PageTemplate from '../PageTemplate';
import { HomeContainer, Wellcome, Message, Icon, Right, Tocados, Albuns, Config, Item, ImgBox, Image, Content, TitleAlbun } from '../../assets/styles/home.js';
import { ALBUNS } from '../../Utils/Albuns';
import capa1 from '../../assets/images/queen.jpg';
import capa2 from '../../assets/images/red hot chili peppers.jpg';
import capa3 from '../../assets/images/muse.jpg';
import capa4 from '../../assets/images/Linkin Park.jpg';
import capa5 from '../../assets/images/pearl jam.jpg';
import capa6 from '../../assets/images/lynyrd skynyrd.jpg';
import Lottie from 'react-lottie';
import animationData from './music-burst-icon.json';
import animationData1 from './icon.json';

export default function Home() {

    const [albumselect, setAlbumselect] = useState(0);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <PageTemplate
            topBar={true}
        >
            <HomeContainer>
                <Wellcome>
                    <Message>

                        <h1>Seja bem-vindo(a) à Rádio Ufersa!</h1>
                        <p>Esta rádio foi construída sob a demanda da disciplina de Multimídia 2020.2. <br /><br/>
                        Escolha um álbum de sua preferência e aproveite do melhor som ;).
                     </p>
                    </Message>
                    <Icon>
                        <Lottie
                            options={defaultOptions}
                            height={100}
                            width={100}
                        />
                    </Icon>
                </Wellcome>
                <Right>
                    <Tocados>Mais tocados na semana!</Tocados>
                    <Albuns>
                        {
                            ALBUNS.filter(p => p.post === true).map((music) => {
                                return (
                                    <Item key={music.nome}
                                        onClick={() => setAlbumselect(music.id)}
                                        to={{
                                            pathname: "/album",
                                            state: {
                                                albumselect: music.id
                                            }
                                        }}
                                    >
                                        <Config>
                                            <ImgBox>
                                                {
                                                    music.id === 1 &&
                                                    <Image src={capa1} />
                                                }
                                                {
                                                    music.id === 2 &&
                                                    <Image src={capa2} />
                                                }
                                                {
                                                    music.id === 3 &&
                                                    <Image src={capa3} />
                                                }
                                                {
                                                    music.id === 4 &&
                                                    <Image src={capa4} />
                                                }
                                                {
                                                    music.id === 5 &&
                                                    <Image src={capa5} />
                                                }
                                                {
                                                    music.id === 6 &&
                                                    <Image src={capa6} />
                                                }
                                            </ImgBox>
                                            <Content>
                                                <TitleAlbun>{music.nome} </TitleAlbun>

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