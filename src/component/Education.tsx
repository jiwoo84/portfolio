import React from "react";
import tw from "tailwind-styled-components";
import Title from "../element/Title";

const Education = () => {
  return (
    <Container id="education">
      <Title length="w-[21rem]">Education & Career</Title>
      <ListContainer>
        <ListWrapper>
          <Circle />
          <ListTitle>엘리스 SW 엔지니어 트랙 3기</ListTitle>
          <ListDate>2022.09 - 2022.12</ListDate>
          <p>- 프론트엔드 핵심 기술과 백엔드 기초를 배우는 교육 코스</p>
          <p>- 2번의 팀 프로젝트 진행</p>
        </ListWrapper>
        <ListWrapper>
          <Circle />
          <ListTitle>방송통신대학교 컴퓨터과학과</ListTitle>
          <ListDate>2021.09 - 휴학</ListDate>
          <p>학점: 4.1 / 4.5 (성적장학금 증진)</p>
        </ListWrapper>
        <ListWrapper>
          <Circle />
          <ListTitle>디엘컴퍼니 (마케터)</ListTitle>
          <ListDate>2019.10 - 2020.08</ListDate>
          <p>- 10인 미만 기업에서 팀 리더를 맡음</p>
          <p>
            - 회사의 노후된 메뉴얼을 개선해 업무 속도를 50% 향상시킨 경험 보유
          </p>
          <p>
            - 소비층을 고려한 마케팅 전략을 세워 매출을 30% 상승시킨 경험 보유
          </p>
        </ListWrapper>
        <ListWrapperLast>
          <Circle />
          <ListTitle>명지전문대학교 문예창작과</ListTitle>
          <ListDate>2015.03 - 2018.02</ListDate>
          <p>소설, 비평을 주로 썼으며 올바른 글쓰기의 토대를 학습함</p>
        </ListWrapperLast>
      </ListContainer>
    </Container>
  );
};

export default Education;

const Container = tw.div`
  bg-[#f5f7f2] px-[5%] md:px-[10%] lg:md:px-[10%] pt-10 pb-20 flex flex-col md:flex-row lg:flex-row
`;
const ListContainer = tw.div`
  flex flex-col mt-10 ml-5 md:mt-[4rem] md:ml-32
`;
const ListWrapper = tw.div`
relative pl-7 pb-10 border-l-2 border-green-500 mt-[-5px]
`;
const ListWrapperLast = tw(ListWrapper)`
  pb-3
`;
const Circle = tw.div`
  absolute w-[1.5rem] h-[1.5rem] border-2 border-green-500 rounded-full bg-[#f5f7f2] left-[-12px]
`;
const ListTitle = tw.h3`
  text-xl font-bold mt-[-2px] mb-[2px] 
`;
const ListDate = tw.p`
  text-gray-400 mb-4
`;
