import React, { FC } from "react";
import Title from "./Title";
import tw from "tailwind-styled-components";

const Container = tw.div`
  p-[10%]
`;
const SkillWrapper = tw.div``;
const SkillBox = tw.div``;
const SkillName = tw.h3``;
const SkillList = tw.ul``;

const Skill: React.FC = () => {
  return (
    <Container>
      <Title title="Skill" length="w-[8rem]" />
      <SkillWrapper>
        <SkillBox>
          <SkillName>React</SkillName>
          <SkillList>
            <li>CSR 방식으로 SPA를 구축한 경험이 있습니다.</li>
            <li>Next.js를 사용해 SSR를 구현한 경험이 있습니다.</li>
            <li>
              react-router-dom를 사용하여 리로드 없는 페이지 전환을 구현한
              경험이 있습니다.
            </li>
            <li>
              예약 서비스의 로그인, 회원가입, 정보 관리 페이지를 구현한 경험이
              있습니다.
            </li>
          </SkillList>
        </SkillBox>
        <SkillBox>
          <SkillName>Typescript</SkillName>

          <SkillList>
            <li>
              컴포넌트 단위의 구조를 사용해 코드의 재사용성과 유지보수성을
              높이기 위해 주로 사용합니다.
            </li>
            <li>Next.js와 결합하여 정적 페이지를 구현한 경험이 있습니다.</li>
          </SkillList>
        </SkillBox>
        <SkillBox>
          <SkillName>Javascript</SkillName>
          <SkillList>
            <li>기본 문법과 특징을 이해하고, ES6문법을 사용할 수 있습니다.</li>
            <li>쇼핑몰 관리자 페이지 전체를 구현한 경험이 있습니다.</li>
            <li>Axios를 사용해 API를 호출한 경험이 있습니다.</li>
            <li>다양한 자료구조와 알고리즘을 구현할 수 있습니다.</li>
          </SkillList>
        </SkillBox>
        <SkillBox>
          <SkillName>Redux</SkillName>
          <SkillList>
            <li>
              state를 전역적으로 관리하고 Props Drilling을 막기 위해 주로
              사용합니다.
            </li>
            <li>redux-toolkit를 사용한 전역 상태 관리 경험이 있습니다.</li>
          </SkillList>
        </SkillBox>
        <SkillBox>
          <SkillName>Git</SkillName>
          <SkillList>
            <li>git flow 방식으로 두 개의 프로젝트를 진행했습니다.</li>
            <li>git bash를 통해 기본적인 동작을 수행할 수 있습니다.</li>
            <li>Github, Gitlab을 사용한 프로젝트 관리 경험이 있습니다.</li>
            <li>
              Udacity의 깃 커밋 스타일 가이드에 따라 커밋 컨벤션을 작성합니다.
            </li>
          </SkillList>
        </SkillBox>
      </SkillWrapper>
    </Container>
  );
};

export default Skill;
