import React, { createContext, useState } from "react";
import Project from "./Project";
import tw from "tailwind-styled-components";
import Title from "../element/Title";
import SecondTitle from "../element/SecondTitle";
import { hugging, nadoddam, portfolio } from "../../public/readme";

export const Projects = () => {
  return (
    <Container id="project">
      <Title length="w-[8rem]">Project</Title>
      <SecondTitle>개인 프로젝트</SecondTitle>
      <Project
        img={JSON.stringify([
          "/포트폴리오1.png",
          "/포트폴리오2.png",
          "/포트폴리오3.png",
          "/포트폴리오4.png",
        ])}
        title="포트폴리오 웹 사이트"
        date="2023.03.24 ~ (1주)"
        features="구직자 정보, 프로젝트 내역, 학력, 스킬"
        repository="https://github.com/jiwoo84/portfolio"
        frontend="Next.js, React, Typescript, Recoil, Tailwind, Styled-components"
        backend={null}
        deployment="Vercel"
        posting={null}
        modalContentTxt={portfolio}
      >
        <div>
          초기 로딩 속도가 중요하기에 <Emphasis>Next.js</Emphasis>를 사용해{" "}
          <Emphasis>SSR 정적 페이지</Emphasis>를 구현했습니다.{" "}
          <Emphasis>Typescript</Emphasis>를 사용하며 타입 삽입에 익숙해졌고,
          컴파일 단계에서 에러를 처리할 수 있었습니다.
          <Spaces />
          <Emphasis>웹 사이트 성능 최적화</Emphasis>를 통해 lighthouse
          performancn 점수를 49점에서 92점으로, 웹 접근성 점수를 79점에서 86점으로 향상시켰습니다.
          또한 <Emphasis>초기 렌더링 속도를 50% 감소</Emphasis>
          시켰습니다.
          <Spaces />
          스타일의 자유도를 높이고 유지보수를 쉽게 하기 위해{" "}
          <Emphasis>tailwind</Emphasis>를 사용했고, Styled-components와 결합해
          가독성을 높이고 리액트 컴포넌트의 장점을 극대화했습니다.
          <Spaces />
          웹, 모바일 뿐만 아니라 웹 화면의 크기에도 반응하는{" "}
          <Emphasis>반응형</Emphasis> 웹 사이트를 구축했습니다.{" "}
          <Emphasis> UX에 대해 깊게 고민</Emphasis>
          하여 UI를 디자인했으며, 페이지 전환 없는 스크롤 다운 페이지를
          구현했습니다.
          <Spaces />
          Next.js에 익숙해진 계기가 되었고, 많은 이들의 유입을 위해{" "}
          <Emphasis>검색엔진최적화(SEO)</Emphasis>에 신경 쓴 프로젝트입니다.
        </div>
      </Project>
      <SecondTitle>팀 프로젝트</SecondTitle>
      <Project
        img={JSON.stringify([
          "/나도땀1.png",
          "/나도땀2.png",
          "/나도땀3.png",
          "/나도땀4.png",
          "/나도땀5.png",
          "/나도땀6.png",
        ])}
        title="농장 체험 예약 서비스"
        date="2022.12.12 ~ 12.30 (3주)"
        features="일반/ 농장주 회원 회원가입 및 로그인, 체험 예약 및 결제, 농장 정보/ 시간표/ 후기 관리, 일반 회원 정보/ 예약/ 후기 관리"
        repository="https://github.com/jiwoo84/Nado-ddam"
        frontend="React, Javascript, Redux, Styled-components, SCSS"
        backend="Node.js express MySQL Sequelize"
        deployment="AWS"
        posting="https://jiwoo84.tistory.com/155"
        modalContentTxt={nadoddam}
      >
        <div>
          <b>농장과 소비자의 상생을 돕기 위해 만든 체험 예약 서비스</b>입니다.
          과일값의 하락으로 버려지는 과일이 많다는 소식에 아이디어를 얻어 만들게
          되었습니다.
          <Spaces />
          회원가입&로그인, 농장 회원 관리 페이지 등{" "}
          <Emphasis>중요 로직을 담당</Emphasis>했으며, 전체 페이지의 6/14를
          구현하며 <Emphasis>최대로 기여</Emphasis>했습니다. <Spaces />
          좋은 UX를 제공하기 위해 React를 사용해{" "}
          <Emphasis>CSR 방식의 SPA</Emphasis>를 구축했습니다. 리로드 없는 페이지
          전환을 위해 react-router-dom을 사용했습니다. 이 과정에서{" "}
          <Emphasis>라우팅, CSR, SSR, SSG</Emphasis>에 대한 개념을 더욱 확실하게
          숙지할 수 있었습니다. <Spaces />
          데이터 전달 형태를 변경하여{" "}
          <Emphasis>API 호출 횟수를 50% 줄였습니다</Emphasis>
          <Spaces />
          상태값은 <Emphasis>redux-toolkit</Emphasis>을 사용하여 전역적으로
          관리했습니다. 안정적이고 많이 사용되는 기술인만큼 한 번은 써봐야겠다는
          생각으로 선택했습니다. <Spaces />
          처음으로 Styled-components를 사용했고, <Emphasis>PostCSS</Emphasis>가
          무엇인지 배우는 계기가 됐습니다. 디테일한 디자인을 위해 따로 css
          프레임워크를 사용하지 않고 디자인 시스템을 구축했습니다.
        </div>
      </Project>
      <Project
        img={JSON.stringify([
          "/허깅1.png",
          "/허깅2.png",
          "/허깅3.png",
          "/허깅4.png",
          "/허깅5.png",
          "/허깅6.png",
        ])}
        title="Vanila JS 쇼핑몰"
        date="2022.10.31 ~ (2주)"
        features="회원가입 및 로그인, 장바구니, 일반 회원 주문/ 정보 관리, 관리자 주문/ 상품/ 카테고리 관리"
        repository="https://github.com/jiwoo84/Nado-ddam"
        frontend="React, Javascript, Redux, Styled-components, SCSS"
        backend="Node.js express MySQL Sequelize"
        deployment="AWS"
        posting="https://jiwoo84.tistory.com/155"
        modalContentTxt={hugging}
      >
        <div>
          <b>자바스크립트의 기초를 다질 수 있었던 프로젝트</b>입니다. 데이터
          호출이 가장 많은 <Emphasis>관리자 페이지 전체</Emphasis>를
          담당했습니다. <Spaces />
          <Emphasis>백엔드 개발자와 협업</Emphasis>하는 과정에 대해 많이 배울 수
          있었습니다. 필요한 명세를 문서로 작성했고, 적극적으로 소통하여 모호한
          이슈를 만들지 않았습니다. <Spaces />
          유저의 편의성을 위해 <Emphasis>데이터 보존 처리</Emphasis>에 신경
          썼습니다. 상품 삭제시 판매량이 있다면 삭제가 아닌 판매중지 처리되며,
          상품 카테고리 삭제시 속한 상품들은 &apos;미설정&apos; 카테고리로
          옮겨집니다.
          <Spaces />
          <Emphasis>다음 주소 API</Emphasis>를 사용하여 주소 검색을
          구현했습니다. 처음으로 API를 커스터마이징하며 자신감을 얻을 수
          있었습니다.
        </div>
      </Project>
    </Container>
  );
};

const Container = tw.div`
  bg-[#f5f7f2] px-[5%] md:px-[10%] py-10
`;
const Emphasis = tw.span`
  text-red-500 font-bold  
`;
const Spaces = tw.p`
  mb-3
`;
