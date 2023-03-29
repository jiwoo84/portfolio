import React from "react";
import Project from "./Project";
import tw from "tailwind-styled-components";
import Title from "./Title";

const Container = tw.div`
  bg-[#f5f7f2] px-[10%] py-10
`;

const SecondTitle = tw.h2`
 my-7 mx-auto text-xl font-bold bg-white rounded-full py-2 w-[12rem] text-center shadow-lg 
`;

const Projects: React.FC = () => {
  return (
    <Container>
      <Title title="Project" length="w-[8rem]" />
      <SecondTitle>개인 프로젝트</SecondTitle>
      <Project
        imgsrc={JSON.stringify(["/나도땀1.png", "/나도땀2.png"])}
        title="포트폴리오 웹페이지"
        date="2023.03.24 ~ (1주)"
        describe={`초기 로딩 속도가 중요하기에 Next.js를 사용해 SSR 페이지를 구현했습니다.
        Typescript를 사용하며 타입 삽입에 익숙해졌고, 에러를 컴파일 단계에서 확인하여 처리할 수 있었습니다.
         가독성 좋고 스타일에 자유도가 높은 tailwind를 사용했고, Styled-components와 결합해 리액트 컴포넌트의 장점을 극대화했습니다.
         UI & UX를 깊게 고민하여, 페이지 이동이 적고 왼쪽에 긴 사이드바가 있는 형태를 디자인했습니다.
         Next.js에 조금 더 익숙해진 계기가 되었고, 많은 기업들의 유입을 위해 검색엔진최적화(SEO)에 신경 쓴 프로젝트입니다.
        `}
        features="구직자 정보, 프로젝트 내역, 학력, 스킬"
        repository="https://github.com/jiwoo84/portfolio"
        frontend="Next.js, React, Typescript, Redux, Styled-components, SCSS"
        backend="Node.js express MySQL Sequelize"
        deployment="AWS"
        posting="https://jiwoo84.tistory.com/155"
      />
      <hr />
      <SecondTitle>팀 프로젝트</SecondTitle>
      <Project
        imgsrc={JSON.stringify([
          "/나도땀1.png",
          "/나도땀2.png",
          "/나도땀3.png",
          "/나도땀4.png",
          "/나도땀5.png",
          "/나도땀6.png",
        ])}
        title="농장과 소비자를 연결하는 체험 예약 서비스"
        date="2022.12.12 ~ (3주)"
        features="일반/ 농장주 회원 회원가입 및 로그인, 체험 예약 및 결제, 농장 정보/ 시간표/ 후기 관리, 일반 회원 정보/ 예약/ 후기 관리"
        describe={`농장과 소비자의 상생을 돕기 위해 만든 체험 예약 서비스입니다. 과일값의 하락으로 버려지는 과일이 많다는 소식에 아이디어를 얻어 만들게 되었습니다. 
        
        회원가입&로그인, 농장 회원 관리 페이지 등 중요 로직을 구현했습니다. 전체 페이지의 7/14를 구현하며 최대로 기여했습니다.
        
        서비스 접속 후, 좋은 UX를 제공하기 위해 React를 사용해 CSR 방식의 SPA를 구축했습니다. 리로드없는 페이지 전환을 위해 react-router-dom을 사용했습니다. 이 과정에서 라우팅, CSR, SSR, SSG에 대한 개념을 더욱 확실하게 숙지할 수 있었습니다.

        전역으로 사용 가능한 모달과 페이지네이션을 구현했습니다. React 컴포넌트의 유연하고 확장성있는 구조에 대해 고민할 수 있었습니다.

        react-hook-form, react-modal, moment 등 다양한 프레임워크를 사용하여 개발 생산성을 증대했습니다. 
        
        상태값은 redux-toolkit을 사용하여 전역적으로 관리했습니다. 안정적이고 많이 사용되는 기술인만큼 한 번은 써봐야겠다는 생각으로 선택했습니다.

        처음으로 Styled-components를 사용했고, PostCSS가 무엇인지 배우는 계기가 됐습니다. 디테일한 디자인을 위해 따로 css 프레임워크를 사용하지 않고 디자인 시스템을 구축했습니다.
        `}
        repository="https://github.com/jiwoo84/Nado-ddam"
        frontend="React, Javascript, Redux, Styled-components, SCSS"
        backend="Node.js express MySQL Sequelize"
        deployment="AWS"
        posting="https://jiwoo84.tistory.com/155"
      />
      <Project
        imgsrc={JSON.stringify([
          "/허깅1.png",
          "/허깅2.png",
          "/허깅3.png",
          "/허깅4.png",
          "/허깅5.png",
          "/허깅6.png",
        ])}
        title="바닐라 자바스크립트로 만든 가구 쇼핑몰"
        date="2022.10.31 ~ (2주)"
        features="회원가입 및 로그인, 장바구니, 일반 회원 주문/ 정보 관리, 관리자 주문/ 상품/ 카테고리 관리"
        describe={`자바스크립트의 기초를 다질 수 있었던 프로젝트입니다. 데이터 호출이 가장 많은 관리자 페이지 전체를 맡았습니다.

        백엔드 개발자와 협업하는 과정에 대해 많이 배울 수 있었습니다. 필요한 명세를 문서로 작성했고, 적극적으로 소통하여 모호한 이슈를 만들지 않았습니다.

        유저의 편의성을 위해 데이터 보존 처리에 신경 썼습니다. 상품 삭제시 판매량이 있다면 삭제가 아닌 판매중지 처리되며, 상품 카테고리 삭제시 속한 상품들은 '미설정' 카테고리로 옮겨집니다.

        다음 주소 API를 사용하여 주소 검색을 구현했습니다. 처음으로 여러가지 기능을 가진 API를 커스터마이징하며 자신감을 얻을 수 있었습니다.

        `}
        repository="https://github.com/jiwoo84/Nado-ddam"
        frontend="React, Javascript, Redux, Styled-components, SCSS"
        backend="Node.js express MySQL Sequelize"
        deployment="AWS"
        posting="https://jiwoo84.tistory.com/155"
      />
      <hr />
      <SecondTitle>진행중인 프로젝트</SecondTitle>
      <Project
        imgsrc={JSON.stringify(["/허깅1.png", "/허깅2.png"])}
        title="친구와 만날 장소를 정할 수 있는 장소 투표 서비스"
        date="2022.3.05 ~ 진행중"
        features="회원가입 및 로그인, 장바구니, 일반 회원 주문/ 정보 관리, 관리자 주문/ 상품/ 카테고리 관리"
        describe={`자바스크립트의 기초를 다질 수 있었던 프로젝트입니다. 데이터 호출이 가장 많은 관리자 페이지 전체를 맡았습니다.

        백엔드 개발자와 협업하는 과정에 대해 많이 배울 수 있었습니다. 필요한 명세를 문서로 작성했고, 적극적으로 소통하여 모호한 이슈를 만들지 않았습니다.

        유저의 편의성을 위해 데이터 보존 처리에 신경 썼습니다. 상품 삭제시 판매량이 있다면 삭제가 아닌 판매중지 처리되며, 상품 카테고리 삭제시 속한 상품들은 '미설정' 카테고리로 옮겨집니다.

        다음 주소 API를 사용하여 주소 검색을 구현했습니다. 처음으로 여러가지 기능을 가진 API를 커스터마이징하며 자신감을 얻을 수 있었습니다.

        `}
        repository="https://github.com/jiwoo84/Nado-ddam"
        frontend="React, Javascript, Redux, Styled-components, SCSS"
        backend="Node.js express MySQL Sequelize"
        deployment="AWS"
        posting="https://jiwoo84.tistory.com/155"
      />
    </Container>
  );
};

export default Projects;
