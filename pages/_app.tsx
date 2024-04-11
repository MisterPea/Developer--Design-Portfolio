'use client';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../src/style/globals.scss';
import localFont from 'next/font/local';
import { AnimatePresence } from 'framer-motion';
import onSiteLoad from '@/components/onSiteLoad';

const lausanne = localFont({
  src: [
    {
      path: '../public/fonts/TWKLausanne-800.woff', // Adjusted path for static files
      weight: '800'
    },
    {
      path: '../public/fonts/TWKLausanne-600.woff2',
      weight: '600',
    },
    {
      path: '../public/fonts/TWKLausanne-300.woff',
      weight: '300',
    },
    {
      path: '../public/fonts/TWKLausanne-150.woff',
      weight: '150',
    }
  ],
  variable: '--font-lausanne'
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    onSiteLoad();
  }, []);

  return (
    <>
      <Head>
        <title>The Development and Design Portfolio of Perry Angelora</title>
        <meta name="description" content="Perry's Portfolio - Developer / Designer / Technologist" key="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0 viewport-fit=cover" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <meta name="theme-color" content="#303030" />
      </Head>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
