import '../styles/globals.css';
// import type { AppProps } from 'next/app';
import ContentsProvider from '../Context/Provider';

function MyApp({ Component, pageProps }) {
  return (
    <ContentsProvider>
      <Component {...pageProps} />
    </ContentsProvider>
  );
}

export default MyApp;
