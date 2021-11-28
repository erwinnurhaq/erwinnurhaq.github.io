import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';
import cursorUtil from '../utils/cursorUtil';
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    cursorUtil();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S16GSLPLZE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag('config', 'G-S16GSLPLZE')
					`,
          }}
        />
        <meta
          name="google-site-verification"
          content="90i3_EVcJv0mFgDdn49x_BXcxdvQcbNkVKmPf0qxugQ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/icons/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/assets/icons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Erwin Nurhaq" />
        <meta
          name="description"
          content="Erwin Nurhaq's personal website and contain everything the world need to see."
        />
        <title>Erwin Nurhaq | Website</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <div className="cursor" />
    </React.Fragment>
  );
}

export default MyApp;
