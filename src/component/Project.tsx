import React, { HtmlHTMLAttributes, ReactNode, useEffect } from "react";
import tw from "tailwind-styled-components";
import Carousel from "./Carousel";

interface ProjectProps {
  img: string;
  title: string;
  date: string;
  features: string;
  repository: string;
  frontend: string;
  posting: string;
  backend: string;
  deployment: string;
  children: ReactNode;
}

const Container = tw.div`
    flex flex-col lg:flex-row bg-white hover:translate-y-[5px]  hover:shadow-xl py-10 px-3 sm:px-5 md:px-10 lg:px-10 mb-5 rounded-2xl
`;
const Title = tw.h2`
  text-[1.5rem] font-extrabold text-green-500 font-sans
`;
const Date = tw.p`
  text-sm text-gray-400
`;
const DetailContainer = tw.div`
  px-5 lg:ml-20 w-[100%]
`;
const Describe = tw.div`
  py-5 
`;
const ReadMeWrapper = tw.div`
  flex justify-end
`;
const ReadMeBtn = tw.button`
  text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800
`;
const DetailBox = tw.div`
  
`;
const DetailList = tw.div`
  flex flex-col sm:flex-row md:flex-row lg:flex-row mb-2
`;
const DetailTitle = tw.div`
  w-[9rem] text-green-500 font-bold underline mb-1
`;
const DetailContent = tw.div`
  w-[100%]
`;
const Hr = tw.hr`
  my-5
`;

const Project = ({
  img,
  title,
  date,
  features,
  repository,
  posting,
  frontend,
  backend,
  deployment,
  children,
}: ProjectProps) => {
  return (
    <Container>
      <Carousel>
        {img &&
          JSON.parse(img).map((src: string) => <img src={src} key={src} />)}
      </Carousel>
      <DetailContainer>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Describe>{children}</Describe>
        <ReadMeWrapper>
          <ReadMeBtn>
            <a href="#" target="_blank">
              상세보기
            </a>
          </ReadMeBtn>
        </ReadMeWrapper>
        <Hr />
        <DetailBox>
          <DetailList>
            <DetailTitle>주요 기능</DetailTitle>
            <DetailContent>{features}</DetailContent>
          </DetailList>
          <DetailList>
            <DetailTitle>Github</DetailTitle>
            <DetailContent>
              <a href={repository}>{repository}</a>
            </DetailContent>
          </DetailList>
          <DetailList>
            <DetailTitle>회고</DetailTitle>
            <DetailContent>
              <a href={posting}>{posting}</a>
            </DetailContent>
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
