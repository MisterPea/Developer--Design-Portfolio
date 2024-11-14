'use client';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../src/style/globals.scss';
import { AnimatePresence } from 'framer-motion';
import onSiteLoad from '@/components/onSiteLoad';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    onSiteLoad();
  }, []);

  const urlMapTitle: Record<string, string> = {
    "/": "The Development and Design Portfolio of Perry Angelora",
    "/project/the-times-pilot": "Case Study: the.times.pilot - Tailoring Your NY Times Digest",
    "/project/circuit-app": "Case Study: Circuit App - Revolutionizing Time Management for Creatives",
    "/project/made-with-d3": "Project: Made With D3.js - From Numbers to Narratives",
    "/about": "About Me : Perry Angelora"
  };

  const canonicalUrl = (`https://misterpea.me` + (router.asPath === '/' ? '' : router.asPath)).split('?')[0];

  return (
    <>
      <Head>
        <title>{urlMapTitle[router.pathname]}</title>
        <meta name="description" content="Perry's Portfolio - Developer / Designer / Technologist" key="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0 viewport-fit=cover" />
        <link rel="dns-prefetch" href="//use.typekit.net" />
        <link rel="preload" href="/fonts/TWKLausanne-150.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/TWKLausanne-300.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/TWKLausanne-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <meta name="theme-color" content="#303030" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
