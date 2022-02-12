import {globalStyles} from '@globalCss';
import {NextUIProvider} from '@nextui-org/react';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  return (
    <NextUIProvider>
      <Component {...pageProps} />{' '}
    </NextUIProvider>
  );
}

export default MyApp;
