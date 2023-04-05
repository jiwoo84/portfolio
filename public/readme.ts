export const portfolio = `
# 포트폴리오 웹 사이트

2023.03.27 - 2023.04.04 ｜ 개인 프로젝트

## 📌 서비스 소개

---

포트폴리오 용도로 제작한 스크롤 다운 웹사이트 입니다.

웹 사이트의 특성을 고려해 기술을 선택했으며, 그 결과 Next.js와 Tailwind를 학습할 수 있었습니다.

### 기술 스택

- FrontEnd: React, Next.js, Typescript, Recoil
- Deployment : Vercel

## 📌 구현 내용

---

### ✅ Next.js

순수 React로 개발한 사이트는 SEO에 불리했습니다. 그래서 Next.js가 CSR과 SSR을 함께 지원하기 때문에 큰 인기를 얻고 있습니다.

포트폴리오 사이트는 정적 페이지고 페이지 전환이 없기에 **빠른 초기 렌더링**이 중요했고, 

많은 이들에게 노출되기 위해 **SEO**도 신경써야 했기에 Next.js를 사용해서 페이지를 구현했습니다.

Next.js를 학습하면서 기술의 위대함을 느꼈고, 폴더 기반 라우팅의 편리함에 감탄했습니다.

### ✅ Typescript

처음으로 프로젝트에 적용해보며 문법에 익숙해질 수 있었습니다.

컴파일 단계에서 에러를 발견했기에 **빠른 유지보수**가 가능했고, 

규모가 큰 서비스일수록 타입스크립트를 사용해야한다는 이유를 체감했습니다.

### ✅ Recoil

전에는 redux를 이용했기에 쉬운 사용법으로 인기가 많은 recoil을 사용했습니다.

redux를 사용할 때보다 많은 **보일러 플레이트를 없앨 수 있었습니다**.

### ✅ Tailwind + Styled-component

**스타일의 확장성과 유지보수**를 위해 Tailwind를 사용했고,

이를 바탕으로 엘리먼트를 제공하는 프레임워크 flowbite를 같이 사용했습니다.

하지만 가독성을 해치고 **리액트 컴포넌트 단위의 장점**이 사라지는 것 같아

styled-component를 함께 결합한 tailwind-styled-component를 사용했습니다.

그 결과 PostCSS를 적용하여 JS파일 안에서 스타일 관리를 하면서, 컴포넌트 단위의 설계도 가능했습니다.

### ✅ SEO (검색 엔진 최적화)

**사이트의 많은 노출**을 위해 SEO를 진행했습니다.
구글 검색 엔진 뿐만 아니라 카카오톡 공유하기의 내용을 삽입했습니다.

### ✅ 반응형 웹 사이트

**좋은 UX를 위해 반응형 웹을 구현**했습니다.

화면의 크기에 따라 다른 스타일을 부여하는 Tailwind의 sm, md, lg 속성을 사용했습니다.

그 결과 모바일, 웹의 구분 뿐만 아니라 **웹 화면의 크기에도 반응하는 스타일**을 구현할 수 있었습니다.

### ✅ UX를 고려해 디자인한 UI

**포트폴리오에 적절한 UX**를 고려하여 **직접 UI를 디자인**했습니다.

페이지 전환보다 스크롤을 내리는 것이 보기 편할 것 같아 **스크롤 다운 페이지**로 구현하였습니다.

그리고 빠르게 내용으로 넘어갈 수 있도록 클릭시 해당 파트로 이동하는 **헤더바를 상단에 고정**했습니다.

보는 재미가 있도록 각 파트의 디자인을 다르게 했고, 여러가지 애니메이션을 부여했습니다.
`;

