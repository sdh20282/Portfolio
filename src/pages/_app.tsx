import { ReactNode } from 'react';

import type { NextComponentType } from 'next';
import App, { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/golbal-style';
import { theme } from '@/styles/theme';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <title>sdh20282's portfolio</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps> => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;