import React, { useState } from "react";
import Logo from "./LogoComponent";
import { Icon } from "@iconify/react";
import styled, { css } from "styled-components";

export const Header = styled.header``;

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 3rem 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  position: absolute;
  z-index: 9999;
  top: 0;

  @media (min-width: 0px) {
    left: 2rem;
    right: 2rem;
  }

  @media (min-width: 500px) {
    padding: 3rem 4rem;
  }

  @media (min-width: 768px) {
    left: 7rem;
    right: 7rem;
  }
  @media (min-width: 1280px) {
    left: 12rem;
    right: 12rem;
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
  @media screen and (max-width: 1039px) {
    display: none;
  }
  @media screen and (min-width: 1040px) {
    margin-left: 2rem;
    font-size: 2rem;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 2rem;
    font-size: 2.2rem;
  }

  @media screen and (min-width: 1400px) {
    margin-left: 3rem;
    font-size: 2.4rem;
  }
  @media screen and (min-width: 1600px) {
    margin-left: 3rem;
    font-size: 2.8rem;
  }
`;

export const NavItemIcon = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    margin-left: 3rem;
  }
  @media screen and (min-width: 1040px) {
    display: none;
  }
`;

export const NavItemMenuIcon = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  background-color: #1f2034;
  height: 100vh;
  z-index: 999999999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => props.status};
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 20px 10px 50px;
`;

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const MenuText = styled.a`
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.2rem;
  font-weight: 800;
  font-size: 4rem;
`;

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuMobile(e) {
    setIsOpen(!isOpen);
  }

  return (
    <Header>
      <Navbar>
        <Logo />
        <Nav>
          <li>
            <NavItemText href="/">HOME</NavItemText>
            <NavItemIcon>
              <Icon
                className="NavItemIcon"
                icon="material-symbols:house-outline-rounded"
                color="white"
                width={50}
                height={50}
              />
            </NavItemIcon>
          </li>
          <li>
            <NavItemText href="/">SOBRE</NavItemText>
            <NavItemIcon>
              <Icon
                className="NavItemIcon"
                icon="material-symbols:person-2-outline-sharp"
                color="white"
                width={50}
                height={50}
              />
            </NavItemIcon>
          </li>
          <li>
            <NavItemText href="/">HABILIDADES</NavItemText>
            <NavItemIcon>
              <Icon
                className="NavItemIcon"
                icon="mdi:brain"
                color="white"
                width={50}
                height={50}
              />
            </NavItemIcon>
          </li>
          <li>
            <NavItemText href="/">PROJETOS</NavItemText>
            <NavItemIcon>
              <Icon
                className="NavItemIcon"
                icon="gg:website"
                color="white"
                width={50}
                height={50}
              />
            </NavItemIcon>
          </li>
          <li>
            <NavItemText href="/">CONTATO</NavItemText>
            <NavItemIcon>
              <Icon
                className="NavItemIcon"
                icon="ic:outline-message"
                color="white"
                width={50}
                height={50}
              />
            </NavItemIcon>
          </li>
          <li>
            <NavItemMenuIcon>
              <Icon
                className="NavItemIcon"
                icon="material-symbols:menu-rounded"
                color="white"
                width={50}
                height={50}
                onClick={handleMenuMobile}
              />
            </NavItemMenuIcon>
          </li>
        </Nav>
      </Navbar>
      <Menu status={isOpen ? "block" : "none"}>
        <MenuIcon>
          <Icon
            onClick={handleMenuMobile}
            icon="ic:round-close"
            color="white"
            width="60"
            height="60"
          />
        </MenuIcon>
        <MenuList>
          <li>
            <MenuText href="https://www.youtube.com">HOME</MenuText>
          </li>
          <li>
            <MenuText href="/">SOBRE</MenuText>
          </li>
          <li>
            <MenuText href="/">HABILIDADES</MenuText>
          </li>
          <li>
            <MenuText href="/">PROJETOS</MenuText>
          </li>
          <li>
            <MenuText href="/">CONTATO</MenuText>
          </li>
        </MenuList>
      </Menu>
    </Header>
  );
}
