import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import SlideNav from './components/SlideNav';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<div className="layout">
			<SlideNav isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
			<Header openMenu={() => setIsMenuOpen(true)} />
			{children}
			<Footer />
		</div>
	);
}
