import React, { FC } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Introduce: React.FC = () => {
  const Img = styled.img`
    height: 200px;
  `;
  const Detail = styled.div``;
  const Greeting = styled.div``;
  const Name = styled.h1``;
  const Describe = styled.div``;
  const Contact = styled.div``;
  const Tistory = styled.img`
    width: 10px;
  `;
  const Mail = () => <Icon disabled name="mail" />;
  const Github = () => <Icon disabled name="github" />;

  return (
    <>
      <Img src="/농담곰.png" />
      <Detail>
        <Greeting>HI THERE! I'm a Front-End Web Developer.</Greeting>
        <Name>곽지우</Name>
        <Describe>
          <p>
            문단, 영화, 연극, 마케팅 등 다양한 분야에서 다양한 사람과
            일했습니다.
          </p>
          <p>
            10인 미만 기업에서 문제 해결력을 인정받아 팀 리더를 맡은 경험이
            있습니다.
          </p>
          <p>
            쇼핑몰을 관리하며 웹 개발을 알게 되었고, 흥미를 느껴 학습을
            시작했습니다.
          </p>
          <p>
            UX를 중시해 한 명도 이탈하지 않는 서비스를 만드는 것이 목표입니다.
          </p>
        </Describe>
        <Contact>
          <a href="matilto:wldn0804@gmail.com">
            <Mail />
          </a>
          <a href="https://github.com/jiwoo84">
            <Github />
          </a>
          <a href="https://jiwoo84.tistory.com/">
            <Tistory src="/tistory.svg" />
          </a>
        </Contact>
      </Detail>
    </>
  );
};

export default Introduce;
