import React from "react";
import Title from "../element/Title";
import tw from "tailwind-styled-components";
import SecondTitle from "../element/SecondTitle";

const Skill = () => {
  return (
    <Container id="skill">
      <Title length="w-[5.5rem]">Skill</Title>
      <SkillContainer>
        <SecondTitle>Frontend</SecondTitle>
        <SkillWrapper>
          <SkillBox>
            <SkillName className="text-[#00c5f6]">React</SkillName>
            <SkillList>
              <Li>- CSR 방식으로 SPA를 구축한 경험 있음</Li>
              <Li>- 컴포넌트 단위의 설계에 익숙함</Li>
              <Li>- 렌더링 성능 개선 경험함</Li>
            </SkillList>
          </SkillBox>
          <SkillBox>
            <SkillName className="text-[#2f74c0]">Typescript</SkillName>
            <SkillList>
              <Li>- TS 사용하여 개인 프로젝트 진행함</Li>
              <Li>- 타입 추론 활용하여 개발자 경험 개선 가능</Li>
            </SkillList>
          </SkillBox>
          <SkillBox>
            <SkillName className="text-[#f2be4e]">Javascript</SkillName>
            <SkillList>
              <Li>- 기본 문법과 특징을 이해하고, ES6문법에 익숙함</Li>
              <Li>- 다양한 자료구조와 알고리즘 구현 가능</Li>
            </SkillList>
          </SkillBox>
          <SkillBox>
            <SkillName className="text-[#7f42c3]">Redux</SkillName>
            <SkillList>
              <Li>- redux-toolkit 사용해서 팀 프로젝트 진행함</Li>
              <Li>- 전역 모달, 페이지네이션 상태값 관리 경험 있음</Li>
            </SkillList>
          </SkillBox>
          <SkillBox>
            <SkillName>Next.js</SkillName>
            <SkillList>
              <Li>
                - 초기 SSR 렌더링을 통해 SEO에 최적화된 정적 웹 사이트 구현
                경험함
              </Li>
            </SkillList>
          </SkillBox>
          <SkillBox>
            <SkillName className="text-[#254bdc]">CSS 프레임워크</SkillName>
            <SkillList>
              <Li>- Tailwind </Li>
              <Li>- Styled-components</Li>
              <Li>- SASS / SCSS</Li>
              <Li>- Bootstrap / Bulma</Li>
            </SkillList>
          </SkillBox>
        </SkillWrapper>
        <SecondTitle>ETC</SecondTitle>
        <SkillWrapper>
          <SkillBox>
            <SkillName className="text-black">Vercel</SkillName>
            <SkillList>
              <Li>- Next.js 프로젝트 배포 경험 보유</Li>
            </SkillList>
          </SkillBox>
          <SkillBox>
            <SkillName className="text-[#e84d31]">Git</SkillName>
            <SkillList>
              <Li>- git flow 방식의 프로젝트 진행 경험</Li>
              <Li>- git bash 통한 git 기능 수행 가능</Li>
              <Li>- Github, Gitlab을 사용한 프로젝트 관리</Li>
            </SkillList>
          </SkillBox>
          <SkillBox>
            <SkillName className="text-[#0ac87e]">Figma</SkillName>
            <SkillList>
              <Li>- 와이어프레임 제작 경험 보유</Li>
            </SkillList>
          </SkillBox>
        </SkillWrapper>
      </SkillContainer>
    </Container>
  );
};

export default Skill;

const Container = tw.div`
  px-[5%] md:px-[10%] pt-10 pb-16
`;
const SkillContainer = tw.div`
`;
const SkillWrapper = tw.div`
 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-3 sm:gap-7 md:gap-7 lg:gap-7
`;
const SkillBox = tw.div`
w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100
`;
const SkillName = tw.h3`
 text-xl font-bold mb-2
`;
const SkillList = tw.ol``;
const Li = tw.li`
  mb-1
`;
