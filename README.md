# 포트폴리오 웹 사이트

2023.03.27 - 2023.04.04 ｜ 개인 프로젝트

<img src="https://user-images.githubusercontent.com/86906350/230710945-547a7b94-e47e-410b-85d1-fb9a73e4c08a.png" width="600px"/>

<br/>

## 📌 서비스 소개

포트폴리오 용도로 제작한 스크롤 다운 웹사이트 입니다.

웹 사이트의 특성을 고려해 기술을 선택했으며, 그 결과 Next.js와 Tailwind를 학습할 수 있었습니다.

### URL

https://kwjportfolio.vercel.app/

### 기술 스택

- **FrontEnd**: React, Next.js, Typescript, Recoil
- **Deployment** : Vercel

<br/>

## 📌 구현 내용

### ✅ SEO (검색 엔진 최적화)

**사이트의 많은 노출**을 위해 SEO를 진행했습니다.

플러그인을 사용하지 않고 Next.js에서 제공되는 Head를 사용했습니다.

검색에 노출되는 내용과 카카오톡 공유하기의 내용을 삽입했습니다.

- 포스팅: [[Next.js] 플러그인 사용없이 SEO(검색 엔진 최적화)하기](https://jiwoo84.tistory.com/183)

### ✅ 성능 최적화

성능 최적화를 위해 이미지 최적화, 웹 접근성 향상, 불필요한 js 코드 제거를 진행했습니다.

그 결과 퍼포먼스 점수 49점을 92점으로, 접근성 점수를 79점에서 86점으로 상승시킬 수 있었습니다.

또한 초기 렌더링 속도를 50% 감소시킬 수 있었습니다.

- 포스팅: [웹 사이트 성능 측정 및 최적화 (with LightHouse)](https://jiwoo84.tistory.com/179)

### ✅ 반응형 웹 사이트

**좋은 UX를 위해 반응형 웹을 구현**했습니다.

화면의 크기에 따라 다른 스타일을 부여하는 Tailwind의 sm, md, lg 속성을 사용했습니다.

그 결과 모바일, 웹의 구분 뿐만 아니라 **웹 화면의 크기에도 반응하는 스타일**을 구현할 수 있었습니다.

### ✅ UX를 고려해 디자인한 UI

**포트폴리오에 적절한 UX**를 고려하여 **직접 UI를 디자인**했습니다.

페이지 전환보다 스크롤을 내리는 것이 보기 편할 것 같아 **스크롤 다운 페이지**로 구현하였습니다.

그리고 빠르게 내용으로 넘어갈 수 있도록 클릭시 해당 파트로 이동하는 **헤더바를 상단에 고정**했습니다.

보는 재미가 있도록 각 파트의 디자인을 다르게 했고, 여러가지 애니메이션을 부여했습니다.

### ✅ Tailwind + Styled-component

**스타일의 확장성과 유지보수**를 위해 Tailwind를 사용했고,

이를 바탕으로 엘리먼트를 제공하는 프레임워크 flowbite를 같이 사용했습니다.

하지만 가독성을 해치고 **리액트 컴포넌트 단위의 장점**이 사라지는 것 같아

styled-component를 함께 결합한 tailwind-styled-component를 사용했습니다.

그 결과 PostCSS를 적용하여 JS파일 안에서 스타일 관리를 하면서, 컴포넌트 단위의 설계도 가능했습니다.

- 포스팅: [[Next.js] Tailwind-styled-components의 SSR 구현하기](https://jiwoo84.tistory.com/178)

### ✅ Vercel를 통한 배포

Next.js에서 권장하는 배포 툴인 vercel을 이용하여 배포했습니다.

혼자 환경 세팅부터 배포까지 하며 서비스를 구현하는 한 사이클을 경험할 수 있었습니다.

### ✅ Next.js

포트폴리오 사이트는 정적 페이지고 페이지 전환이 없기에 **빠른 초기 렌더링**이 중요했고,

많은 이들에게 노출되기 위해 **SEO**도 신경써야 했기에 Next.js를 사용해서 페이지를 구현했습니다.

Next.js를 학습하면서 기술의 위대함을 느꼈고, 폴더 기반 라우팅의 편리함에 감탄했습니다.

### ✅ Typescript

처음으로 프로젝트에 적용해보며 문법에 익숙해질 수 있었습니다.

컴파일 단계에서 에러를 발견했기에 **빠른 유지보수**가 가능했고,

규모가 큰 서비스일수록 타입스크립트를 사용해야한다는 이유를 체감했습니다.

<br/>

## 📌 실행 방법

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
