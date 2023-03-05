import React from "react";
import styled from "styled-components";
import TitleComponent from "./TitleComponent";
import { Icon } from "@iconify/react";

export const Projects = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 10rem;
  width: 100%;
`;

export const ProjectsCards = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 40rem));
  gap: 5rem;
  @media screen and (min-width: 0px) {
    gap: 3rem;
  }
  @media screen and (min-width: 500px) {
    gap: 5rem;
  }
`;

export const ProjectsCard = styled.div`
  position: relative;
  max-width: 40rem;
  height: 40rem;
  background-color: #000;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    .ProjectInfo {
      display: block;
    }
  }
  @media screen and (min-width: 0px) {
    height: 30rem;
  }
  @media screen and (min-width: 400px) {
    height: 40rem;
  }
`;

export const ProjectsCardInfos = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  border-radius: 0 0 2rem 2rem;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding-top: 2rem;
  @media screen and (min-width: 0px) {
    display: block;
  }
  @media screen and (min-width: 1040px) {
    display: none;
  }
`;

export const ProjectCardTitleLink = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectsCardTitle = styled.h4`
  font-weight: 800;
  color: #fff;
  padding: 0 2rem;
  @media screen and (min-width: 0px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 400px) {
    font-size: 3rem;
  }
`;

export const ProjectsCardDesc = styled.p`
  font-weight: 800;
  color: #fff;
  /* font-size: 2rem; */
  padding: 0 2rem;
  @media screen and (min-width: 0px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 400px) {
    font-size: 2rem;
  }
`;

export default function ProjectsComponent() {
  return (
    <Projects id="Projects">
      <TitleComponent front="Portifólio" back="Projetos" />
      <ProjectsCards>
        <ProjectsCard>
          <ProjectsCardInfos className="ProjectInfo">
            <ProjectCardTitleLink>
              <ProjectsCardTitle>PROJECT TITLE</ProjectsCardTitle>
              <a href="#">
                <Icon
                  className="ProjectsCardInfoLink"
                  icon="akar-icons:link-chain"
                  width={30}
                  height={30}
                  color="#fff"
                />
              </a>
            </ProjectCardTitleLink>
            <ProjectsCardDesc>PROJECT DESCRIPTION</ProjectsCardDesc>
          </ProjectsCardInfos>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsCardInfos className="ProjectInfo">
            <ProjectCardTitleLink>
              <ProjectsCardTitle>PROJECT TITLE</ProjectsCardTitle>
              <a href="#">
                <Icon
                  className="ProjectsCardInfoLink"
                  icon="akar-icons:link-chain"
                  width={30}
                  height={30}
                  color="#fff"
                />
              </a>
            </ProjectCardTitleLink>
            <ProjectsCardDesc>PROJECT DESCRIPTION</ProjectsCardDesc>
          </ProjectsCardInfos>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsCardInfos className="ProjectInfo">
            <ProjectCardTitleLink>
              <ProjectsCardTitle>PROJECT TITLE</ProjectsCardTitle>
              <a href="#">
                <Icon
                  className="ProjectsCardInfoLink"
                  icon="akar-icons:link-chain"
                  width={30}
                  height={30}
                  color="#fff"
                />
              </a>
            </ProjectCardTitleLink>
            <ProjectsCardDesc>PROJECT DESCRIPTION</ProjectsCardDesc>
          </ProjectsCardInfos>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsCardInfos className="ProjectInfo">
            <ProjectCardTitleLink>
              <ProjectsCardTitle>PROJECT TITLE</ProjectsCardTitle>
              <a href="#">
                <Icon
                  className="ProjectsCardInfoLink"
                  icon="akar-icons:link-chain"
                  width={30}
                  height={30}
                  color="#fff"
                />
              </a>
            </ProjectCardTitleLink>
            <ProjectsCardDesc>PROJECT DESCRIPTION</ProjectsCardDesc>
          </ProjectsCardInfos>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsCardInfos className="ProjectInfo">
            <ProjectCardTitleLink>
              <ProjectsCardTitle>PROJECT TITLE</ProjectsCardTitle>
              <a href="#">
                <Icon
                  className="ProjectsCardInfoLink"
                  icon="akar-icons:link-chain"
                  width={30}
                  height={30}
                  color="#fff"
                />
              </a>
            </ProjectCardTitleLink>
            <ProjectsCardDesc>PROJECT DESCRIPTION</ProjectsCardDesc>
          </ProjectsCardInfos>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsCardInfos className="ProjectInfo">
            <ProjectCardTitleLink>
              <ProjectsCardTitle>PROJECT TITLE</ProjectsCardTitle>
              <a href="#">
                <Icon
                  className="ProjectsCardInfoLink"
                  icon="akar-icons:link-chain"
                  width={30}
                  height={30}
                  color="#fff"
                />
              </a>
            </ProjectCardTitleLink>
            <ProjectsCardDesc>PROJECT DESCRIPTION</ProjectsCardDesc>
          </ProjectsCardInfos>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsCardInfos className="ProjectInfo">
            <ProjectCardTitleLink>
              <ProjectsCardTitle>PROJECT TITLE</ProjectsCardTitle>
              <a href="#">
                <Icon
                  className="ProjectsCardInfoLink"
                  icon="akar-icons:link-chain"
                  width={30}
                  height={30}
                  color="#fff"
                />
              </a>
            </ProjectCardTitleLink>
            <ProjectsCardDesc>PROJECT DESCRIPTION</ProjectsCardDesc>
          </ProjectsCardInfos>
        </ProjectsCard>
      </ProjectsCards>
    </Projects>
  );
}
