import React from "react";
import TitleComponent from "./TitleComponent";
import styled from "styled-components";

const About = styled.section`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 0px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
  }
`;

const AboutPhoto = styled.div`
  background: url("/ProfilePhoto.jpg") center center no-repeat;
  background-size: cover;
  border-radius: 3rem;
  @media (min-width: 0px) {
    width: 100%;
    height: 50rem;
  }
  @media (min-width: 992px) {
    width: 50%;
    height: 70rem;
  }
`;

const AboutContent = styled.div`
  @media (min-width: 0px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
`;

const AboutDesc = styled.p`
  color: #fff;
  font-weight: 500;
  max-width: 70rem;
  margin: 0 auto;
  text-align: start;

  &::first-letter {
    margin-left: 5rem;
  }

  @media (min-width: 0px) {
    font-size: 1.6rem;
  }
  @media (min-width: 500px) {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

export const AboutDescStrong = styled.strong`
  @media (min-width: 0px) {
    font-size: 1.6rem;
  }
  @media (min-width: 500px) {
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

export default function AboutComponent() {
  return (
    <About id="About">
      <AboutPhoto></AboutPhoto>
      <AboutContent>
        <TitleComponent front="Quem sou eu?" back="Sobre"></TitleComponent>
        <AboutDesc>
          Olá visitante! Eu me chamo{" "}
          <AboutDescStrong>João Henrique</AboutDescStrong> , e sou um
          desenvolvedor <AboutDescStrong>Full Stack Junior</AboutDescStrong> com
          uma paixão por tecnologia e programação desde os meus 16 anos. Nessa
          época, comecei a explorar as linguagens{" "}
          <AboutDescStrong>HTML, CSS, JavaScript</AboutDescStrong> e outras e
          desde então venho aprimorando minhas habilidades nessa área.
        </AboutDesc>
        <AboutDesc>
          Atualmente, trabalho como{" "}
          <AboutDescStrong>freelancer</AboutDescStrong> , e isso me permite a
          flexibilidade e liberdade para assumir projetos empolgantes e
          desafiadores enquanto construo meu portfólio de desenvolvimento de
          software.
        </AboutDesc>
        <AboutDesc>
          Mas não é só trabalho e desenvolvimento de software que me animam. Eu
          também sou um grande fã de{" "}
          <AboutDescStrong>tecnologia</AboutDescStrong> e{" "}
          <AboutDescStrong>gadgets</AboutDescStrong> , e sempre estou buscando
          as últimas tendências em tecnologia para me manter atualizado. Quando
          não estou programando, você pode me encontrar assistindo a vídeos de
          review de tecnologia no YouTube ou lendo sobre as últimas inovações em
          software e hardware.
        </AboutDesc>
      </AboutContent>
    </About>
  );
}
