/* ==========================================================================
   Pinned Media — interactions
   Header · menu · façades vidéo · modale vidéo · modale projet (+ lien profond)
   · médias non validés (?preview) · lightbox · onglets du processus · bios
   · confidentialité · année du footer
   ========================================================================== */

(function () {
  "use strict";

  var i18n = window.PMi18n || {
    apply: function () {},
    t: function (k, f) { return f; },
    getLang: function () { return "en"; },
    isPreview: new URLSearchParams(location.search).has("preview")
  };

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  if (i18n.isPreview) document.documentElement.classList.add("is-preview");

  /* ------------------------------------------------------------------------
     Dialogues : verrouillage du scroll, fermeture au clic sur le fond
     ------------------------------------------------------------------------ */
  function openDialog(dialog) {
    if (dialog.open) return;
    dialog.showModal();
    document.body.classList.add("is-locked");
  }

  function syncLock() {
    var anyOpen = $$("dialog").some(function (d) { return d.open; });
    document.body.classList.toggle("is-locked", anyOpen);
  }

  $$("dialog").forEach(function (dialog) {
    dialog.addEventListener("close", syncLock);
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog && !dialog.classList.contains("menu-overlay")) dialog.close();
    });
  });

  document.addEventListener("click", function (event) {
    var closer = event.target.closest("[data-dialog-close]");
    if (closer) closer.closest("dialog").close();
  });

  /* ------------------------------------------------------------------------
     Header : transparent sur le hero, opaque ensuite
     ------------------------------------------------------------------------ */
  var header = $("#site-header");
  var hero = $(".hero");
  if (header && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle("is-solid", !entries[0].isIntersecting);
    }, { rootMargin: "-80px 0px 0px 0px", threshold: 0 }).observe(hero);
  } else if (header) {
    header.classList.add("is-solid");
  }

  /* ------------------------------------------------------------------------
     Menu plein écran (dialog natif : focus piégé et Échap gérés par le navigateur)
     ------------------------------------------------------------------------ */
  var menu = $("#menu-overlay");
  var menuToggle = $(".menu-toggle");

  if (menu && menuToggle) {
    menuToggle.addEventListener("click", function () {
      openDialog(menu);
      menuToggle.setAttribute("aria-expanded", "true");
      var first = $(".menu-list a", menu);
      if (first) first.focus();
    });

    menu.addEventListener("close", function () {
      menuToggle.setAttribute("aria-expanded", "false");
      if (!menu.dataset.navigating) menuToggle.focus();
      delete menu.dataset.navigating;
    });

    $$("[data-menu-close]", menu).forEach(function (btn) {
      btn.addEventListener("click", function () { menu.close(); });
    });

    $$(".menu-list a", menu).forEach(function (link) {
      link.addEventListener("click", function (event) {
        var id = link.getAttribute("href").slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        event.preventDefault();
        menu.dataset.navigating = "1";
        menu.close();
        goTo(target, id);
      });
    });
  }

  /* Défile vers une section et y place le focus (accessibilité) */
  function goTo(target, id) {
    target.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    if (history.pushState) history.pushState(null, "", "#" + id);
  }

  /* ------------------------------------------------------------------------
     Posters YouTube : maxresdefault, repli sur hqdefault puis sur un visuel local
     ------------------------------------------------------------------------ */
  function initPosters(root) {
    $$("img[data-yt-poster]", root).forEach(function (img) {
      var id = img.getAttribute("data-yt-poster");
      var fallback = function () {
        if (img.dataset.ytStep === "hq") {
          img.dataset.ytStep = "local";
          img.src = img.dataset.fallback || "assets/img/hero/video-poster.svg";
          return;
        }
        if (img.dataset.ytStep === "local") return;
        img.dataset.ytStep = "hq";
        img.src = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
      };
      img.addEventListener("error", fallback);
      img.addEventListener("load", function () {
        /* YouTube renvoie une image grise de 120 px quand maxres n'existe pas */
        if (img.naturalWidth > 0 && img.naturalWidth <= 120) fallback();
      });
      if (img.complete && img.naturalWidth > 0 && img.naturalWidth <= 120) fallback();
    });
  }

  initPosters(document);

  /* ------------------------------------------------------------------------
     Façades vidéo : l'iframe youtube-nocookie n'est injectée qu'au clic
     ------------------------------------------------------------------------ */
  function buildIframe(id, title) {
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) +
      "?autoplay=1&rel=0&hl=" + i18n.getLang();
    iframe.title = title || "YouTube video";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    return iframe;
  }

  document.addEventListener("click", function (event) {
    var play = event.target.closest(".video-facade__play");
    if (!play) return;
    var facade = play.closest(".video-facade");
    var title = play.textContent.replace(/\s+/g, " ").trim();
    var iframe = buildIframe(facade.getAttribute("data-video-id"), title);
    facade.innerHTML = "";
    facade.appendChild(iframe);
    iframe.focus();
  });

  /* Modale vidéo (vidéo d'en-tête du hero) */
  var videoDialog = $("#video-dialog");
  var videoTrigger = null;

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-video-dialog]");
    if (!trigger || !videoDialog) return;
    videoTrigger = trigger;
    var key = trigger.getAttribute("data-video-title-key");
    var title = i18n.t(key, "Pinned Media header video");
    var frame = $("[data-video-frame]", videoDialog);
    frame.innerHTML = "";
    frame.appendChild(buildIframe(trigger.getAttribute("data-video-dialog"), title));
    openDialog(videoDialog);
  });

  if (videoDialog) {
    videoDialog.addEventListener("close", function () {
      $("[data-video-frame]", videoDialog).innerHTML = ""; /* coupe le son */
      if (videoTrigger) videoTrigger.focus();
    });
  }

  /* ------------------------------------------------------------------------
     Médias non validés (projet Chemonics)
     data-cleared="false" → masqué, sauf avec ?preview (badge affiché)
     ------------------------------------------------------------------------ */
  function handleCleared(root) {
    var pending = $$('[data-cleared="false"]', root);

    if (i18n.isPreview) {
      pending.forEach(function (el) {
        if ($(".cleared-badge", el)) return;
        var badge = document.createElement("span");
        badge.className = "cleared-badge";
        badge.setAttribute("data-i18n", "ui.notCleared");
        badge.textContent = "Not cleared for publication";
        el.appendChild(badge);
      });
      return;
    }

    /* Hors preview : on masque les sous-blocs dont tous les médias sont non validés */
    $$(".media-group", root).forEach(function (group) {
      var items = $$(".media-item", group);
      if (items.length && items.every(function (el) { return el.getAttribute("data-cleared") === "false"; })) {
        group.hidden = true;
      }
    });
    $$("[data-media-section]", root).forEach(function (section) {
      var groups = $$(".media-group", section);
      if (groups.length && groups.every(function (g) { return g.hidden; })) section.hidden = true;
    });
  }

  /* ------------------------------------------------------------------------
     Modale projet (contenu cloné depuis <template id="project-slug">)
     Lien profond : #work/slug. Le bouton retour du navigateur ferme la modale.
     ------------------------------------------------------------------------ */
  var projectDialog = $("#project-dialog");
  var projectContent = projectDialog ? $("[data-project-content]", projectDialog) : null;
  var projectSlugs = $$(".project-card[data-project]").map(function (card) {
    return card.getAttribute("data-project");
  }).filter(function (slug) { return document.getElementById("project-" + slug); });

  var currentSlug = null;
  var pushedHistory = false;
  var closingFromHistory = false;
  var projectTrigger = null;

  function renderProject(slug) {
    var template = document.getElementById("project-" + slug);
    if (!template || !projectContent) return false;
    var fragment = template.content.cloneNode(true);
    handleCleared(fragment);
    i18n.apply(fragment);
    projectContent.innerHTML = "";
    projectContent.appendChild(fragment);
    initPosters(projectContent);
    projectDialog.querySelector(".project-dialog__panel").scrollTop = 0;
    currentSlug = slug;

    var title = $(".pd-title", projectContent);
    if (title) {
      title.setAttribute("tabindex", "-1");
      title.focus();
    }
    return true;
  }

  function openProject(slug, options) {
    options = options || {};
    if (projectSlugs.indexOf(slug) === -1) return;
    if (!projectDialog.open) {
      projectTrigger = options.trigger || document.activeElement;
      openDialog(projectDialog);
    }
    renderProject(slug);

    var hash = "#work/" + slug;
    if (options.push && location.hash !== hash) {
      history.pushState({ project: slug }, "", hash);
      pushedHistory = true;
    } else if (options.replace) {
      history.replaceState(history.state, "", hash);
    }
  }

  function stepProject(direction) {
    var index = projectSlugs.indexOf(currentSlug);
    var next = projectSlugs[(index + direction + projectSlugs.length) % projectSlugs.length];
    openProject(next, { replace: true });
  }

  if (projectDialog) {
    document.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-open-project]");
      if (!btn) return;
      openProject(btn.getAttribute("data-open-project"), { push: true, trigger: btn });
    });

    $("[data-project-prev]", projectDialog).addEventListener("click", function () { stepProject(-1); });
    $("[data-project-next]", projectDialog).addEventListener("click", function () { stepProject(1); });

    projectDialog.addEventListener("close", function () {
      projectContent.innerHTML = ""; /* coupe une éventuelle vidéo */
      var slug = currentSlug;
      currentSlug = null;

      if (!closingFromHistory) {
        if (pushedHistory) {
          history.back();
        } else if (location.hash.indexOf("#work/") === 0) {
          history.replaceState(null, "", "#work");
        }
      }
      pushedHistory = false;
      closingFromHistory = false;

      var focusTarget = projectTrigger && document.contains(projectTrigger) ? projectTrigger
        : $('[data-open-project="' + slug + '"]');
      if (focusTarget) focusTarget.focus();
      projectTrigger = null;
    });
  }

  function syncWithHash() {
    if (!projectDialog) return;
    var match = location.hash.match(/^#work\/([\w-]+)$/);
    if (match && projectSlugs.indexOf(match[1]) !== -1) {
      if (currentSlug !== match[1]) openProject(match[1]);
    } else if (projectDialog.open) {
      closingFromHistory = true;
      projectDialog.close();
    }
  }

  window.addEventListener("popstate", syncWithHash);
  window.addEventListener("hashchange", syncWithHash);
  if (/^#work\/[\w-]+$/.test(location.hash)) syncWithHash();

  /* ------------------------------------------------------------------------
     Lightbox des galeries (clavier, Échap, compteur)
     ------------------------------------------------------------------------ */
  var lightbox = $("#lightbox");
  var lbItems = [];
  var lbIndex = 0;
  var lbTrigger = null;

  function showLightboxItem(index) {
    lbIndex = (index + lbItems.length) % lbItems.length;
    var item = lbItems[lbIndex];
    var img = $("img", item);
    var lbImg = $(".lightbox__img", lightbox);
    lbImg.src = img.getAttribute("data-full") || img.currentSrc || img.src;
    lbImg.alt = img.alt;
    var caption = $(".gallery__caption", item);
    var credit = $(".credit", item);
    $("[data-lightbox-caption]", lightbox).textContent = caption ? caption.textContent : "";
    $("[data-lightbox-credit]", lightbox).textContent = credit ? credit.textContent : "";
    $("[data-lightbox-index]", lightbox).textContent = String(lbIndex + 1);
    $("[data-lightbox-total]", lightbox).textContent = String(lbItems.length);
    var single = lbItems.length < 2;
    $("[data-lightbox-prev]", lightbox).hidden = single;
    $("[data-lightbox-next]", lightbox).hidden = single;
  }

  if (lightbox) {
    document.addEventListener("click", function (event) {
      var btn = event.target.closest(".gallery__btn");
      if (!btn) return;
      var gallery = btn.closest("[data-gallery]");
      lbItems = $$(":scope > li", gallery).filter(function (li) {
        return li.offsetParent !== null || i18n.isPreview;
      });
      lbTrigger = btn;
      openDialog(lightbox);
      showLightboxItem(lbItems.indexOf(btn.closest("li")));
      $("[data-lightbox-next]", lightbox).focus();
    });

    $("[data-lightbox-prev]", lightbox).addEventListener("click", function () { showLightboxItem(lbIndex - 1); });
    $("[data-lightbox-next]", lightbox).addEventListener("click", function () { showLightboxItem(lbIndex + 1); });

    lightbox.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") { event.preventDefault(); showLightboxItem(lbIndex - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); showLightboxItem(lbIndex + 1); }
    });

    lightbox.addEventListener("close", function () {
      if (lbTrigger) lbTrigger.focus();
    });

    /* Langue changée pendant l'ouverture : on recopie la légende traduite */
    document.addEventListener("pm:langchange", function () {
      if (lightbox.open && lbItems.length) showLightboxItem(lbIndex);
    });
  }

  /* ------------------------------------------------------------------------
     Processus « How we work » : onglets accessibles
     Mode interactif (desktop, mouvement autorisé) ou liste (mobile, réduit, sans JS)
     L'étape suit le scroll : voir animations.js (window.PMProcess.setStep)
     ------------------------------------------------------------------------ */
  var process = $("[data-process]");
  var desktop = window.matchMedia("(min-width: 1024px)");

  if (process) {
    var tabs = $$('[role="tab"]', process);
    var panels = $$(".process-step", process);
    var activeStep = 0;

    var setStep = function (index, options) {
      options = options || {};
      index = Math.max(0, Math.min(tabs.length - 1, index));
      if (index === activeStep && !options.force) return;
      activeStep = index;
      var interactive = process.classList.contains("is-interactive");
      tabs.forEach(function (tab, i) {
        var selected = i === index;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      panels.forEach(function (panel, i) {
        panel.hidden = interactive && i !== index;
      });
      if (options.focus) tabs[index].focus();
    };

    /* Fait défiler la page jusqu'à la zone correspondant à l'étape */
    var scrollToStep = function (index) {
      var rect = process.getBoundingClientRect();
      var top = window.scrollY + rect.top;
      var range = process.offsetHeight - window.innerHeight;
      window.scrollTo({ top: top + range * ((index + 0.5) / tabs.length), behavior: "smooth" });
    };

    var updateMode = function () {
      var interactive = desktop.matches && !reducedMotion.matches;
      process.classList.toggle("is-interactive", interactive);
      panels.forEach(function (panel, i) {
        if (interactive) {
          panel.setAttribute("role", "tabpanel");
          panel.setAttribute("aria-labelledby", tabs[i].id);
          panel.tabIndex = 0;
        } else {
          panel.removeAttribute("role");
          panel.removeAttribute("aria-labelledby");
          panel.removeAttribute("tabindex");
        }
      });
      setStep(activeStep, { force: true });
    };

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        setStep(i);
        scrollToStep(i);
      });
      tab.addEventListener("keydown", function (event) {
        var next = null;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (i + 1) % tabs.length;
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (i - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next === null) return;
        event.preventDefault();
        setStep(next, { focus: true });
        scrollToStep(next);
      });
    });

    window.PMProcess = { setStep: setStep, count: tabs.length };
    updateMode();
    desktop.addEventListener("change", updateMode);
    reducedMotion.addEventListener("change", updateMode);
  }

  /* ------------------------------------------------------------------------
     Bios de l'équipe : 4 lignes + « Read more / Read less »
     ------------------------------------------------------------------------ */
  var bioCards = $$(".team-card");

  function measureBios() {
    bioCards.forEach(function (card) {
      var bio = $(".team-card__bio", card);
      var toggle = $(".bio-toggle", card);
      if (!bio || !toggle || bio.classList.contains("is-open")) return;
      bio.classList.add("is-clamped");
      var overflowing = bio.scrollHeight > bio.clientHeight + 2;
      toggle.hidden = !overflowing;
      if (!overflowing) bio.classList.remove("is-clamped");
    });
  }

  bioCards.forEach(function (card) {
    var bio = $(".team-card__bio", card);
    var toggle = $(".bio-toggle", card);
    if (!bio || !toggle) return;
    toggle.addEventListener("click", function () {
      var open = !bio.classList.contains("is-open");
      bio.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      var label = $("span", toggle);
      label.setAttribute("data-i18n", open ? "ui.readLess" : "ui.readMore");
      label.textContent = open ? "Read less" : "Read more";
      i18n.apply(toggle);
    });
  });

  measureBios();
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measureBios, 150);
  });
  document.addEventListener("pm:langchange", measureBios);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureBios);

  /* ------------------------------------------------------------------------
     Bouton pause de la boucle vidéo du hero (si elle est activée)
     ------------------------------------------------------------------------ */
  var heroVideo = $(".hero__video");
  var heroPause = $(".hero__pause");
  if (heroVideo && heroPause) {
    heroPause.hidden = false;
    if (reducedMotion.matches) heroVideo.pause();
    heroPause.addEventListener("click", function () {
      var label = $(".sr-only", heroPause);
      if (heroVideo.paused) {
        heroVideo.play();
        label.setAttribute("data-i18n", "ui.pauseVideo");
        label.textContent = "Pause background video";
      } else {
        heroVideo.pause();
        label.setAttribute("data-i18n", "ui.playBgVideo");
        label.textContent = "Play background video";
      }
      i18n.apply(heroPause);
    });
  }

  /* ------------------------------------------------------------------------
     Confidentialité et année
     ------------------------------------------------------------------------ */
  var privacy = $("#privacy-dialog");
  var privacyTrigger = $("[data-open-privacy]");
  if (privacy && privacyTrigger) {
    privacyTrigger.addEventListener("click", function () { openDialog(privacy); });
    privacy.addEventListener("close", function () { privacyTrigger.focus(); });
  }

  $$("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  handleCleared(document);
})();
