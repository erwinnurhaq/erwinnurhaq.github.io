import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/index.scss';
import cursorUtil from '../utils/cursorUtil';

function MyApp({ Component, pageProps }: AppProps) {
	React.useEffect(() => {
		cursorUtil();
	}, []);

	return (
		<>
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

				{/* icon */}
				<link href="https://css.gg/menu-grid-r.css" rel="stylesheet"></link>
				<link href="https://css.gg/close.css" rel="stylesheet"></link>
				<title>Erwin Nurhaq | Official Website</title>
				{/* icon */}

				<meta
					name="google-site-verification"
					content="90i3_EVcJv0mFgDdn49x_BXcxdvQcbNkVKmPf0qxugQ"
				/>
				<meta
					name="description"
					content="This is my personal and official website, contain everything that i need to introduce my self to the world."
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<div className="cursor" />
		</>
	);
}

export default MyApp;
