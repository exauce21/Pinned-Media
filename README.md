# Pinned Media — landing page one-page (EN / FR)

Site statique en HTML, CSS et JavaScript vanilla : aucun framework, aucun outil de build, aucune installation.

Pour voir le site, ouvrez simplement `index.html` dans un navigateur. Pour le mettre en ligne, glissez le dossier `pinned-media/` sur n'importe quel hébergement statique.

```
pinned-media/
├── index.html                 tout le texte anglais, les cartes projets et leurs <template>
├── README.md
└── assets/
    ├── css/variables.css      couleurs, polices, tailles, espacements, rayons
    ├── css/style.css          base, composants, puis sections dans l'ordre de la page
    ├── css/fonts-local-file.css   polices intégrées, chargées seulement en file:// (voir plus bas)
    ├── js/main.js             header, menu, modales, vidéos, lightbox, processus, bios
    ├── js/animations.js       révélations, progression, processus au scroll, convergence des photos
    ├── js/i18n.js             dictionnaire français et sélecteur de langue
    ├── img/…                  placeholders SVG nommés par emplacement
    ├── fonts/                 cinzel-variable.woff2, manrope-variable.woff2
    └── video/                 vide, prévu pour la boucle MP4 du hero
```

---

## 1. Modifier un texte et sa traduction

1. **Anglais.** Ouvrez `index.html` et cherchez le texte. Chaque section est délimitée par un commentaire `<!-- ===== NOM DE SECTION ===== -->`.
2. **Français.** Notez la clé de l'attribut `data-i18n` de l'élément (par exemple `data-i18n="hero.title"`). Ouvrez `assets/js/i18n.js` et modifiez la valeur de la même clé.
3. **Attributs.** Les textes alternatifs, les libellés ARIA et les titres utilisent `data-i18n-alt`, `data-i18n-aria-label` et `data-i18n-title`, sur le même principe.

Si une clé manque en français, le texte anglais s'affiche. Avec `?preview` dans l'adresse, un avertissement apparaît alors dans la console.

**Partager le site en français :** ajoutez `?lang=fr` à l'adresse. Le choix de langue est aussi mémorisé par le navigateur.

## 2. Ajouter, masquer ou supprimer un projet

Un projet se compose de deux blocs dans `index.html` :

- la **carte** `<article class="project-card" data-project="mon-projet">`, dans la section `SELECTED WORK` ;
- le **détail** `<template id="project-mon-projet">`, en bas du fichier, sous `DÉTAILS DES PROJETS`.

**Pour ajouter un projet :**

1. Dupliquez une carte et son template.
2. Remplacez le slug à trois endroits : `data-project`, `data-open-project` et `id="project-…"`.
3. Mettez à jour les textes et ajoutez les clés FR dans `i18n.js`.

L'ordre des cartes détermine l'ordre des boutons « Previous / Next project ». Le lien profond `#work/mon-projet` fonctionne automatiquement.

**Pour masquer un projet,** mettez la carte en commentaire (`<!-- … -->`). Le template peut rester en place.

## 3. Ajouter ou masquer un membre de l'équipe

- **Ajouter :** dupliquez un bloc `<li class="team-card">` dans la section `TEAM`. Donnez un nouvel `id` au paragraphe de bio (`bio-xx`) et reportez-le dans `aria-controls` du bouton. Ajoutez ensuite les clés FR (rôle, bio, alt).
- **Masquer :** mettez le bloc `<li>` en commentaire.

## 4. Remplacer un placeholder par une photo

Chaque visuel manquant est un fichier SVG dans `assets/img/<section>/`. Son nom correspond à son emplacement, et ses proportions et son libellé sont écrits dedans.

1. Déposez la photo dans le même dossier, de préférence en `.jpg` ou `.webp` et aux mêmes proportions (par exemple `work/fifa-cover.jpg`).
2. Dans `index.html`, mettez à jour `src`, puis `width` et `height` (dimensions réelles, pour éviter les sauts de mise en page).
3. Mettez à jour le texte `alt` en anglais, et sa traduction (clé `data-i18n-alt`) dans `i18n.js`. Retirez la mention « (placeholder) ».
4. Mettez à jour le crédit affiché (`<figcaption class="credit">`) s'il y en a un.

**Posters vidéo.** Les vidéos utilisent par défaut la miniature YouTube. Pour un still local, remplacez le `src` de l'image `.video-facade__poster` par votre fichier et supprimez son attribut `data-yt-poster`.

**Fond du hero.** Remplacez le `src` de `.hero__bg` par un still approuvé, par exemple `assets/img/hero/hero-still.jpg`.

**Boucle vidéo du hero.** Déposez `assets/video/hero-loop.mp4`, puis décommentez la balise `<video>` dans la section `HERO`. Le bouton pause apparaît automatiquement.

## 5. Médias Chemonics : publication et mode `?preview`

Tous les médias du projet « USAID via Chemonics » portent l'attribut `data-cleared="false"` : la vidéo du Kenya, les deux récits de journalisme visuel et les huit photos.

