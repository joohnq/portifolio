import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import styled from "styled-components";
import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Knowledges = styled.section`
  margin: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const LanguageIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 8rem);
  justify-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 10rem);
  }
`;

export const LanguagesTitle = styled.h3`
  font-weight: bold;
  color: #fff;
  margin: 50px 0;

  @media screen and (min-width: 0px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 500px) {
    font-size: 3rem;
  }
`;

export const ToolsIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 5rem);
  justify-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 8rem);
  }
`;

export default function KnowledgesComponent() {
  return (
    <Knowledges>
      <LanguageIcons>
        <Icon
          className="LanguagesIcon"
          icon="ion:logo-html5"
          width={80}
          height={80}
          color="#fff"
        />
        <Icon
          className="LanguagesIcon"
          icon="ion:logo-css3"
          width={80}
          height={80}
          color="#fff"
        />
        <Icon
          className="LanguagesIcon"
          icon="mdi:language-javascript"
          width={80}
          height={80}
          color="#fff"
        />
        <Icon
          className="LanguagesIcon"
          icon="mdi:bootstrap"
          width={80}
          height={80}
          color="#fff"
        />
        <Icon
          className="LanguagesIcon"
          icon="mdi:git"
          width={80}
          height={80}
          color="#fff"
        />
        <Icon
          className="LanguagesIcon"
          icon="teenyicons:react-outline"
          width={80}
          height={80}
          color="#fff"
        />
        <Icon
          className="LanguagesIcon"
          icon="simple-icons:nodedotjs"
          width={80}
          height={80}
          color="#fff"
        />
        <Icon
          className="LanguagesIcon"
          icon="simple-icons:nextdotjs"
          width={80}
          height={80}
          color="#fff"
        />
        <Icon
          className="LanguagesIcon"
          icon="simple-icons:styledcomponents"
          width={80}
          height={80}
          color="#fff"
        />
      </LanguageIcons>
      <LanguagesTitle>FERRAMENTAS...</LanguagesTitle>
      <ToolsIcons>
        <Icon
          className="ToolsIcon"
          icon="simple-icons:insomnia"
          width={50}
          height={50}
          color="#fff"
        />
        <Icon
          className="ToolsIcon"
          icon="simple-icons:postman"
          width={50}
          height={50}
          color="#fff"
        />
        <Icon
          className="ToolsIcon"
          icon="ion:logo-windows"
          width={50}
          height={50}
          color="#fff"
        />
        <Icon
          className="ToolsIcon"
          icon="ion:logo-figma"
          width={50}
          height={50}
          color="#fff"
        />
        <Icon
          className="ToolsIcon"
          icon="mdi:vs-code"
          width={50}
          height={50}
          color="#fff"
        />
        <Icon
          className="ToolsIcon"
          icon="radix-icons:github-logo"
          width={50}
          height={50}
          color="#fff"
        />
      </ToolsIcons>
    </Knowledges>
  );
}
