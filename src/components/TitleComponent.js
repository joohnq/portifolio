import React from "react";
import styled from "styled-components";

export const Title = styled.section`
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  position: relative;
  margin-bottom: 2rem;
`;

export const TitleBack = styled.h2`
  opacity: 0.2;
  width: 100%;
  @media (min-width: 0px) {
    font-size: 4rem;
  }
  @media (min-width: 340px) {
    font-size: 5rem;
  }
  @media (min-width: 400px) {
    font-size: 6rem;
  }
  @media (min-width: 500px) {
    font-size: 6rem;
  }
  @media (min-width: 1280px) {
    font-size: 9rem;
  }
`;

export const TitleFront = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  @media (min-width: 0px) {
    font-size: 1.6rem;
  }
  @media (min-width: 340px) {
    font-size: 2rem;
  }
  @media (min-width: 400px) {
    font-size: 2.5rem;
  }
  @media (min-width: 500px) {
    font-size: 3rem;
  }
  @media (min-width: 1280px) {
    font-size: 4rem;
  }
`;

export default function TitleComponent({ front, back }) {
  return (
    <Title>
      <TitleBack>{back}</TitleBack>
      <TitleFront>{front}</TitleFront>
    </Title>
  );
}