- **Par défaut**, ces médias sont masqués. Un sous-bloc dont tous les médias sont masqués disparaît entièrement, titre compris. Si les trois sous-blocs sont masqués, la partie « Explore the work » disparaît elle aussi.
- **Avec `?preview` dans l'adresse** (par exemple `index.html?preview#work/chemonics`), ils s'affichent, encadrés en rouge, avec un badge « Not cleared for publication ».
- **Pour publier un média,** passez son attribut à `data-cleared="true"`.

La couverture de la carte Chemonics (`work/chemonics-cover`) n'est pas soumise à ce filtre : n'y placez qu'un visuel déjà validé.

## 6. Activer le bouton du portfolio et les liens UNDP

- **Portfolio de Benedicte (section `CONTACT`)** : cherchez `TODO: URL du portfolio`. Remplacez `href="#"` par l'URL, puis supprimez l'attribut `hidden`.
- **Sites UNDP (template `project-undp`)** : chaque carte porte un commentaire `<!-- TODO: URL -->`. Remplacez `href="#"` par l'URL, puis supprimez `hidden` sur le bouton « Visit website ».

## 7. Mettre en ligne

- **Netlify Drop :** rendez-vous sur https://app.netlify.com/drop et glissez le dossier `pinned-media/`. Le site est en ligne en quelques secondes.
- **FTP / hébergement mutualisé :** envoyez le *contenu* du dossier `pinned-media/` à la racine du site (souvent `public_html/` ou `www/`).

Après la mise en ligne, remplacez dans le `<head>` les chemins `assets/img/og-image.jpg` des balises `og:image` et `twitter:image` par l'URL absolue (`https://votre-domaine/assets/img/og-image.jpg`). Les réseaux sociaux exigent une URL complète.

### Notes sur l'ouverture locale (`file://`)

- **Polices.** Chrome bloque le chargement de polices depuis `file://`. Dans ce cas seulement, la page charge `assets/css/fonts-local-file.css`, qui contient les mêmes polices intégrées. En ligne, ce fichier n'est jamais chargé et les polices sont préchargées depuis `assets/fonts/`. Si vous changez une police, régénérez ce fichier : encodez le `.woff2` en base64 et remplacez la valeur du `data:` correspondant.
- **Vidéos YouTube.** Depuis `file://`, le navigateur n'envoie pas d'en-tête Referer, et YouTube peut afficher une erreur de lecture (« Erreur 153 »). Les vidéos fonctionnent une fois le site en ligne. Pour les tester en local, lancez un petit serveur dans le dossier (`python3 -m http.server`) puis ouvrez http://localhost:8000.

---

## 8. Titres traduits à faire valider

| Élément | Anglais (brief) | Français proposé |
|---|---|---|
| H1 / tagline | Stories with impact | Des récits qui comptent |
| Eyebrow du hero | Films · Photography · Interactive storytelling | Films · Photographie · Storytelling interactif |
| Section 01 | What we do | Nos métiers |
| Bloc | Why partners choose Pinned Media | Pourquoi nos partenaires choisissent Pinned Media |
| Bloc | Production backed by journalism and talent development | Une production adossée au journalisme et au développement des talents |
| Section 02 | Selected work | Réalisations |
| Section 03 | Training and talent development | Formation et développement des talents |
| Section 04 | Clients and partners | Clients et partenaires |
| Section 05 | How we work | Notre méthode |
| Étapes | Brief · Plan · Produce · Deliver | Brief · Préparation · Production · Livraison |
| Bandeau | Trusted by / NGOs, brands, publishers & governments | Ils nous font confiance / ONG, marques, éditeurs et gouvernements |
| Section 06 | Meet the team | Rencontrez l'équipe |
| Section 07 | Let's tell your story | Racontons votre histoire |
| Bouton | Get in touch | Nous contacter |
| Bouton | Explore our work | Découvrir nos projets |
| Bouton | View project | Voir le projet |
| Bouton | Watch all Africa Stories | Voir tous les épisodes d'Africa Stories |
| Bouton | Explore the story | Explorer le récit |
| Bouton | Explore Benedicte's portfolio | Découvrir le portfolio de Benedicte |
| Intitulés | The brief / What we made / The result | La demande / Ce que nous avons réalisé / Le résultat |
| Carte du hero | Enquiries | Nous écrire |

**Autres points à valider :**

- **Titre du projet Chemonics en français.** Il est reformulé pour rester court : « Moyens de subsistance et résilience : des histoires de quatre pays africains ».
- **Citation de Mame Cheikh Mbaye.** Elle est traduite en français. Si vous préférez garder la citation originale en anglais dans la version française, supprimez la clé `training.mame.quote` dans `i18n.js`.
- **Résumés d'une ligne des quatre cartes projets.** Ils ont été proposés à partir du brief et sont à valider, en anglais et en français.
- **Coquille dans le brief, reprise mot pour mot.** L'introduction contient « to projects in across the continent ». Indiquez la correction souhaitée (par exemple « to projects across the continent ») ; il suffit de modifier le texte dans `index.html`.

---

## 9. Visuels et informations encore à fournir

