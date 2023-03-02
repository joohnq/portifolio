import React from "react";
import Title from "./TitleComponent";
import styled from "styled-components";

const About = styled.section`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  height: 90rem;
  @media (min-width: 0px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
    height: 70rem;
  }
  @media (min-width: 992px) {
    height: 80rem;
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
  @media (min-width: 768px) {
    width: 50%;
    height: 70rem;
  }
`;

const AboutContent = styled.div`
  /* width: 50%; */
  @media (min-width: 0px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const AboutDesc = styled.p`
  color: #fff;
  max-width: 70rem;
  margin: 0 auto;
  @media (min-width: 0px) {
    font-size: 1.6rem;
    text-align: center;
  }
  @media (min-width: 500px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    margin-top: 5rem;
    text-align: start;
  }
  @media (min-width: 992px) {
    font-size: 2.4rem;
  }
  @media (min-width: 1280px) {
    font-size: 2.8rem;
  }
`;

export default function AboutComponent() {
  return (
    <About>
      <AboutPhoto></AboutPhoto>
      <AboutContent>
        <Title front="Quem sou eu?" back="Sobre"></Title>
        <AboutDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          quod mollitia incidunt rerum aliquid iste culpa officiis tempore?
          Aspernatur assumenda accusamus, necessitatibus voluptatum dolorem
          temporibus quae soluta commodi quos labore?
        </AboutDesc>
      </AboutContent>
    </About>
  );
}
