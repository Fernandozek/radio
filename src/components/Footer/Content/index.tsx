import React from 'react';
import styled from 'styled-components';
import { FiInstagram, FiMail } from 'react-icons/fi';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';

const FooterData = styled.div`
    width: 100%;
    margin-bottom: 10px;
    height: 160px;
    text-align: center;
    color: var(--branco);
    padding: 10px 0;
    @media(min-width: 768px) {
        text-align: left;
        width: 33%;
        padding-left: 80px;
    }
`
const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${FooterData} {
        border-bottom: 1px solid var(--branco);
    }

    @media(min-width: 768px) {
        width: 100%;
        ${FooterData} {
            border: none;
        }
    }
`
const Info = styled.div`
    width: 70%;
    margin-bottom: 25px;
    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`
const Title = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 10px;
`
const Lista = styled.ul`
    list-style: none;
    font-size: 1.6rem;
    width: 350px;
    li {
        line-height: 1.6;
    }
`
const Link = styled.a`
    text-decoration: none;
    color: var(--branco);
    font-size: 1.6rem;
    margin-left: 2px;

    :hover {
        color: var(--cinza);
    }
`
const Icon = styled.span`
    font-size: 1.6rem;
    color: var(--branco);
    margin-right: 10px;
`

const Email = styled.a`
    color: var(--branco);
    text-decoration: none;

    :hover {
        color: var(--cinza);
    }
`

const Direitos = styled.p`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    color: var(--branco);
    background-color: var(--footer-dark);
`

export default function FooterContent() {
    return (
        <Content>
            <Info>
                <FooterData>
                    <Title>
                        Apoio
                    </Title>
                    <Lista>
                        <li>UFERSA - Pau dos Ferros</li>
                        <li>Multimídia</li>
                    </Lista>
                </FooterData>
                <FooterData>
                    <Title>
                        Desenvolvedor
                    </Title>
                    <Lista>
                        <li>Fernando Dutra</li>
                    </Lista>
                </FooterData>
                <FooterData>
                    <Title>
                        Contato
                    </Title>
                    <Lista>
                        <li>
                            <Icon>
                                <FiMail />
                            </Icon>
                            <Email href="mailto: fernandozek@hotmail.com">
                                fernandozek@hotmail.com
                            </Email>
                        </li>
                        <li>
                            <Icon>
                                <FiInstagram />
                            </Icon>
                            <Link href="">fernando_dutrajp</Link>
                        </li>
                        <li>
                            <Icon>
                                <FaTwitter />
                            </Icon>
                            <Link href="">fernando_zek</Link>
                        </li>

                        <li>
                            <Icon>
                                <FaFacebookF />
                            </Icon>
                            <Link href="">/fernando.dutrar</Link>
                        </li>
                    </Lista>
                </FooterData>
            </Info>
            <Direitos>
                @todos os direitos reservados
            </Direitos>
        </Content>
    );
}