export const nadoddam = `
# 체험 예약 서비스 - 나도땀

2022.12.12 - 2022.12.30 ｜ 팀 프로젝트 (프론트 5 + 백 2)

## 📌서비스 소개
---
**농장과 소비자를 연결해주는 체험 예약 서비스**

풍년으로 인한 과일값 하락과 인력 부족으로 수확을 포기하는 농민들이 늘고 있다는 뉴스를 보고 기획한 서비스입니다.
직접 수확하고 과일을 가져가는 체험 상품을 판매한다면 농민과 소비자 모두 이득이지 않을까 생각했습니다.
또한 농장 체험을 예약하는 서비스가 부재하기 때문에 만든다면 수요가 있을 것이라 판단했습니다.
그렇게 '나도땀'은 농민과 소비자의 상생을 목표로 시작되었습니다!

### 기술 스택

- FrontEnd: React, Javascript, Redux, Styled-components, SCSS
- BackEnd: Node.js, express.js
- DataBase: MySQL
- Deployment : AWS

### 주요 서비스

- 과일, 지역별 농장 선택 및 예약
- 일반 회원 정보 / 예약 / 후기 관리
- 농장 회원 정보 등록 및 관리 (이미지, 주소, 날짜 & 시간표)
- 농장 회원 예약 / 후기 관리

### 담당 파트
전체 페이지의 6/14 구현하여 최대 기여
1. 로그인, 회원가입
2. 농장 회원 정보 등록, 수정, 삭제
3. 농장 회원 예약, 후기 관리
4. 전역 모달, 페이지네이션

## 📌 배운점

---

화면 깜빡거림 없이 페이지 전환에 있어 **좋은 UX를 제공하는 홈페이지**를 만들고 싶었습니다. 그래서 Create React App를 사용하여 **CSR 방식으로 SPA를 구축**했고,  react-router-dom를 사용하여 **리로드 없는 페이지 전환**을 구현했습니다.

처음으로 React를 사용하여 프로젝트를 진행하며 컴포넌트 단위의 설계의 유용함을 느꼈습니다. 최대한 보일러 플레이트 코드 없이 컴포넌트를 재활용 가능하도록 했으며, 그 과정에서 코드의 **확장성과 유지보수성**에 대해 많이 고민할 수 있었습니다.

프로젝트 진행중, **팀원이 페이지 구현을 포기하는 이슈**가 있었습니다. 자원해서 해당 페이지를 맡았고, 하루 만에 구현을 완료했습니다. 타인의 코드를 읽는 것에 익숙해질 수 있었고, 팀원을 도울 수록 얻는 것이 더 많다고 생각했습니다.

## 📌사용 기술 & 이유

---

- **React**
    1. CSR 방식으로 SPA를 구축하기 쉬움
    2. 컴포넌트 단위의 구현으로 코드의 재사용성이 높음
    3. 현재 가장 많이 사용되는 라이브러리이기 때문에 자료가 풍부함
- **Redux-toolkit**
    1. 전역적으로 사용되는 컴포넌트의 state를 관리하고, props drilling을 막기 위해 사용
    2. 7년 전에 개발된 라이브러리이기 때문에 비교적 안정적
    3. 점유율이 가장 높기 때문에 한 번은 꼭 사용해봐야 한다고 생각해서 선택함
- **Axios**
    1. JSON으로 변환하지 않아도 됨
    2. 브라우저 호환성이 뛰어남 
- **Styled-component & SCSS**
    1. 조건문, 반복문을 사용해 동적인 CSS 관리 가능
    2. 선택자의 중첩을 통해 반복되는 부모 요소 사용을 줄일 수 있음
    3. 컴포넌트 단위로 스타일을 지정하기 때문에 react의 장점을 극대화할 수 있음
    4. 별도의 CSS파일을 만들지 않고 컴포넌트 파일 안에서 스타일 작성이 가능함

## 📌구현 파트 & 상세 설명

---

### **✅ 모달 컴포넌트**

![nadoddam1](https://user-images.githubusercontent.com/86906350/229515222-15d92a34-d474-45c6-ae01-50458708d127.png)

- 상단에 띄우기 위해 react-dom의 createPotal 사용
- 전역에서 재사용 가능하도록 redux-tookit으로 열림 여부 상태값 관리
- 모달 내부에서 관리할 상태값을 최소화하기 위해 react-modal 사용
- 재사용성을 높이기 위해 prop로 가로, 세로 길이와 overflow 유형을 지정할 수 있게 구현
- [소스코드 보기](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/components/Modal.jsx)
- 포스팅: [[React] 모달 만들기 (React + redux-tookit + react-modal)](https://jiwoo84.tistory.com/158)

### **✅ 로그인, 회원가입**

![nadoddam2](https://user-images.githubusercontent.com/86906350/229515224-903f1277-e196-4624-8305-ad52c45b7ada.png)

- 리랜더링을 줄이고 철저한 에러 관리를 위해 react-hook-form 사용
- 중복 제출을 막기 위해 react-hook-form의 isSubmiting 사용
- 세션을 종료해도 로그인 상태를 유지하기 위해 localStorage에 토큰과 회원 유형 저장
- [로그인 소스코드](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/pages/Login.jsx) / [회원가입 소스코드](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/pages/Register.jsx)

### **✅ 농장 정보 등록 & 수정**

![nadoddam3](https://user-images.githubusercontent.com/86906350/229515227-9630550f-2169-4adc-82d9-ca9e6aee8724.png)

- 사용자 편의성을 위해 다음 주소 API 사용 [(소스코드 보기)](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/components/FindAddress.jsx)
- multer-S3를 사용했기 때문에 이미지를 formData로 전달함
    - api 호출을 줄이기 위해 이미지 이외의 정보도 같이 formData로 묶어서 전달함
    - 포스팅: [[Javascript] formData로 이미지, 문자열 묶어서 전달하기](https://jiwoo84.tistory.com/159)
- 팀원이 해결하지 못한 파트를 이어받아 하루만에 구현 완료함
    - 마감이 얼마 남지 않은 상황이었지만, 많은 일을 할수록 많은 것을 배울 수 있다고 생각해서 자원함
    - 페이지 url과 컴포넌트 관계부터 재구성, 4개의 파일을 해체하여 기능 구현 완료
    - 팀원을 돕고 타인의 코드를 읽고 해석해보며 얻는 것이 많았음
- [농장 등록&수정 소스코드](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/pages/EditFarm.jsx) / [농장 정보 소스코드](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/components/ShowFarm.jsx)

### **✅ 농장 예약 & 후기 관리**

![nadoddam4](https://user-images.githubusercontent.com/86906350/229515230-6e0d57c3-30cc-4a70-91ce-60d8dc502c24.png)

- 전역에서 사용 가능한 페이지네이션 컴포넌트 생성
    - [페이지네이션 소스코드](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/components/Pagination.jsx)
    - 포스팅: [[React] 프론트단에서 페이지네이션 구현하기](https://jiwoo84.tistory.com/170)
- 코드의 길이를 줄이고 정확한 숫자 표시를 위해 라이브러리 moment 사용
- 데이터를 받아 프론트단에서 정렬, 필터링 구현
- [농장 예약 소스코드](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/components/FarmReservationTable.jsx)  /  [농장 후기 소스코드](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/pages/FarmReview.jsx)

### **✅ URL 직접 접근 제한**

- 로그인 유무, 회원 유형을 판단하는 컴포넌트 생성
- 접근 제한이 필요한 페이지의 라우터에 위 컴포넌트 매핑
- 접근이 가능하면 페이지로 이동, 아니라면 404 페이지로 이동
- [소스코드 보기](https://github.com/jiwoo84/Nado-ddam/blob/master/client/src/components/RestrictionRoute.jsx)
`;

