import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="프론트엔드 개발자 곽지우의 포트폴리오 웹 사이트"
        />
        <meta property="og:title" content="개발자 곽지우의 포트폴리오" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/titleImg.png" />
        <meta property="og:article:author" content="곽지우" />
        <link
          rel="shortcut icon"
          sizes="16x16 32x32 64x64"
          href="icons/favicon.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
