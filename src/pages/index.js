import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavbarComponent from "@/components/NavbarComponent";
import HomeComponent from "@/components/HomeComponent";
import AboutComponent from "@/components/AboutComponent";
import HabilitiesComponent from "@/components/HabilitiesComponent";
import KnowledgesComponent from "@/components/KnowledgesComponent";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 0px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 768px) {
    padding: 0 7rem;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 12rem;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>João Henrique</title>
        <meta
          name="description"
          content="Portfolio João Henrique | Full-Stack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavbarComponent />
      <HomeComponent />
      <Main>
        <AboutComponent />
        <HabilitiesComponent />
        <KnowledgesComponent />
      </Main>
    </>
  );
}
