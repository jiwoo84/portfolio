import React from "react";
import tw from "tailwind-styled-components";
import ImgSlider from "./ImgSlider";

interface ProjectProps {
  imgsrc: string;
  title: string;
  date: string;
  features: string;
  describe: string;
  repository: string;
  frontend: string;
  posting: string;
  backend: string;
  deployment: string;
}

const ImgBox = tw.div`
  relative h-56 overflow-hidden rounded-lg md:h-96
`;
const ProjectTitle = tw.h2``;
const Date = tw.p``;
const Describe = tw.div``;
const ReadMe = tw.button``;
const DetailBox = tw.div``;
const DetailList = tw.div``;
const DetailTitle = tw.div``;
const DetailContent = tw.div``;

const Project: React.FC<ProjectProps> = ({
  imgsrc,
  title,
  date,
  describe,
  features,
  repository,
  posting,
  frontend,
  backend,
  deployment,
}) => {
  return (
    <>
      <ImgSlider imgsrc={imgsrc} />
      <ProjectTitle>{title}</ProjectTitle>
      <Date>{date}</Date>
      <Describe>{describe}</Describe>
      <ReadMe>
        <a href="#" target="_blank">
          상세보기
        </a>
      </ReadMe>
      <DetailBox>
        <DetailList>
          <DetailTitle>주요 기능</DetailTitle>
          <DetailContent>{features}</DetailContent>
        </DetailList>
        <DetailList>
          <DetailTitle>Github</DetailTitle>
          <DetailContent>{repository}</DetailContent>
        </DetailList>
        <DetailList>
          <DetailTitle>회고</DetailTitle>
          <DetailContent>{posting}</DetailContent>
        </DetailList>
        <DetailList>
          <DetailTitle>Frontend</DetailTitle>
          <DetailContent>{frontend}</DetailContent>
        </DetailList>
        <DetailList>
          <DetailTitle>Backend</DetailTitle>
          <DetailContent>{backend}</DetailContent>
        </DetailList>
        <DetailList>
          <DetailTitle>Deployment</DetailTitle>
          <DetailContent>{deployment}</DetailContent>
        </DetailList>
      </DetailBox>
    </>
  );
};

export default Project;
