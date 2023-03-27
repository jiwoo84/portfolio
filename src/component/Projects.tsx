import React from "react";
import Project from "./Project";
import tw from "tailwind-styled-components";
import Title from "./Title";

const Container = tw.div`
  bg-[#f5f8fd] p-8
`;

const SecondTitleBox = tw.div`
  w-[100%]
`;
const SecondTitle = tw.h2`
 my-5 mx-auto text-xl font-bold o bg-white rounded-full py-2 w-[12rem] text-center
`;

const Projects: React.FC = () => {
  return (
    <Container>
      <Title title="Project" />
      <SecondTitleBox>
        <SecondTitle>개인 프로젝트</SecondTitle>
      </SecondTitleBox>
      <Project
        imgScr="/프로젝트예시.png"
        title="포트폴리오 제작"
        date="2023.3.22 ~  (3주)"
        skill="React,React,React,React,React"
        describe={`React로 CSR을 통해 SPA로 구현한 서비스`}
        repository="https://github.com/jiwoo84/portfolio"
        showDetail="#"
        posting="#"
      />
      <hr />
      <SecondTitle>팀 프로젝트</SecondTitle>
      <Project
        imgScr="#"
        title="농장과 소비자를 연결하는 체험 예약 서비스"
        date="2022.12 (3주)"
        skill="React,React,React,React,React"
        describe={`React로 CSR을 통해 SPA로 구현한 서비스`}
        repository="https://github.com/jiwoo84/Nado-ddam"
        showDetail="#"
        posting="https://jiwoo84.tistory.com/155"
      />
      <Project
        imgScr="#"
        title="바닐라 자바스크립트로 만든 가구 쇼핑몰"
        date="2022.12 (3주)"
        skill="React,React,React,React,React"
        describe={`React로 CSR을 통해 SPA로 구현한 서비스`}
        repository="https://github.com/jiwoo84/Nado-ddam"
        showDetail="#"
        posting="https://jiwoo84.tistory.com/155"
      />
      <hr />
      <SecondTitle>진행중인 프로젝트</SecondTitle>
      <Project
        imgScr="#"
        title="주소를 투표 받아서 만날 장소를 정하는 서비스"
        date="2023.03 (3주)"
        skill="React,React,React,React,React"
        describe={`React로 CSR을 통해 SPA로 구현한 서비스`}
        repository="https://github.com/jiwoo84/Nado-ddam"
        showDetail="#"
        posting="https://jiwoo84.tistory.com/155"
      />
    </Container>
  );
};

export default Projects;
