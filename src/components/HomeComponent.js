import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Avatar from "../../public/Avatar.png";

export const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 20px 0px 0px 0px;
  margin-top: 40px;

  height: calc(85vh - 40px);
  width: 100%;

  /* background: rgba(255, 255, 255, 0.1);

  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.18); */
`;

export const HomeTitle = styled.h1`
  color: #fff;

  text-align: start;

  height: 20%;

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
  @media (min-width: 0px) {
    display: block;
  }
  @media (min-width: 768px) {
    display: inline;
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
  height: 80%;
`;

export default function HomeComponent() {
  return (
    <Home>
      <HomeTitle>
        {" "}
        <HomeTitleSpan>Olá,</HomeTitleSpan> Sou o João
      </HomeTitle>
      <HomeAvatar>
        <Image
          src={Avatar}
          width={500}
          height={600}
          alt="Avatar 3d | Representação João Henrique"
          quality={100}
        />
      </HomeAvatar>
    </Home>
  );
}
