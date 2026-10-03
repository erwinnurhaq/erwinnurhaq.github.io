// erwww.in — small vanilla interactions, no frameworks
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // theme
  var toggle = document.getElementById("theme-toggle");
  function currentTheme() {
    return (
      document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
    );
  }
  function paintToggle() {
    if (!toggle) return;
    toggle.textContent = currentTheme() === "light" ? "◐ dark" : "◑ light";
  }
  paintToggle();
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paintToggle();
    });
  }

  // re-assert on bfcache restore + sync across tabs
  function applyStored() {
    var saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
      paintToggle();
    }
  }
  window.addEventListener("pageshow", applyStored);
  window.addEventListener("storage", function (ev) {
    if (ev && ev.key === "theme") applyStored();
  });
  // jakarta clock
  var clock = document.getElementById("clock");
  function tickClock() {
    if (!clock) return;
    try {
      var t = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit", minute: "2-digit",
        timeZone: "Asia/Jakarta",
      }).format(new Date());
      clock.textContent = "JKT " + t;
    } catch (e) {
      var d = new Date();
      clock.textContent =
        String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    }
  }
  tickClock();
  setInterval(tickClock, 20000);

  // scroll progress
  var bar = document.getElementById("progress");
  function onScroll() {
    if (!bar) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? h.scrollTop / max : 0;
    bar.style.transform = "scaleX(" + p + ")";
  }
  if (!reduce) {
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  // subtle tilt on index card (pointer only, no state spam)
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
          "rotate(1.6deg) perspective(700px) rotateY(" + (x * 7) + "deg) rotateX(" + (-y * 7) + "deg)";
      });
    });
    card.addEventListener("mouseleave", function () {
      cancelAnimationFrame(raf);
      card.style.transform = "";
    });
  }

  // copy email
  var copy = document.getElementById("copy-email");
  if (copy) {
    copy.addEventListener("click", function () {
      var email = "mail@erwww.in";
      function done() {
        var old = copy.textContent;
        copy.textContent = "[copied]";
        setTimeout(function () { copy.textContent = old; }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  }

  console.info("> still monochrome. still personal. — erwin");
})();
