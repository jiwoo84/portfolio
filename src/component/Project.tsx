import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import Carousel from "./Carousel";

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

const Container = tw.div`
    flex flex-col md:flex-row
`;
const DetailContainer = tw.div`
  py-5
`;
const Title = tw.h2`
  text-xl font-bold text-green-500
`;
const Date = tw.p`
  text-sm text-gray-400
`;
const Describe = tw.div`
  py-5
`;
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
  // useEffect(() => {
  //   const describeElement: HTMLElement | null =
  //     document.getElementById("describeElement")!;
  //   describeElement.innerHTML = describe;
  // });

  return (
    <Container>
      <Carousel />
      <DetailContainer>
        <Title>{title}</Title>
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
      </DetailContainer>
    </Container>
  );
};

export default Project;
