export default function cursorUtil() {
	const cursor: HTMLDivElement | null = document.querySelector('.cursor');
	const hoverable: NodeListOf<Element> = document.querySelectorAll('[role="button"]');

	window.addEventListener('mousemove', (e: MouseEvent) => {
		if (cursor) {
			cursor.style.top = `${e.clientY}px`;
			cursor.style.left = `${e.clientX}px`;
		}
	});

	hoverable.forEach((el) => {
		el.addEventListener('mouseenter', () => {
			cursor?.classList.add('hover');
		});
		el.addEventListener('mouseout', () => {
			cursor?.classList.remove('hover');
		});
	});
}
