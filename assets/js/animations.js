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

  /* ------------------------------------------------------------------------
     Selected work : parallaxe des images + bulle « View project » au curseur
     ------------------------------------------------------------------------ */
  var workSection = $(".work");
  if (workSection) {
    var workMedia = $$(".project-card__media", workSection);
    var workTicking = false;

    var updateWork = function () {
      workTicking = false;
      if (reducedMotion.matches) return;
      var vh = window.innerHeight;
      workMedia.forEach(function (media) {
        var r = media.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        /* -1 (bas de l'écran) → 1 (haut de l'écran) */
        var p = clamp((vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2), -1, 1);
        var img = media.querySelector("img");
        if (img) img.style.setProperty("--py", (p * r.height * 0.08).toFixed(1) + "px");
      });
    };

    var requestWork = function () {
      if (workTicking) return;
      workTicking = true;
      window.requestAnimationFrame(updateWork);
    };

    updateWork();
    window.addEventListener("scroll", requestWork, { passive: true });
    window.addEventListener("resize", requestWork);

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !workSection.classList.contains("work--bento") && !workSection.classList.contains("work--panels")) {
      var cursor = document.createElement("div");
      cursor.className = "work-cursor";
      cursor.setAttribute("aria-hidden", "true");
      document.body.appendChild(cursor);

      workMedia.forEach(function (media) {
        var card = media.closest(".project-card");
        var label = card ? card.querySelector('[data-i18n="ui.viewProject"]') : null;
        var btn = card ? card.querySelector("[data-open-project]") : null;

        media.addEventListener("pointerenter", function () {
          if (reducedMotion.matches) return;
          cursor.textContent = label ? label.textContent : "View";
          cursor.classList.add("is-visible");
        });
        media.addEventListener("pointerleave", function () {
          cursor.classList.remove("is-visible");
        });
        media.addEventListener("pointermove", function (e) {
          cursor.style.left = e.clientX + "px";
          cursor.style.top = e.clientY + "px";
        });
        /* Clic sur l'image = ouvrir le projet */
        media.addEventListener("click", function () {
          if (btn) btn.click();
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     Selected work — Proposition 2 : carrousel horizontal
     Mise en avant de la carte active, barre de progression, flèches, glisser à la souris
     ------------------------------------------------------------------------ */
  var workCarousel = $(".work--carousel");
  var track = workCarousel ? $("[data-work-track]", workCarousel) : null;
  if (track) {
    var slides = $$(".project-card", track);
    var bar = $("[data-work-progress]", workCarousel);
    var prevBtn = $("[data-work-prev]", workCarousel);
    var nextBtn = $("[data-work-next]", workCarousel);
    var carouselTicking = false;

    var updateCarousel = function () {
      carouselTicking = false;
      var max = track.scrollWidth - track.clientWidth;
      var ratio = max > 0 ? track.scrollLeft / max : 0;
      if (bar) {
        var visible = track.clientWidth / track.scrollWidth;
        bar.style.setProperty("--progress", Math.max(visible, ratio).toFixed(3));
      }
      if (prevBtn) prevBtn.disabled = track.scrollLeft <= 2;
      if (nextBtn) nextBtn.disabled = track.scrollLeft >= max - 2;

      var t = track.getBoundingClientRect();
      slides.forEach(function (slide) {
        if (reducedMotion.matches) { slide.style.setProperty("--focus", "1"); return; }
        var r = slide.getBoundingClientRect();
        /* 1 quand la carte est alignée à gauche de la piste, décroît en s'éloignant */
        var d = Math.abs(r.left - t.left) / r.width;
        slide.style.setProperty("--focus", clamp(1 - d * 0.9, 0, 1).toFixed(3));
      });
    };

    var requestCarousel = function () {
      if (carouselTicking) return;
      carouselTicking = true;
      window.requestAnimationFrame(updateCarousel);
    };

    var step = function (dir) {
      var w = slides[0] ? slides[0].getBoundingClientRect().width : track.clientWidth;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      track.scrollBy({ left: dir * (w + gap), behavior: reducedMotion.matches ? "auto" : "smooth" });
    };

    if (prevBtn) prevBtn.addEventListener("click", function () { step(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { step(1); });
    track.addEventListener("scroll", requestCarousel, { passive: true });
    window.addEventListener("resize", requestCarousel);

    /* Glisser à la souris (le tactile défile nativement) */
    var dragStartX = 0, dragStartScroll = 0, dragging = false, moved = false;
    track.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragging = true;
      moved = false;
      dragStartX = e.clientX;
      dragStartScroll = track.scrollLeft;
    });
    window.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var dx = e.clientX - dragStartX;
      if (!moved && Math.abs(dx) > 6) {
        moved = true;
        track.classList.add("is-dragging");
      }
      if (moved) track.scrollLeft = dragStartScroll - dx;
    });
    window.addEventListener("pointerup", function () {
      if (!dragging) return;
      dragging = false;
      if (moved) {
        track.classList.remove("is-dragging");
        /* Réaligne sur la carte la plus proche */
        var w = slides[0] ? slides[0].getBoundingClientRect().width : 1;
        var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        var i = Math.round(track.scrollLeft / (w + gap));
        track.scrollTo({ left: i * (w + gap), behavior: "smooth" });
      }
    });
    /* Un glisser ne doit pas ouvrir le projet */
    track.addEventListener("click", function (e) {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    }, true);

    updateCarousel();
  }
})();
