import React from "react";
import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <>
      <Container>
        <BtnContainer>
          <BtnWrapper>
            <a href="mailto:wldn0804@gmail.com" target="_blank">
              <Btn src="/mail.png" />
            </a>
          </BtnWrapper>
          <BtnWrapper>
            <a href="https://github.com/jiwoo84" target="_blank">
              <Btn src="/github.png" />
            </a>
          </BtnWrapper>
          <TistoryBtnWrapper>
            <a href="https://jiwoo84.tistory.com/" target="_blank">
              <Btn src="/squareTistory.png" />
            </a>
          </TistoryBtnWrapper>
        </BtnContainer>
        <p>© 2023. Kwak Jiwoo. All rights reserved.</p>
      </Container>
    </>
  );
};

export default Footer;

const Container = tw.div`
    bg-green-500 py-7 flex flex-col items-center
`;
const BtnContainer = tw.div`
    flex
`;
const BtnWrapper = tw.div`
    bg-white rounded-xl m-3
`;
const TistoryBtnWrapper = tw.div`
    rounded-xl m-3
`;
const Btn = tw.img`
    w-[3rem] hover:scale-110
`;
