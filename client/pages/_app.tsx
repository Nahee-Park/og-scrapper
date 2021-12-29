import '../styles/globals.css';
import type { AppProps } from 'next/app';
import EmojiProvider from '../Context/Provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmojiProvider>
      <Component {...pageProps} />
    </EmojiProvider>
  );
}

export default MyApp;
