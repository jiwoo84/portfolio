import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
// @ts-ignore
import bundleCss from "!raw-loader!../assets/styles/tailwindSSR.css";
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="프론트엔드 개발자 곽지우의 포트폴리오 웹 사이트"
          />
          <meta property="og:title" content="곽지우의 포트폴리오" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="/포트폴리오1.png" />
          <meta
            property="og:description"
            content="프론트엔드 개발자 곽지우의 이정표가 담긴 포트폴리오입니다."
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
}
