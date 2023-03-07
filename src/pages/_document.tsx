import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:image"
          content="https://lh6.googleusercontent.com/ECIvWjqmow7W5VNJwjjQyNcdZtF9sM_DkRnaxl7M1p76HWXy_T1hUwH0_Rfn0sVAzZk=w2400"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

