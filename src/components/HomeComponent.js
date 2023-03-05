import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Avatar from "../../public/sentado2.png";

export const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 100px;

  padding: 20px 0px 0px 0px;

  height: 100vh;
  width: 100%;

  background: url('/backgroundHome5.png') center center no-repeat;

  background-size: cover;
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
  height: 70%;
`;

export default function HomeComponent() {
  return (
    <Home>
      <HomeTitle>
        {" "}
        <HomeTitleSpan>Olá,</HomeTitleSpan> Sou o João
      </HomeTitle>
    </Home>
  );
}
