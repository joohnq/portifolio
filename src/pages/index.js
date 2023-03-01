import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavbarComponent from "@/components/NavbarComponent";
import HomeComponent from "@/components/HomeComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>João Henrique</title>
        <meta name="description" content="Portfolio João Henrique | Full-Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavbarComponent />
      <HomeComponent />
    </>
  );
}