### Identité

| Élément | Format conseillé | Emplacement |
|---|---|---|
| Logo Pinned Media approuvé | SVG | remplace le wordmark texte (`.wordmark`, header et menu) et `assets/img/logos/pinned-media.svg` |
| Logo Pin Africa | SVG ou PNG transparent | `assets/img/logos/pin-africa.svg` |
| Logo Acquire by Pin Africa | SVG ou PNG transparent | `assets/img/logos/acquire-by-pin-africa.svg` |
| Favicon | SVG carré | `assets/img/favicon.svg` (provisoire) |
| Image de partage (Open Graph) | JPG 1200 × 630 | `assets/img/og-image.jpg` (provisoire) |

### Photos et visuels

| Fichier placeholder | Format | Contenu attendu |
|---|---|---|
| `hero/hero-still.svg` (ou miniature YouTube actuelle) | JPG 16:9, 1920 px | still approuvé de la vidéo d'en-tête |
| `about/bts-about.svg` | 4:3 | photo de tournage (BTS) |
| `services/what-we-do-cover.svg` | 4:5 | photo BTS, fond de la carte « What we do » |
| `services/films.svg`, `comms.svg`, `photo-interactive.svg`, `talent.svg` | 16:10 | une photo par métier |
| `services/why-countries.svg`, `why-real-people.svg` | 4:5 | fonds des cartes « Why partners » |
| `work/fifa-cover.svg` | 21:9 | film still ou poster du trailer FIFA |
| `work/chemonics-cover.svg` | 16:10 | couverture **validée pour publication** |
| `work/undp-cover.svg` | 16:10 | capture des sites UNDP |
| `work/women-in-football-cover.svg` | 16:10 | visuel Under Her Feet |
| `work/women-in-football-poster.svg` | 2:3 | affiche (© Pinned Media) |
| `work/chemonics-kenya-story.svg`, `chemonics-drc-story.svg` | 16:10 | aperçus des deux récits vev.site |
| `work/chemonics-mali-01…04.svg`, `chemonics-uganda-01…04.svg` | 3:2 | photos validées, **avec légendes et crédits** |
| `work/undp-africa-innovators.svg`, `ticad-reporting-tool.svg`, `un-sahel.svg` | 16:10 | captures des trois sites |
| `training/creative-start-workshop.svg` | 16:10 | photo d'atelier ou projet de participant approuvé |
| `bts/bts-01…04.svg` | 4:5 | quatre photos BTS (bandeau « Trusted by ») |
| `team/benedicte-kalombo.svg`, `ayo-sanusi.svg`, `letitia-kamayi.svg`, `janette-daramy.svg` | 4:5 | portraits (celui de Benedicte sert aussi dans Contact) |
| `footer/footer-image.svg` | 3:4 | photo verticale du footer |
| Logos clients : `logos/fifa.svg`, `usaid-via-chemonics.svg`, `undp-africa.svg`, `fcdo.svg`, `un-sahel.svg` | SVG ou PNG transparent | logos approuvés (affichés en gris, en couleur au survol) |
| Boucle vidéo du hero (facultatif) | MP4 muet, court, < 5 Mo | `assets/video/hero-loop.mp4` |

### Informations

- **URL du portfolio de Benedicte** (bouton masqué dans Contact).
- **URLs des trois sites UNDP** : UNDP Africa innovators, TICAD reporting tool, UN Sahel.
- **Crédits individuels de chaque projet** : chaque modale affiche « [Individual credits to be confirmed] ». À compléter dans la liste `<dl class="credits">` de chaque template, en respectant la règle du brief : les crédits de production, de mentorat et de publication restent attribués à la plateforme qui a réalisé le travail.
- **Légendes et crédits** des photos du Mali et de l'Ouganda, ainsi que des autres photos (crédit actuellement « Photo: credit to be confirmed »).
- **Validation de publication** de chaque média Chemonics (`data-cleared`).
- **Politique de confidentialité approuvée** : à coller dans le `<dialog id="privacy-dialog">` (texte provisoire « [Privacy notice to be supplied and approved] »).
- **URL définitive du site**, pour les balises Open Graph et le JSON-LD (champ `url` à ajouter).
- **Validation** des titres français (section 8), des résumés d'une ligne et de la correction de la coquille.

---

## 10. Accessibilité et compatibilité

- **Clavier.** Tout est navigable au clavier : lien d'évitement, menu et modales au focus piégé (`<dialog>` natif), touche Échap, flèches dans le processus et dans la lightbox.
- **Mouvement réduit.** Avec `prefers-reduced-motion`, aucune animation au scroll ni zoom de fond, et les étapes du processus s'affichent en liste.
- **Sans JavaScript.** Tout le contenu anglais reste lisible. Les modales projet, qui demandent JavaScript, ne s'ouvrent pas.
- **Vidéos.** Elles ne chargent rien de YouTube avant le clic (`youtube-nocookie.com`, aucun cookie déposé avant l'interaction).
- **Icônes.** Elles sont tracées en SVG inline, d'après Lucide (licence ISC).
