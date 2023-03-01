import React from "react";
import Logo from "./LogoComponent";

import styled, { css } from "styled-components";

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  /* background: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 3rem 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  position: relative;
  z-index: 9999; */

  @media (min-width: 500px) {
    padding: 3rem 4rem;
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  list-style: none;
`;

export const NavItemText = styled.a`
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.2rem;
  font-weight: 800;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1039px) {
    display: none;
  }
  @media screen and (min-width: 1040px) {
    margin-left: 2rem;
    font-size: 2rem;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 3rem;
    font-size: 2.4rem;
  }
`;

export const NavItemIcon = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    margin-left: 3rem;
  }
  @media screen and (min-width: 1040px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const NavItemMenuIcon = styled.img`
  @media screen and (min-width: 0px) {
    width: 4rem;
    height: 4rem;
  }
  @media screen and (min-width: 400px) {
    width: 5rem;
    height: 5rem;
  }
  @media screen and (min-width: 500px) {
    width: 6rem;
    height: 6rem;
  }

  @media (min-width: 768px) and (max-width: 1039px) {
    display: none;
  }

  @media screen and (min-width: 1040px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export default function NavbarComponent() {
  return (
    <Navbar>
      <Logo />
      <Nav>
        <li>
          <NavItemText href="/">HOME</NavItemText>
        </li>
        <li>
          <NavItemText href="#About">SOBRE</NavItemText>
        </li>
        <li>
          <NavItemText href="/">HABILIDADES</NavItemText>
        </li>
        <li>
          <NavItemText href="/">PROJETOS</NavItemText>
        </li>
        <li>
          <NavItemText href="/">CONTATO</NavItemText>
        </li>
        {/* <li className="Nav-menu">
          <img className="Nav-item_menuIcon" src={MenuIcon} alt="Menu" />
        </li> */}
      </Nav>
      {/* <div className="light"></div> */}
    </Navbar>
  );
}
