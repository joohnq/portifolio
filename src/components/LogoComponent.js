import React from "react";
import styled from "styled-components";

export const Logo = styled.h2`
  color: #fff;
  position: relative;
  z-index: 9999;
  font-weight: 800;

  @media screen and (min-width: 0px) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 340px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 400px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 500px) {
    font-size: 2.8rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 3rem;
  }
`;

export default function LogoComponent() {
  return (
    <div>
      <Logo>JOOHNQ</Logo>
    </div>
  );
}
