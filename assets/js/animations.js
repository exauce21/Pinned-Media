/* ==========================================================================
   Pinned Media — animations au scroll
   - Révélations (fondu + glissement, balayage rouge des chapôs) : IntersectionObserver
   - Barre de progression des cartes « What we do »
   - Étape active du processus selon le scroll
   - Convergence des photos du bandeau « Trusted by »
   Tout est désactivé avec prefers-reduced-motion : le contenu s'affiche directement.
   ========================================================================== */

(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var clamp = function (v, min, max) { return Math.min(max, Math.max(min, v)); };

  /* ------------------------------------------------------------------------
     1. Révélations
     ------------------------------------------------------------------------ */
  var revealables = $$(".reveal, .wipe");

  /* Décalage progressif pour les éléments frères (grilles de cartes) */
  revealables.forEach(function (el) {
    var siblings = Array.prototype.filter.call(el.parentElement.children, function (child) {
      return child.classList.contains("reveal");
    });
    var index = siblings.indexOf(el);
    if (index > 0) el.style.setProperty("--delay", Math.min(index * 90, 360) + "ms");
  });

  function showAll() {
    revealables.forEach(function (el) { el.classList.add("is-in"); });
  }

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.15 });
    revealables.forEach(function (el) { observer.observe(el); });
  }

  reducedMotion.addEventListener("change", function () {
    if (reducedMotion.matches) showAll();
  });

  /* ------------------------------------------------------------------------
     2. Progression au scroll (un seul calcul par frame)
     ------------------------------------------------------------------------ */
  var stack = $("[data-services-stack]");
  var progressBar = $("[data-services-progress]");
  var process = $("[data-process]");
  var processWheel = process ? $(".process__wheel", process) : null;
  var trusted = $("[data-trusted]");

  /* Progression 0 → 1 d'un élément entre le moment où son haut atteint
     le haut de l'écran et celui où son bas atteint le bas de l'écran */
  function scrollProgress(el) {
    var rect = el.getBoundingClientRect();
    var range = rect.height - window.innerHeight;
    if (range <= 0) return rect.top <= 0 ? 1 : 0;
    return clamp(-rect.top / range, 0, 1);
  }

  function updateTrustedMode() {
    if (!trusted) return;
    trusted.classList.toggle("is-interactive", !reducedMotion.matches);
  }

  var ticking = false;

  function update() {
    ticking = false;

    /* Barre de progression des cartes empilées */
    if (stack && progressBar) {
      var rect = stack.getBoundingClientRect();
      var start = window.innerHeight * 0.75;
      var p = clamp((start - rect.top) / (rect.height), 0, 1);
      progressBar.style.setProperty("--progress", p.toFixed(3));
    }

    /* Étape active du processus */
    if (process && process.classList.contains("is-interactive") && window.PMProcess) {
      var pp = scrollProgress(process);
      var count = window.PMProcess.count;
      window.PMProcess.setStep(Math.min(count - 1, Math.floor(pp * count)));
      if (processWheel) processWheel.style.setProperty("--arc", pp.toFixed(3));
    }

    /* Convergence des photos */
    if (trusted && trusted.classList.contains("is-interactive")) {
      var tp = clamp((scrollProgress(trusted) - 0.1) / 0.65, 0, 1);
      var eased = 1 - Math.pow(1 - tp, 3);
      trusted.style.setProperty("--p", eased.toFixed(3));
    }
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  updateTrustedMode();
  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  reducedMotion.addEventListener("change", function () {
    updateTrustedMode();
    requestUpdate();
  });
})();
