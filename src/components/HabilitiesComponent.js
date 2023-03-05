import React from "react";
import TitleComponent from "./TitleComponent";
import { Icon } from "@iconify/react";
import styled from "styled-components";

export const Habilities = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 200px;
  margin-bottom: 50px;
`;

export const Stacks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 40rem));
  align-items: center;
  justify-content: center;
  gap: 10rem;
  width: 100%;
`;

export const StacksCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 40rem;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);

  @media screen and (min-width: 0px){
    height: 30rem;
  }

  @media screen and (min-width: 500px){
    height: 35rem;
  }
`;

export const StacksCardTitle = styled.h3`
  font-weight: 800;
  color: #fff;
  text-align: center;
  padding: 20px;
  @media screen and (min-width: 0px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 340px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 500px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width:768px) {
    font-size: 2.8rem;
  }
`;

export default function HabilitiesComponent() {
  return (
    <Habilities id="Habilities">
      <TitleComponent front="Habilidades" back="Áreas" />
      <Stacks>
        <StacksCard>
          <Icon className="StacksCardIcon" icon="ic:baseline-web" width={200} height={200} color="#fff" />
          <StacksCardTitle>DESENVOLVIMENTO WEB</StacksCardTitle>
        </StacksCard>
        <StacksCard>
          <Icon
            icon="clarity:rack-server-solid"
            className="StacksCardIcon"
            width={200}
            height={200}
            color="#fff"
          />
          <StacksCardTitle>DESENVOLVIMENTO BACK-END</StacksCardTitle>
        </StacksCard>
        <StacksCard>
          <Icon icon="mdi:mobile-phone" className="StacksCardIcon" width={200} height={200} color="#fff" />
          <StacksCardTitle>DESENVOLVIMENTO MOBILE</StacksCardTitle>
        </StacksCard>
      </Stacks>
    </Habilities>
  );
}
