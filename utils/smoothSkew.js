// const config = {
// 	height: window.innerHeight,
// 	width: window.innerWidth,
// };

class Smooth {
	constructor(windowWidth) {
		this.bindMethods();

		this.data = {
			ease: 0.1,
			current: 0,
			last: 0,
			rounded: 0,
		};

		this.dom = {
			el: document.querySelector('[data-scroll]'),
			content: document.querySelector('[data-scroll-content]'),
		};

		this.rAF = null;
		this.windowWidth = windowWidth;

		this.init();
	}

	bindMethods() {
		['scroll', 'run', 'resize'].forEach((fn) => (this[fn] = this[fn].bind(this)));
	}

	setStyles() {
		Object.assign(this.dom.el.style, {
			// position: 'relative',
			// position: 'fixed',
			// top: 0,
			// left: 0,
			height: '100%',
			width: '100%',
			// overflow: 'hidden',
		});
	}

	setHeight() {
		document.body.style.height = `${this.dom.content.getBoundingClientRect().height}px`;
	}

	resize() {
		this.setHeight();
		this.scroll();
	}

	// preload() {
	// 	imagesLoaded(this.dom.content, (instance) => {
	// 		this.setHeight();
	// 	});
	// }

	scroll() {
		this.data.current = window.scrollY;
	}

	run() {
		this.data.last += (this.data.current - this.data.last) * this.data.ease;
		this.data.rounded = Math.round(this.data.last * 100) / 100;

		const diff = this.data.current - this.data.rounded;
		const acc = diff / this.windowWidth;
		const velo = +acc;
		const skew = velo * 7.5;

		this.dom.content.style.transform = `translate3d(0, -${this.data.rounded}px, 0) skewY(${skew}deg)`;

		this.requestAnimationFrame();
	}

	on() {
		this.setStyles();
		this.setHeight();
		this.addEvents();

		this.requestAnimationFrame();
	}

	off() {
		this.cancelAnimationFrame();

		this.removeEvents();
	}

	requestAnimationFrame() {
		this.rAF = requestAnimationFrame(this.run);
	}

	cancelAnimationFrame() {
		cancelAnimationFrame(this.rAF);
	}

	destroy() {
		document.body.style.height = '';

		this.data = null;

		this.removeEvents();
		this.cancelAnimationFrame();
	}

	resize() {
		this.setHeight();
		this.data.rounded = this.data.last = this.data.current;
	}

	addEvents() {
		window.addEventListener('resize', this.resize, { passive: true });
		window.addEventListener('scroll', this.scroll, { passive: true });
	}

	removeEvents() {
		window.removeEventListener('resize', this.resize, { passive: true });
		window.removeEventListener('scroll', this.scroll, { passive: true });
	}

	init() {
		this.setHeight();
		this.on();
	}
}

export default Smooth;
