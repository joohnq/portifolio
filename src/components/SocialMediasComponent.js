import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

export const SocialMedia = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  position: fixed;
  z-index: 10000;

  @media screen and (min-width: 0px) {
    bottom: 10px;
    flex-direction: row;
  }

  @media screen and (min-width: 768px) {
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
  }
`;
export const SocialMediaIcon = styled.a`
  padding: 1rem;

  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export default function SocialMediasComponent() {
  return (
    <SocialMedia>
      <SocialMediaIcon href="#">
        <Icon
          icon="ph:instagram-logo-fill"
          color="white"
          width="30"
          height="30"
        />
      </SocialMediaIcon>
      <SocialMediaIcon href="#">
        <Icon
          icon="radix-icons:github-logo"
          color="white"
          width="30"
          height="30"
        />
      </SocialMediaIcon>
      <SocialMediaIcon href="#">
        <Icon icon="mdi:linkedin" color="white" width="30" height="30" />
      </SocialMediaIcon>
    </SocialMedia>
  );
}
