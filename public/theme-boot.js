// Theme boot: runs synchronously in <head> so the correct theme is applied
// before first paint (no flash). ALWAYS sets an explicit data-theme —
// there is no "unset" state for CSS to guess about.
// Single source of truth: localStorage value wins, else OS preference.
// NOTE: kept as a separate external file (not inlined) because the site
// is served with a Content-Security-Policy that blocks inline scripts.
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var theme = 'dark';
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      theme = 'light';
    }
  } catch (e) {}
  root.setAttribute('data-theme', theme);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#faf9f6' : '#121211');
})();
