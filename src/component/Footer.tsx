import React from "react";
import tw from "tailwind-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

const Container = tw.div`
    bg-green-500 py-7 flex flex-col items-center
`;
const BtnWrapper = tw.div`
    flex
`;
const IconBtn = tw.div`
    bg-white rounded-xl m-3
`;
const TistoryBtn = tw.img`
    w-[2.8rem] 
`;

const Footer = () => {
  return (
    <>
      <Container>
        <BtnWrapper>
          <IconBtn>
            <a href="mailto:wldn0804@gmail.com" target="_blank">
              <TistoryBtn src="/mail.png" />
            </a>
          </IconBtn>
          <IconBtn>
            <a href="https://github.com/jiwoo84" target="_blank">
              <TistoryBtn src="/github.png" />
            </a>
          </IconBtn>
          <IconBtn>
            <a href="https://jiwoo84.tistory.com/" target="_blank">
              <TistoryBtn src="/squareTistory.png" />
            </a>
          </IconBtn>
        </BtnWrapper>
        <p>© 2023. Kwak Jiwoo. All rights reserved.</p>
      </Container>
    </>
  );
};

export default Footer;
