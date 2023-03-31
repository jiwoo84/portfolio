import React, { FC } from "react";
import Title from "./Title";
import tw from "tailwind-styled-components";

const Container = tw.div`
p-[10%]
`;
const SkillContainer = tw.div`
`;
const SkillWrapper = tw.div`
 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-7 
`;
const SkillTitle = tw.h3`
text-2xl font-bold  mb-5 text-center
`;
const SkillBox = tw.div`
w-[100%] h-[100%] my-5 sm:mr-5 md:mr-5 lg:mr-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
`;
const SkillName = tw.h3`
 text-xl font-bold mb-2
`;
const SkillList = tw.ol``;

const Skill: React.FC = () => {
  return (
    <Container>
      <Title title="Skill" length="w-[6rem]" />
      <SkillContainer>
        <SkillTitle>Frontend</SkillTitle>
        <SkillWrapper>
          <SkillBox>
            <SkillName className="text-[#00c5f6]">React</SkillName>
            <SkillList>
              <li>- CSR 방식으로 SPA를 구축한 경험이 있습니다.</li>
              <li>- Next.js를 사용해 SSR를 구현한 경험이 있습니다.</li>
              <li>
                - 컴포넌트 단위의 설계에 익숙하며, 렌더링 성능을 개선시킨 경험이
                있습니다.
              </li>
            </SkillList>
          </SkillBox>

          <SkillBox>
            <SkillName className="text-[#2f74c0]">Typescript</SkillName>
            <SkillList>
              <li>- 타입 추론을 활용하여 개발자 경험을 개선합니다.</li>
            </SkillList>
          </SkillBox>

          <SkillBox>
            <SkillName className="text-[#f2be4e]">Javascript</SkillName>
            <SkillList>
              <li>
                - 기본 문법과 특징을 이해하고, ES6문법을 사용할 수 있습니다.
              </li>
              <li>- 다양한 자료구조와 알고리즘을 구현할 수 있습니다.</li>
            </SkillList>
          </SkillBox>

          <SkillBox>
            <SkillName>Next.js</SkillName>
            <SkillList>
              <li>
                - state를 전역적으로 관리하고 Props Drilling을 막기 위해 주로
                사용합니다.
              </li>
            </SkillList>
          </SkillBox>

          <SkillBox>
            <SkillName className="text-[#7f42c3]">Redux</SkillName>
            <SkillList>
              <li>
                - state를 전역적으로 관리하고 Props Drilling을 막기 위해 주로
                사용합니다.
              </li>
              <li>- redux-toolkit를 사용한 전역 상태 관리 경험이 있습니다.</li>
            </SkillList>
          </SkillBox>
        </SkillWrapper>
        <SkillTitle>Version Control</SkillTitle>
        <SkillWrapper>
          <SkillBox>
            <SkillName>Git</SkillName>
            <SkillList>
              <li>- git flow 방식으로 두 개의 프로젝트를 진행했습니다.</li>
              <li>- git bash를 통해 기본적인 동작을 수행할 수 있습니다.</li>
              <li>- Github, Gitlab을 사용한 프로젝트 관리 경험이 있습니다.</li>
              <li>
                - Udacity의 깃 커밋 스타일 가이드에 따라 커밋 컨벤션을
                작성합니다.
              </li>
            </SkillList>
          </SkillBox>
        </SkillWrapper>
      </SkillContainer>
    </Container>
  );
};

export default Skill;
