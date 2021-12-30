import '../styles/globals.css';
// import type { AppProps } from 'next/app';
import ContentsProvider from '../Context/Provider';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>해빗도리들의 컨텐츠 저장소</title>
        <meta name="description" content="해빗도리들의 컨텐츠 저장소" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="hhttps://firebasestorage.googleapis.com/v0/b/socar-server-814e9.appspot.com/o/car%2Fhavitog.png?alt=media"
        />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta name="description" content="해빗도리들의 컨텐츠 저장소" />
        <meta name="keywords" content="해빗도리들의 컨텐츠 저장소" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HAVIT's Content Storage" />
        <meta property="og:url" content="https://havit-archive.vercel.app/" />
        <meta property="og:site_name" content="HAVIT's Content Storage" />
        <meta property="og:description" content="해빗도리들의 컨텐츠 저장소" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/81923229/147764431-4ca0fcc4-fb58-4554-88ca-b233ca8bdd80.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://firebasestorage.googleapis.com/v0/b/socar-server-814e9.appspot.com/o/car%2Fhavitog.png?alt=media"
        />
        {/* <img
      src="https://user-images.githubusercontent.com/81923229/147679923-499b556c-7b5c-44bd-add4-58ed731b8397.png"
      width="100%"
      height="200px"
    /> */}
      </Head>
      <ContentsProvider>
        <Component {...pageProps} />
      </ContentsProvider>
    </>
  );
}

export default MyApp;
