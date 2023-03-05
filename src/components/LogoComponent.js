import React from "react";
import styled from "styled-components";

export const Logo = styled.h2`
  color: #fff;
  font-weight: 800;

  @media screen and (min-width: 0px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 340px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 500px) {
    font-size: 5rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 6rem;
  }
`;

export default function LogoComponent() {
  return (
    <div>
      <Logo>JOOHNQ</Logo>
    </div>
  );
}
