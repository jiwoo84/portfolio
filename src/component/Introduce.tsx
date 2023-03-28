import React, { FC } from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import tw from "tailwind-styled-components";

const Container = tw.div`
  flex flex-col justify-center items-center px-[10%] h-[100vh]
`;
const Img = tw.img`
  mb-5 rounded-[100%]
`;
const Greeting = tw.h1``;
const Name = tw.p`
  text-5xl mt-5 font-bold
`;
const Describe = tw.ol`
  my-10
`;
const DescribeList = tw.li`
  mb-2
`;
const Contact = tw.div`
  mb-14
  `;
const ResumeBtn = tw.a`
  mr-10 py-2 px-4 rounded-full shadow-md text-white bg-blue-500
`;
const ContactBtns = tw.div`
  w-[50%] place-content-evenly 
`;
const ContactBtn = tw.button`
bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow mx-1
`;
const ImgTistory = tw.img`
  absolute top-2.5 right-3 w-6
`;
const TistoryBtn = tw.button`
  mx-1 relative bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-400 rounded shadow
`;

const Introduce: React.FC = () => {
  return (
    <Container>
      <Img src="/농담곰.png" className="w-52" />
      <Greeting>
        <p>HI THERE!</p>
        <p>
          I'm a <b>Front-End</b> Web Developer.
        </p>
      </Greeting>
      <Name>곽지우</Name>
      <Describe>
        <DescribeList>
          <DescribeList>
            <FontAwesomeIcon icon={faCheck} size="xs" />
            &nbsp;10인 미만 기업에서 팀 리더를 맡은 경험이 있습니다.
          </DescribeList>
          <FontAwesomeIcon icon={faCheck} size="xs" />
          &nbsp;마케팅, 연극, 영화계 등 다양한 곳에서 다양한 사람들과
          일했습니다.
        </DescribeList>
        <DescribeList>
          <FontAwesomeIcon icon={faCheck} size="xs" />
          &nbsp;쇼핑몰을 관리 업무로 웹 개발을 접해서 시작하게 됐습니다.
        </DescribeList>
        <DescribeList>
          <FontAwesomeIcon icon={faCheck} size="xs" />
          &nbsp;UX를 중시하며 유저 이탈이 적은 서비스를 만드는 것이 목표입니다.
        </DescribeList>
      </Describe>
      <Contact className="contact" style={{ display: "flex" }}>
        <ResumeBtn href="/곽지우.pdf" target="_blank">
          Resume
        </ResumeBtn>
        <ContactBtns style={{ display: "flex" }}>
          <ContactBtn>
            <a href="https://matilto:wldn0804@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </ContactBtn>
          <ContactBtn>
            <a href="https://github.com/jiwoo84" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </ContactBtn>
          <TistoryBtn>
            <ImgTistory src="tistory.svg" />
            <a href="https://jiwoo84.tistory.com/" target="_blank"></a>
          </TistoryBtn>
        </ContactBtns>
      </Contact>
    </Container>
  );
};

export default Introduce;
