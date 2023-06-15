import Head from "next/head";

const HeadMetadata = () => {
  return (
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Log in with Gmail or Discord, send crypto to your friends and family"
      />
      <title>Kaching</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="/fonts/sharpie/Sharpie-Extrabold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>
  );
};
export default HeadMetadata;
