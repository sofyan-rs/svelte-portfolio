type RevealOptions = {
	delay?: number;
	threshold?: number;
	direction?: 'up' | 'left' | 'right';
	distance?: number;
};

export function reveal(node: HTMLElement, opts: RevealOptions = {}) {
	const { delay = 0, threshold = 0.1, direction = 'up', distance = 20 } = opts;

	const dx = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
	const dy = direction === 'up' ? distance : 0;

	node.style.opacity = '0';
	node.style.transform = `translate(${dx}px, ${dy}px)`;
	node.style.transition = `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.style.opacity = '1';
				node.style.transform = 'translate(0, 0)';
				observer.disconnect();
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
