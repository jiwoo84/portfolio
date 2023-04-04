import React, { ReactNode, useContext } from "react";
import tw from "tailwind-styled-components";
import Carousel from "../module/Carousel";
import ModalContainer from "../module/Modal";

interface ProjectProps {
  img: string;
  title: string;
  date: string;
  features: string;
  repository: string;
  frontend: string;
  posting: string | null;
  backend: string | null;
  deployment: string;
  children: ReactNode;
  modalContentTxt: string;
}

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
  modalContentTxt,
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
          <ModalContainer modalContentTxt={modalContentTxt} />
        </ReadMeWrapper>
        <Hr />

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
        {posting && (
          <DetailList>
            <DetailTitle>회고</DetailTitle>
            <DetailContent>
              <a href={posting}>{posting}</a>
            </DetailContent>
          </DetailList>
        )}
        <DetailList>
          <DetailTitle>Frontend</DetailTitle>
          <DetailContent>{frontend}</DetailContent>
        </DetailList>
        {backend && (
          <DetailList>
            <DetailTitle>Backend</DetailTitle>
            <DetailContent>{backend}</DetailContent>
          </DetailList>
        )}
        <DetailList>
          <DetailTitle>Deployment</DetailTitle>
          <DetailContent>{deployment}</DetailContent>
        </DetailList>
      </DetailContainer>
    </Container>
  );
};

export default Project;

const Container = tw.div`
    flex flex-col xl:flex-row bg-white hover:shadow-xl py-10 px-3 sm:px-5 md:px-10 lg:px-10 mb-5 rounded-2xl 
`;
const Title = tw.h2`
  text-[1.5rem] md:text-[2rem] lg:text-[2rem] font-extrabold text-green-500 mb-2
`;
const Date = tw.p`
  text-sm text-gray-400
`;
const DetailContainer = tw.div`
  px-5 md:px-14 xl:ml-20
`;
const Describe = tw.div`
  py-5 
`;
const ReadMeWrapper = tw.div`
  flex justify-end
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
