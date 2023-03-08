import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Background from "../../public/backgroundHome4.png";

export const Home = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 100px;
  position: relative;
`;

export const HomeTitle = styled.h1`
  color: #fff;

  text-align: start;

  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);

  @media (min-width: 0px) {
    font-size: 3rem;
  }

  @media (min-width: 340px) {
    font-size: 5rem;
  }

  @media (min-width: 400px) {
    font-size: 6rem;
  }

  @media (min-width: 768px) {
    font-size: 8rem;
  }

  @media (min-width: 992px) {
    font-size: 9rem;
  }
  @media (min-width: 1040px) {
    font-size: 10rem;
  }
`;

export const HomeTitleSpan = styled.span`
  text-align: end;
  @media (min-width: 0px) {
    display: block;
  }
  @media (min-width: 0px) {
    font-size: 3rem;
  }

  @media (min-width: 340px) {
    font-size: 5rem;
  }

  @media (min-width: 400px) {
    font-size: 6rem;
  }

  @media (min-width: 768px) {
    font-size: 8rem;
  }

  @media (min-width: 992px) {
    font-size: 9rem;
  }
  @media (min-width: 1040px) {
    font-size: 10rem;
  }
`;

export const HomeAvatar = styled.div`
  height: 70%;
`;

export default function HomeComponent() {
  return (
    <Home id="Home">
      <Image
        className="HomeBackground"
        quality={100}
        src={Background}
        width={1920}
        height={1080}
        alt="BACKGROUND"
      />
      <HomeTitle>
        {" "}
        <HomeTitleSpan>Olá,</HomeTitleSpan> Sou o João
      </HomeTitle>
    </Home>
  );
}
