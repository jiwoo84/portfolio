import React from "react";
import Project from "./Project";

const Projects: React.FC = () => {
  return (
    <>
      <h1>Project</h1>
      <h2>개인 프로젝트</h2>
      <Project
        imgScr="#"
        title="포트폴리오 제작"
        date="2023.3.22 ~  (3주)"
        skill="React,React,React,React,React"
        describe={`React로 CSR을 통해 SPA로 구현한 서비스`}
        repository="https://github.com/jiwoo84/portfolio"
        showDetail="#"
        posting="#"
      />
      <hr />
      <h2>팀 프로젝트</h2>
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
      <h2>진행중인 프로젝트</h2>
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
    </>
  );
};

export default Projects;
