'use client';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../src/style/globals.scss';
import localFont from 'next/font/local';
import { AnimatePresence } from 'framer-motion';

const lausanne = localFont({
  src: [
    {
      path: '../public/fonts/TWKLausanne-800.woff', // Adjusted path for static files
      weight: '800',
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
    // Example use of router, e.g., for logging
    console.log(router.pathname, router.asPath);
  }, [router.pathname, router.asPath]);

  return (
    <AnimatePresence mode='wait'>
      <Component {...pageProps} key={router.asPath}/>
    </AnimatePresence>
  );
}

export default MyApp;
