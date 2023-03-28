import React from "react";
import tw from "tailwind-styled-components";

interface ProjectProps {
  imgScr: string;
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

const Project: React.FC<ProjectProps> = ({
  imgScr,
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
      <ImgBox>
        {JSON.parse(imgScr).map((src) => (
          <img src={src} />
        ))}
      </ImgBox>
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

const ImgBox = tw.div``;
const ProjectTitle = tw.h2``;
const Date = tw.p``;
const Describe = tw.div``;
const ReadMe = tw.button``;
const DetailBox = tw.div``;
const DetailList = tw.div``;
const DetailTitle = tw.div``;
const DetailContent = tw.div``;

export default Project;
