import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Kelsie S. Murphy | Portfolio</title>
        <meta
          name="Kelsie Murphy's Software Developer Portfolio"
          content="A software engineer with experience in UX/UI, looking for a development role with a team I can learn and grow with. I have experience building clean, engaging web applications for businesses and social enterprises using React, Typescript and other technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logomark.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
