import React from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import tw from "tailwind-styled-components";

const About = () => {
  return (
    <Container>
      <Img src="/얼굴사진.jpg" alt="프로필사진" />
      <IntroduceContainer>
        <Greeting>
          <p>HI THERE!</p>
          <p>
            I&apos;m a <b>Front-End</b> Web Developer.
          </p>
        </Greeting>
        <Name>곽지우</Name>
        <Description>
          <DescriptionList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp;<b>10인 미만 기업</b>에서 <b>팀 리더</b>를 맡은 경험이
            있습니다.
          </DescriptionList>
          <DescriptionList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp;다양한 분야에서 다양한 사람들과 일하며 <b>
              커뮤니케이션
            </b>{" "}
            능력을 길렀습니다.
          </DescriptionList>
          <DescriptionList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp;쇼핑몰을 관리 업무로 웹 개발을 접해서 시작하게 됐습니다.
          </DescriptionList>
          <DescriptionList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp;<b>UX를 중시</b>하며 <b>유저 이탈이 적은 서비스</b>를 만드는
            것이 목표입니다.
          </DescriptionList>
        </Description>
        <Contact>
          <ResumeBtn
            href="/resume.pdf"
            target="_blank"
            aria-label="resume-button"
          >
            Resume
          </ResumeBtn>
          <ContactBtns>
            <ContactBtn aria-label="email-button">
              <a
                href="mailto:wldn0804@gmail.com"
                target="_blank"
                aria-label="email-link"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </ContactBtn>
            <ContactBtn aria-label="github-button">
              <a
                href="https://github.com/jiwoo84"
                target="_blank"
                aria-label="github-link"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </ContactBtn>
            <TistoryBtn aria-label="blog-button">
              <a
                href="https://jiwoo84.tistory.com/"
                target="_blank"
                aria-label="blog-link"
              >
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
  flex flex-col md:flex-row justify-center items-center mt-[7rem] md:mt-[0] px-[10%] py-[15rem] mb-10 h-[90vh] box-border
`;
const Img = tw.img`
  rounded-[50%] w-[50%] md:w-[40%] lg:w-[25%] mb-5  md:ml-20 lg:ml-20 md:mb-16 lg:mb-16
`;
const IntroduceContainer = tw.div`
  flex flex-col w-[100%] md:p-10 lg:p-10 md:ml-16 lg:ml-16
`;
const Greeting = tw.h1``;
const Name = tw.p`
  text-4xl md:text-5xl lg:text-5xl mt-2 mb-5 md:mt-5 lg:mt-5 md:mb-8 lg:mb-8 font-bold text-green-500 w-[100%]
`;
const Description = tw.ol`
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
