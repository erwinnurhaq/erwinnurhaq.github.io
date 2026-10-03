// erwww.in — small vanilla interactions, no frameworks.
// NOTE: kept as a separate external file (not inlined/bundled) because the
// site is served with a Content-Security-Policy that blocks inline scripts.
(function () {
  "use strict";
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ----- theme: single setter, validated values only -----
  var LIGHT = "light";
  var DARK = "dark";
  var toggle = document.getElementById("theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function isTheme(v) {
    return v === LIGHT || v === DARK;
  }
  function storedTheme() {
    try {
      var v = localStorage.getItem("theme");
      return isTheme(v) ? v : null;
    } catch (e) {
      return null;
    }
  }
  function currentTheme() {
    // data-theme is always set by the synchronous boot script in <head>;
    // fall back to dark (site default) if anything ever removed it.
    var t = root.getAttribute("data-theme");
    return isTheme(t) ? t : DARK;
  }
  function paintToggle() {
    if (!toggle) return;
    var light = currentTheme() === LIGHT;
    // Label shows the CURRENT theme; aria-label announces the action.
    toggle.textContent = light ? "◐ light" : "◑ dark";
    toggle.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
  }
  function applyTheme(next, persist) {
    if (!isTheme(next)) return;
    root.setAttribute("data-theme", next);
    if (themeMeta) {
      themeMeta.setAttribute("content", next === LIGHT ? "#faf9f6" : "#121211");
    }
    if (persist) {
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    }
    paintToggle();
  }
  paintToggle();
  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(currentTheme() === LIGHT ? DARK : LIGHT, true);
    });
  }

  // Re-assert the stored theme on bfcache restore, and sync across tabs.
  function resync() {
    var saved = storedTheme();
    if (saved && saved !== currentTheme()) applyTheme(saved, false);
    else paintToggle();
  }
  window.addEventListener("pageshow", resync);
  window.addEventListener("storage", function (ev) {
    if (ev && ev.key === "theme") resync();
  });

  // ----- jakarta clock (aligned to the minute, no drift) -----
  var clock = document.getElementById("clock");
  function tickClock() {
    if (!clock) return;
    try {
      clock.textContent =
        "JKT " +
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        }).format(new Date());
    } catch (e) {
      var d = new Date();
      clock.textContent =
        String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    }
    var ms = 60000 - (Date.now() % 60000) + 250;
    setTimeout(tickClock, ms);
  }
  if (clock) tickClock();

  // ----- scroll progress (rAF-throttled, one listener) -----
  var bar = document.getElementById("progress");
  var queued = false;
  function onScroll() {
    if (!bar) return;
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      var h = root;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? h.scrollTop / max : 0;
      bar.style.transform = "scaleX(" + p + ")";
    });
  }
  if (bar && !reduce) {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ----- reveal on scroll -----
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  } else {
    els.forEach(function (el) {
      el.classList.add("in");
    });
  }

  // ----- subtle tilt on index card (fine pointers only) -----
  var card = document.getElementById("index-card");
  if (card && !reduce && window.matchMedia("(pointer: fine)").matches) {
    var raf = 0;
    card.addEventListener("mousemove", function (ev) {
      var r = card.getBoundingClientRect();
      var x = (ev.clientX - r.left) / r.width - 0.5;
      var y = (ev.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        card.style.transform =
          "rotate(1.6deg) perspective(700px) rotateY(" +
          x * 7 +
          "deg) rotateX(" +
          -y * 7 +
          "deg)";
      });
    });
    card.addEventListener("mouseleave", function () {
      cancelAnimationFrame(raf);
      card.style.transform = "";
    });
  }

  // ----- copy email -----
  var copy = document.getElementById("copy-email");
  if (copy) {
    copy.addEventListener("click", function () {
      var email = "mail@erwww.in";
      function done() {
        var old = copy.textContent;
        copy.textContent = "[copied]";
        setTimeout(function () {
          copy.textContent = old;
        }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
        } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  }

  console.info("> still monochrome. still personal. — erwin");
})();
