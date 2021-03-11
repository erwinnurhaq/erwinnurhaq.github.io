import React from 'react';
import { useRouter } from 'next/router';

interface Props {
	openMenu: () => void;
}

export default function Header({ openMenu }: Props) {
	const router = useRouter();
	return (
		<div className="header">
			<div role="button" className="header__menu-button" onClick={openMenu}>
				<i role="button" className="gg-menu-grid-r"></i>
			</div>
			<div role="button" className="header__logo" onClick={() => router.push('/')}>
				<img role="button" src="/assets/n.svg" alt="logo" />
			</div>
		</div>
	);
}
