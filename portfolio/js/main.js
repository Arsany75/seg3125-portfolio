/* ============================================================
   Arsany Dematry — SEG3125 Portfolio
   (Bootstrap's bundle already handles the navbar toggle & scrollspy.)
   ============================================================ */

(function () {
  "use strict";

  /* 1) Keep the footer year current automatically. */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* 2) Reveal sections gently as they scroll into view.
        Progressive enhancement: if IntersectionObserver or motion
        is unavailable / unwanted, everything is simply shown. */
  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) || reduceMotion) {
    revealItems.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  revealItems.forEach(function (el) { observer.observe(el); });

  /* 3) Reveal the hero immediately on load (it's above the fold). */
  window.addEventListener("load", function () {
    document.querySelectorAll(".hero .reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  });
})();
