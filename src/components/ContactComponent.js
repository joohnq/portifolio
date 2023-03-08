import React from "react";
import styled from "styled-components";
import TitleComponent from "./TitleComponent";
import Illustration from "../../public/Illustration.png";
import Image from "next/image";

export const Contact = styled.section`
  display: flex;
  align-items: center;

  border-radius: 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  margin: 10rem 0;

  width: 100%;

  @media screen and (min-width: 0px) {
    background: rgba(255, 255, 255, 0.1);
    justify-content: center;
    padding: 3rem 0;
  }

  @media screen and (min-width: 992px) {
    background: rgba(255, 255, 255, 0.1) url("/Illustration.png") left center
      no-repeat;
    background-size: contain;
    justify-content: flex-end;
    height: 70rem;
  }
  @media screen and (min-width: 1280px) {
    background: rgba(255, 255, 255, 0.1) url("/Illustration.png") left center
      no-repeat;
    background-size: contain;
    justify-content: flex-end;
    height: 80rem;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 0px) {
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    width: 40%;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  @media screen and (min-width: 0px) {
    padding: 0 2rem;
  }

  @media screen and (min-width: 500px) {
    padding: 0 5rem;
  }
  @media screen and (min-width: 992px) {
    padding: 0 2rem 0 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 7rem 0 0;
  }
`;

export const ContactFormBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ContactFormLabel = styled.label`
  color: #fff;
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
export const ContactFormInput = styled.input`
  color: #fff;
  font-weight: 500;
  font-size: 2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  &:focus {
    outline: 0;
  }
`;
export const ContactFormTextArea = styled.textarea`
  resize: none;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  width: 100%;
  height: 20rem;
  padding: 1rem 0 0 1rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;

  &:focus {
    outline: 0;
  }
`;
export default function ContactsComponent() {
  return (
    <Contact id="Contact">
      <ContactContent>
        <TitleComponent front="Fale Comigo" back="Contato" />
        <ContactForm>
          <ContactFormBox>
            <ContactFormLabel htmlFor="name">Nome:</ContactFormLabel>
            <ContactFormInput type="text" name="name" id="name" />
          </ContactFormBox>
          <ContactFormBox>
            <ContactFormLabel htmlFor="email">Email:</ContactFormLabel>
            <ContactFormInput type="email" name="email" id="email" />
          </ContactFormBox>
          <ContactFormBox>
            <ContactFormLabel htmlFor="message">Mensagem:</ContactFormLabel>
            <ContactFormTextArea id="message" name="message" rows="20" />
          </ContactFormBox>
        </ContactForm>
      </ContactContent>
    </Contact>
  );
}