export const hugging = `
# 바닐라 자바스크립트 쇼핑몰 - Hugging

2022.10.31 - 2022.11.13 ｜ 팀 프로젝트 (프론트 3 + 백 2)

## 📌 서비스 소개

---

**Vanilla Javascript로 구현한 가구 쇼핑몰**

### 주요 기능

- 상품 장바구니 및 주문, 리뷰 작성
- 일반 회원 주문, 정보 관리
- 관리자 주문 / 상품 / 카테고리 관리

### 기술 스택

- FrontEnd: Javascript, HTML5, CSS3
- BackEnd: Node.js, express.js
- DataBase: MongoDB
- Deployment : Nginx, PM2

### 담당 파트

- 관리자 페이지 전체 (주문 / 상품 / 카테고리 관리)
- 일반 회원 리뷰 작성, 수정, 삭제

## 구현 파트 & 상세 내용

---

### **✅ 관리자 페이지**

![hugging1](https://user-images.githubusercontent.com/86906350/229520082-0fefcb7d-dfa2-4a08-833d-7adfa15c64cc.png)
![hugging1-1](https://user-images.githubusercontent.com/86906350/229520087-3298e92c-91ae-412a-89a9-c32d245ffac3.png)
- fetch를 사용하여 서버와 비동기 통신
- multer-S3를 사용했기 때문에 이미지를 formData로 전달함
- 사용자 편의성을 높이기 위해 데이터 보존에 신경 씀
    - 상품 삭제시 판매량이 있다면 삭제되지 않고 ‘판매중지’ 처리됨
    - 상품 카테고리 삭제시 속한 상품들은 ‘미설정’ 카테고리로 옮겨짐
    - 탈퇴한 사용자의 주문 내역을 보존하고 ‘탈퇴한 사용자’로 표시
- [소스코드 보기](https://github.com/jiwoo84/Hugging/tree/master/src/views/admin)

### **✅ 일반 회원 정보 수정**

![hugging2](https://user-images.githubusercontent.com/86906350/229520094-a1e18b9c-4f78-430f-b63b-25391b691c5c.png)

- 간편한 주소 검색을 위해 다음 주소 API 사용 ([소스코드 보기](https://github.com/jiwoo84/Hugging/blob/master/src/views/mypage/findAddress.js))
- 정규표현식 사용해서 입력값의 유효성 검사
- [소스코드 보기](https://github.com/jiwoo84/Hugging/blob/master/src/views/mypage/userEdit.js)

### **✅ 상품 리뷰**

![hugging3](https://user-images.githubusercontent.com/86906350/229520097-c89dd416-0e4a-4891-ad49-5693ad9c2978.png)
- 구현하지 못하는 팀원을 도와 완성함
- API 호출로 구매 여부를 확인 후, 구매시에만 작성되도록 처리

### ✅ CSS

중복 코드를 줄이고 효율성을 높이기 위해 CSS 변수(사용자 지정 속성)에 색상 지정해서 사용

## 📌 문제 & 해결

---

- **html에 DOM element를 추가하는 최선의 방법?**
    
    ⇒ 동일한 요소를 여러 개 추가한다면 createElement + DocumentFragment이 가장 좋은 방법
    
- **장바구니 정보는 어디 저장하는게 적합할까?**
    
    ⇒ indexedDB가 localStorage보다 많은 양의 구조화된 데이터를 저장할 때 유용하기에 사용
    
- **JS 파일을 type="module" 로 불러왔더니 함수가 호출되지 않는다?**
    
    ⇒ 모듈로 불러오면 해당 파일 만의 스코프가 생성되어 외부에서 접근할 수 없음
    
    - 포스팅: [[Javascript] 모듈로 설정된 파일의 변수는 전역 변수가 아니다!](https://jiwoo84.tistory.com/157)

`;
