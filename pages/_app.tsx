import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
// Layout
import MainLayout from 'layouts/MainLayout';
// Styles
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material';
import { GlobalStyles } from 'styles/globalStyles';
import { theme, themeMaterial } from 'styles/theme';
// Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
    </Head>
    <GlobalStyles />
    <MaterialThemeProvider theme={themeMaterial}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </MaterialThemeProvider>
  </>
);

export default MyApp;
