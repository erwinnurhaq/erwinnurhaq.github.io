(() => {
	var saved = localStorage.getItem("theme");
	if (saved) {
		document.documentElement.setAttribute("data-theme", saved);
	} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
		document.documentElement.setAttribute("data-theme", "light");
	}
})();
