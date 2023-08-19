import React from "react";
import "tailwindcss/tailwind.css";
import tw from "tailwind-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <Container id="about">
      <Img src="/얼굴사진.jpg" alt="프로필사진" />
      <IntroduceContainer>
        <Name>곽지우</Name>
        <IntroduceComment>
          <p>안녕하세요! <b>똑 부러지게 일하는 개발자</b> 곽지우입니다.</p>
          <p>업무로 만난 프로그래밍의 매력에 빠져 웹 서비스를 만들고 있습니다🥰</p>
        </IntroduceComment>
        <Hr />
        <Description>
          <DescriptionList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp; 회사에서 <b>팀 리더</b>를 맡아 업무 분담과 팀 매니징을 한 경험이 있습니다.
          </DescriptionList>
          <DescriptionList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp; 다양한 분야의 사회경험을 바탕으로 <b>유연하고 원활한 커뮤니케이션</b>에 자신 있어요!
          </DescriptionList>
          <DescriptionList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp; <b>근성있고 노력하는 성격</b>이고, 블로그와 깃허브 기록으로 확인하실 수 있습니다.
          </DescriptionList>
          <DescriptionList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp; <b>빠르게 습득</b>하고 <b>문제해결</b>에 적극적으로 나서서 별명이 <b>행동대장</b>이예요.
          </DescriptionList>
          <DescriptionList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp; 좋은 코드 뿐만 아니라 <b>비지니스적 임팩트</b>를 고려하는 개발자가 되고 싶어요!
          </DescriptionList>
        </Description>
        <Contact>
          <ResumeBtn href="#" target="_blank" aria-label="resume-button">
            Resume
          </ResumeBtn>
          <ContactBtns>
            <ContactBtn aria-label="email-button">
              <a href="mailto:wldn0804@gmail.com" target="_blank" aria-label="email-link">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </ContactBtn>
            <ContactBtn aria-label="github-button">
              <a href="https://github.com/jiwoo84" target="_blank" aria-label="github-link">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </ContactBtn>
            <TistoryBtn aria-label="blog-button">
              <a href="https://jiwoo84.tistory.com/" target="_blank" aria-label="blog-link">
                <ImgTistory src="/tistory.svg" alt="blog-icon" />
              </a>
            </TistoryBtn>
          </ContactBtns>
        </Contact>
      </IntroduceContainer>
    </Container>
  );
};

export default About;

const Container = tw.div`
  flex flex-col md:flex-row justify-center items-center mt-[12rem] md:mt-[2rem] lg:mt-[2rem] px-[10%] py-[15rem] mb-[8rem] md:mb-10 lg:mb-10 h-[90vh] box-border
`;
const Img = tw.img`
  rounded-[50%] w-[50%] md:w-[40%] lg:w-[25%] mb-5  md:ml-20 lg:ml-20 md:mb-16 lg:mb-16
`;
const IntroduceContainer = tw.div`
  flex flex-col w-[100%] md:p-10 lg:p-10 md:ml-16 lg:ml-16
`;
const Greeting = tw.p`
  text-base
`;
const Name = tw.p`
  text-4xl md:text-5xl lg:text-5xl mt-1 mb-5 md:mt-3 lg:mt-3 md:mb-8 lg:mb-8 font-bold text-green-500 w-[100%]
`;
const IntroduceComment = tw.div`
  mb-3 md:mb-4 text-green-800 md:text-lg
`
const Hr = tw.hr`
  mb-3
`
const Description = tw.ul`
  md:text-lg lg:text-lg mb-5
`;
const DescriptionList = tw.li`
  mb-2 md:mb-3
`;
const Contact = tw.div`
  flex mb-7 p-1 justify-between max-w-sm
  `;
const ResumeBtn = tw.a`
  px-8 md:px-10 py-2 md:mr-5 rounded-full shadow-md text-white bg-green-500
`;
const ContactBtns = tw.div`
  flex mr-5
`;
const ContactBtn = tw.button`
bg-white mr-2 md:mr-4 hover:bg-gray-100 text-gray-800 py-1 px-[5%] border border-gray-400 rounded shadow
`;
const ImgTistory = tw.img`
  absolute top-2.5 right-3 w-6
`;
const TistoryBtn = tw.button`
  relative bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-400 rounded shadow
`;
