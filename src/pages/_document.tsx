import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="Will"/>
          <meta name="description" content="Contagem a partir do peso"/>

          <meta property="og:image" content="https://github.com/GiverPlay007.png"/>
          <meta property="og:description" content="Contagem a partir do peso!"/>
          <meta property="og:title" content="Contagem"/>

          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;300;400;500;600;800&display=swap"/>

          <link rel="shortcut icon" href="/favicon.png" type="png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}