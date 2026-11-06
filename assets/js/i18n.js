/* ==========================================================================
   Pinned Media — bilingue EN / FR
   - L'anglais est écrit directement dans index.html (langue par défaut).
   - Le français est ci-dessous, sous la même clé que l'attribut data-i18n.
   - Attributs traduits : data-i18n (contenu), data-i18n-alt, data-i18n-aria-label,
     data-i18n-title, data-i18n-content (meta).
   - Clé absente en FR → le texte anglais reste affiché
     (avertissement console uniquement avec ?preview).
   Pour modifier une traduction : cherchez la clé dans ce fichier.
   ========================================================================== */

(function () {
  "use strict";

  var FR = {
    /* ---------- Meta ---------- */
    "meta.title": "Pinned Media | Production et communication",
    "meta.description": "Films, photographie, storytelling et services de communication en français et en anglais, avec des créatifs locaux en Afrique et dans la diaspora.",

    /* ---------- Interface ---------- */
    "ui.skip": "Aller au contenu",
    "ui.language": "Langue",
    "ui.languages": "Langues",
    "ui.openMenu": "Ouvrir le menu",
    "ui.closeMenu": "Fermer le menu",
    "ui.menu": "Menu",
    "ui.mainNav": "Navigation principale",
    "ui.footerNav": "Navigation de pied de page",
    "ui.enquiries": "Nous écrire",
    "ui.backToTop": "Retour en haut",
    "ui.playVideo": "Lire la vidéo",
    "ui.pauseVideo": "Mettre en pause la vidéo d’arrière-plan",
    "ui.playBgVideo": "Relancer la vidéo d’arrière-plan",
    "ui.headerVideo": "Vidéo de présentation de Pinned Media",
    "ui.viewProject": "Voir le projet",
    "ui.prevProject": "Projet précédent",
    "ui.nextProject": "Projet suivant",
    "ui.projectsNav": "Navigation entre les projets",
    "ui.close": "Fermer",
    "ui.video": "Vidéo",
    "ui.imageViewer": "Visionneuse d’images",
    "ui.prevImage": "Image précédente",
    "ui.nextImage": "Image suivante",
    "ui.readMore": "Lire la suite",
    "ui.readLess": "Réduire",
    "ui.newTab": "(s’ouvre dans un nouvel onglet)",
    "ui.privacy": "Confidentialité",
    "ui.credits": "Crédits",
    "ui.creditsTbc": "[Crédits individuels à confirmer]",
    "ui.creditTbc": "Photo : crédit à confirmer",
    "ui.captionTbc": "[Légende à fournir]",
    "ui.countries": "Pays",
    "ui.originalDev": "Développement original",
    "ui.exploreStory": "Explorer le récit",
    "ui.visitWebsite": "Visiter le site",
    "ui.sampleOfWork": "Aperçu du travail",
    "ui.moreCaptures": "Autres captures",
    "ui.addCapture": "Ajouter une capture",
    "ui.addStill": "Ajouter une image validée du film",
    "ui.notCleared": "Non validé pour publication",
    "ui.and": "et",

    /* ---------- Navigation ---------- */
    "nav.whatWeDo": "Nos métiers",
    "nav.services": "Services",
    "nav.process": "Méthode",
    "nav.work": "Réalisations",
    "nav.training": "Formation",
    "nav.clients": "Clients",
    "nav.howWeWork": "Notre méthode",
    "nav.team": "Équipe",
    "nav.contact": "Contact",

    /* ---------- Boutons ---------- */
    "cta.getInTouch": "Nous contacter",
    "cta.exploreWork": "Découvrir nos projets",

    /* ---------- Hero ---------- */
    "hero.eyebrow": "Films · Photographie · Storytelling interactif",
    "hero.title": "Des récits qui comptent",
    "hero.text": "Une agence internationale de production et de communication qui réalise des films, des photographies et des récits interactifs attentifs aux cultures, de la stratégie jusqu’à la livraison finale.",
    "hero.intro": "Ancrés dans le journalisme, nous racontons des histoires vraies avec de vraies personnes et créons des communications qui relient les organisations à leurs publics. En français comme en anglais, avec des créatifs locaux en Afrique et dans la diaspora, nous associons compréhension culturelle et expérience de la production internationale.",

    /* ---------- Introduction ---------- */
    "about.label": "Introduction",
    "about.eyebrow": "Notre regard",
    "about.title": "Des récits vrais.",
    "about.titleAccent": "Des vies réelles.",
    "about.onLocation": "Sur le terrain / Pinned Media",
    "about.statement": "Pinned Media raconte des histoires vraies, avec de vraies personnes. Ancrés dans le journalisme, nous créons des documentaires cinématographiques non scénarisés, de la photographie et des récits interactifs qui placent au centre les communautés sous-représentées, l’Afrique et sa diaspora.",
    "about.text": "Nous mettons en relation des créatifs locaux en Afrique et dans la diaspora pour accompagner organisations, marques et éditeurs avec des récits forts et une communication efficace. En français comme en anglais, nous apportons une compréhension culturelle, une expérience internationale et une connaissance du terrain à des projets menés sur tout le continent.",
    "about.imgAlt": "Coulisses d’un tournage Pinned Media",

    /* ---------- Nos métiers ---------- */
    "services.title": "Nos métiers",
    "services.intro": "Nous réunissons stratégie de communication, production et gestion de contenus pour aider les organisations à toucher leurs publics.",
    "services.films.title": "Films et documentaires non scénarisés",
    "services.films.text": "Documentaires cinématographiques, interviews et films de marque ancrés dans la vie réelle, de la recherche et du tournage jusqu’au montage, au son, au sous-titrage et au motion design.",
    "services.films.alt": "Tournage documentaire sur le terrain",
    "services.comms.title": "Stratégie et gestion de la communication",
    "services.comms.text": "Stratégie, messages, création de contenus, publication numérique et suivi des performances pour les organisations et les marques. En français et en anglais, sous forme de projets, de campagnes ou de partenariats d’agence mensuels.",
    "services.comms.alt": "Séance de planification de la communication",
    "services.photo.title": "Photographie et récits interactifs",
    "services.photo.text": "Photographie originale, journalisme visuel, expériences numériques interactives et contenus pour les réseaux sociaux, pensés pour votre public et vos plateformes.",
    "services.photo.alt": "Photographe au travail",
    "services.talent.title": "Développement et accompagnement des talents locaux",
    "services.talent.text": "Formations pratiques au récit et à la production, mentorat et opportunités créatives, assurés par Pinned Media ou en collaboration avec Acquire by Pin Africa.",
    "services.talent.alt": "Séance de mentorat avec de jeunes créatifs",

    "chip.research": "Recherche",
    "chip.filming": "Tournage",
    "chip.editing": "Montage",
    "chip.sound": "Son",
    "chip.subtitles": "Sous-titrage",
    "chip.motion": "Motion design",
    "chip.strategy": "Stratégie",
    "chip.messaging": "Messages",
    "chip.content": "Contenus",
    "chip.publishing": "Publication numérique",
    "chip.reporting": "Reporting",
    "chip.photography": "Photographie",
    "chip.visualJournalism": "Journalisme visuel",
    "chip.interactive": "Interactif",
    "chip.social": "Réseaux sociaux",
    "chip.training": "Formation",
    "chip.mentorship": "Mentorat",
    "chip.opportunities": "Opportunités créatives",

    /* ---------- Pourquoi nous ---------- */
    "why.title": "Pourquoi nos partenaires choisissent Pinned Media",
    "why.local.title": "Ancrage local et autonomie créative",
    "why.local.text": "Les créatifs locaux apportent leur connaissance culturelle et des relations de confiance ; les personnes filmées ont leur mot à dire sur la façon dont leur histoire est racontée.",
    "why.countries.title": "Plusieurs pays, une seule équipe",
    "why.countries.text": "Nous coordonnons simultanément des équipes dans plusieurs pays, en associant l’expertise locale à une gestion de production centralisée.",
    "why.flexible.title": "Production souple et délais courts",
    "why.flexible.text": "Des équipes modulables, une livraison réactive et des approches pragmatiques, adaptées à des budgets très variés.",
    "why.real.title": "De vraies personnes, une démarche journalistique",
    "why.real.text": "Recherche journalistique, entretiens menés avec soin et jugement éditorial guident nos récits non scénarisés.",

    /* ---------- Trois marques ---------- */
    "brands.title": "Une production adossée au journalisme et au développement des talents",
    "brands.text": "Fondées par Benedicte Kalombo, les trois plateformes ont des équipes distinctes et des expertises complémentaires. Leur collaboration relie la production sur commande au regard éditorial et à des opportunités de développement pour les talents locaux.",
    "brands.pm.role": "Production",
    "brands.pm.text": "Services de production et de communication sur commande.",
    "brands.pm.alt": "Logo Pinned Media (provisoire)",
    "brands.pa.role": "Journalisme",
    "brands.pa.text": "Journalisme indépendant, recherche de sujets et publication.",
    "brands.pa.alt": "Logo Pin Africa (provisoire)",
    "brands.ac.role": "Talents",
    "brands.ac.text": "Formation, mentorat et développement des talents émergents.",
    "brands.ac.alt": "Logo Acquire by Pin Africa (provisoire)",

    /* ---------- Réalisations (cartes) ---------- */
    "work.title": "Réalisations",
    "work.intro": "Nos réalisations couvrent des productions internationales et des projets régionaux pour la FIFA, USAID via Chemonics, UNDP Africa et UN Sahel, ainsi que des projets de storytelling numérique.",
    "work.fifa.alt": "Image du film Africa Stories (provisoire)",
    "work.fifa.summary": "Une série de courts documentaires sur la façon dont le football rassemble les personnes et les communautés à travers l’Afrique.",
    "work.chemonics.title": "Moyens de subsistance et résilience : des histoires de quatre pays africains",
    "work.chemonics.alt": "Projet sur les moyens de subsistance et la résilience (provisoire)",
    "work.chemonics.summary": "Films, journalisme visuel et photographie sur les moyens de subsistance et la résilience au Kenya, en RDC, au Mali et en Ouganda.",
    "work.undp.title": "Rendre les récits du développement accessibles",
    "work.undp.alt": "Projets numériques des Nations unies (provisoire)",
    "work.undp.summary": "Des projets numériques pour UNDP Africa, la TICAD et l’action des Nations unies au Sahel, alliant récits, outils de reporting et formation des équipes.",
    "work.wif.alt": "Affiche de Women in Football — Under Her Feet (provisoire)",
    "work.wif.summary": "Trois courts documentaires sur les femmes et les communautés qui font vivre le football amateur au Royaume-Uni.",

    /* ---------- Intitulés des blocs ---------- */
    "label.brief": "La demande",
    "label.weMade": "Ce que nous avons réalisé",
    "label.weDelivered": "Ce que nous avons réalisé",
    "label.wasDelivered": "Ce qui a été réalisé",
    "label.result": "Le résultat",

    "credit.client": "Client",
    "credit.production": "Production",
    "credit.crew": "Équipe",
    "credit.type": "Type de projet",
    "credit.film": "Film",
    "credit.mentorship": "Mentorat",
    "credit.publication": "Publication",

    "country.kenya": "Kenya",
    "country.nigeria": "Nigeria",
    "country.morocco": "Maroc",
    "country.senegal": "Sénégal",
    "country.drc": "République démocratique du Congo",
    "country.mali": "Mali",
    "country.uganda": "Ouganda",
    "country.drcShort": "RDC",
    "country.uk": "Royaume-Uni",

    /* ---------- Projet : FIFA ---------- */
    "fifa.intro": "Une série de courts documentaires sur la façon dont le football rassemble les personnes, renforce les communautés et reflète les multiples manières dont ce sport est célébré à travers l’Afrique : des terrains de quartier aux rassemblements entre voisins, jusqu’aux moments partagés de fierté, d’appartenance et de changement social.",
    "fifa.brief": "Créer une série de documentaires cinématographiques centrés sur l’humain, qui explorent ce que le football représente pour les personnes et les communautés à travers l’Afrique. Sur fond de route vers la Coupe du monde de la FIFA 2022, les films devaient dépasser la couverture des matchs pour montrer comment ce sport façonne l’identité, les opportunités et le sentiment d’appartenance. La FIFA souhaitait des histoires fortes, des images marquantes et d’authentiques voix africaines, capables de résonner localement et de captiver le public du monde entier.",
    "fifa.made": "Nous avons repéré et développé des histoires au Kenya, au Nigeria, au Maroc et au Sénégal, avec des réalisateurs et des intervenants locaux, en assurant toute la production : de la recherche et du tournage jusqu’au montage et à la livraison finale, y compris les déclinaisons pour les réseaux sociaux. Ces films non scénarisés abordent l’émancipation des femmes par le football, l’inclusion à travers une équipe de joueurs atteints d’albinisme, l’engagement communautaire et l’héritage familial d’un club local au rayonnement mondial. Chaque histoire associe des images cinématographiques aux voix et au vécu des personnes qui en sont le cœur.",
    "fifa.result": "La série a été diffusée sur FIFA+.",
    "fifa.trailer": "Notre bande-annonce",
    "fifa.trailerTitle": "Bande-annonce d’Africa Stories",
    "fifa.watchAll": "Voir tous les épisodes d’Africa Stories",
    "fifa.stills": "Images des films",

    /* ---------- Projet : USAID via Chemonics ---------- */
    "chemonics.brief": "Mettre en lumière les histoires humaines derrière les programmes d’agriculture, de sécurité alimentaire et de développement. Chemonics avait besoin de photographies, de vidéos et de récits à hauteur d’humain montrant l’expérience des personnes en matière d’investissement, de moyens de subsistance et de résilience, avec une attention particulière portée aux femmes, aux jeunes et aux communautés sous-représentées.",
    "chemonics.made1": "Nous avons réalisé des films, des récits de journalisme visuel et des photographies dans chacun des quatre pays (Kenya, République démocratique du Congo, Mali et Ouganda), en travaillant dans plusieurs villes et lieux pour rendre visibles les expériences locales des moyens de subsistance, de l’investissement et de la résilience.",
    "chemonics.made2": "Sur ce projet, notre équipe a pris en charge l’ensemble de la production : développement des sujets, entretiens journalistiques, photographie, tournage, montage, animation, graphiques, habillage, traductions, sous-titres et légendes. Nous avons réuni reportage, images et design en récits aboutis, de la première interview au dernier détail animé.",
    "chemonics.result": "Un ensemble de films, de récits de journalisme visuel et de photographies couvrant quatre pays, livré par une seule équipe de production coordonnée. Le travail associe reportage local, images originales, animation et visualisation de données pour rendre des sujets de développement complexes accessibles et captivants.",
    "chemonics.exploreTitle": "Découvrir le travail",
    "chemonics.exploreIntro": "Les exemples ci-dessous sont une sélection issue d’un projet plus large. Des films, des récits de journalisme visuel et des photographies ont été produits pour les quatre pays.",
    "chemonics.kenyaFilmTitle": "Voir le film sur le Kenya",
    "chemonics.kenyaFilmText": "Un film qui porte à l’écran les voix et le vécu des communautés.",
    "chemonics.vjTitle": "Explorer le journalisme visuel",
    "chemonics.vjText": "Découvrez des récits du Kenya et de la République démocratique du Congo, mêlant reportage original, photographie, film, animation et graphisme.",
    "chemonics.kenyaStoryAlt": "Story Kenya : From Lake to Hive, autonomiser les communautés du Turkana pour une croissance durable",
    "chemonics.drcStoryAlt": "Story RDC : énergie, agriculture et espoir dans l’est de la RDC",
    "chemonics.photoTitle": "Voir les photographies",
    "chemonics.photoText": "Une sélection de nos photographies originales du Mali et de l’Ouganda.",
    "chemonics.kenyaStoryTitle": "From Lake to Hive : autonomiser les communautés du Turkana pour une croissance durable",
    "chemonics.drcStoryTitle": "Énergie, agriculture et espoir dans l’est de la RDC",
    "gallery.mali1": "Une femme arrose des rangs de salades au Mali",
    "gallery.mali2": "Un agriculteur entretient ses cultures dans un champ au Mali",
    "gallery.mali3": "Photographie du Mali 3 (provisoire)",
    "gallery.mali4": "Photographie du Mali 4 (provisoire)",
    "gallery.uganda1": "Une femme porte une bassine rouge sur la tête au milieu des cultures en Ouganda",
    "gallery.uganda2": "Photographie de l’Ouganda 2 (provisoire)",
    "gallery.uganda3": "Photographie de l’Ouganda 3 (provisoire)",
    "gallery.uganda4": "Photographie de l’Ouganda 4 (provisoire)",

    /* ---------- Projet : UNDP ---------- */
    "undp.brief": "Créer des plateformes numériques accessibles pour mettre en valeur l’innovation africaine, soutenir le reporting sur le développement et aider les équipes des Nations unies à gérer leurs contenus.",
    "undp.made1": "<strong>UNDP Africa :</strong> un site présentant 50 jeunes innovateurs africains engagés contre la COVID-19, dans le cadre de l’African Influencers for Development Initiative. Il accompagnait un magazine lancé pendant l’Assemblée générale des Nations unies en 2020.",
    "undp.made2": "<strong>TICAD :</strong> un site et un outil de reporting, développés en collaboration avec plusieurs parties prenantes, dont le ministère japonais des Affaires étrangères, la Banque mondiale et l’Union africaine.",
    "undp.made3": "<strong>UN Sahel :</strong> un site pour l’unité Sahel des Nations unies, rattachée au PNUD, accompagné d’une formation des équipes à Dakar pour l’utiliser et le maintenir.",
    "undp.result": "Des plateformes numériques pour valoriser l’innovation et rendre compte du développement, et des équipes Sahel formées pour maintenir et mettre à jour leur site.",
    "undp.site1": "UNDP Africa : les innovateurs",
    "undp.site2": "Outil de reporting de la TICAD",
    "undp.alt1": "Page d’accueil du site UNDP Africa — African Influencers for Development",
    "undp.alt2": "Page d’accueil de l’outil de reporting TICAD Monitor",
    "undp.alt3": "Page d’accueil du site de la Stratégie intégrée des Nations unies pour le Sahel",
    "undp.magazineTitle": "Le magazine des innovateurs",
    "undp.magazineAlt": "Couverture du magazine Africa Innovates",
    "undp.magazineCaption": "Lancé pendant l’Assemblée générale des Nations unies, 2020",

    /* ---------- Projet : Women in Football ---------- */
    "wif.type": "Projet de développement original de Pinned Media",
    "wif.brief": "Développer une série documentaire originale célébrant les femmes et les communautés qui font vivre le football amateur au Royaume-Uni. Conçu comme un format en six épisodes, le projet explorait la pratique au quotidien, la foi, la représentation, ainsi que les personnes et les structures qui ouvrent ce sport aux femmes. L’ambition : toucher au-delà du public habituel du football grâce à des histoires intimes et proches de chacun, sur l’identité, les opportunités et l’appartenance.",
    "wif.made": "Nous avons développé le concept, trouvé les intervenantes et produit trois courts documentaires sur les femmes ordinaires dans le football, l’expérience des femmes musulmanes dans ce sport, et les structures qui créent des opportunités pour les femmes et les filles. Entre entretiens personnels, tournage d’observation et images de jeu, nous avons relié la vie sur le terrain aux personnes et aux communautés qui l’animent.",
    "wif.result": "Trois courts documentaires originaux qui ont suscité l’intérêt de diffuseurs et démontré notre capacité à trouver des intervenants marquants, à développer un format non scénarisé et à porter à l’écran des histoires de football peu représentées.",
    "wif.stillsTitle": "Images extraites des films",
    "wif.stillCaption": "Image extraite de Under Her Feet",
    "wif.keyArtAlt": "Visuel de Women in Football — Under Her Feet",
    "wif.collageAlt": "Collage des intervenantes de Under Her Feet",
    "wif.stillAlt1": "Image 1 extraite de Under Her Feet",
    "wif.stillAlt2": "Image 2 extraite de Under Her Feet",
    "wif.stillAlt3": "Image 3 extraite de Under Her Feet",
    "wif.stillAlt4": "Image 4 extraite de Under Her Feet",
    "wif.stillAlt5": "Image 5 extraite de Under Her Feet",
    "wif.stillAlt6": "Image 6 extraite de Under Her Feet",

    /* ---------- Formation ---------- */
    "training.title": "Formation et développement des talents",
    "training.intro": "Nous aidons chacun à transformer son potentiel créatif en compétences concrètes, en œuvres abouties et en nouvelles opportunités.",
    "training.partnersLabel": "Partenaires :",
    "training.platformsLabel": "Plateformes :",
    "training.cs.alt": "Atelier Creative Start (provisoire)",
    "training.cs.brief": "Ouvrir les métiers des industries créatives aux habitants issus de milieux défavorisés.",
    "training.cs.delivered": "Un programme de storytelling numérique de 10 semaines conçu par Pinned Media, associant apprentissage en ligne, ateliers en présentiel, compétences de production et mentorat individuel.",
    "training.cs.result": "Les participants ont réalisé des projets finaux et reçu un certificat ; leurs évaluations ont appuyé l’attribution de leurs bourses de fin de programme.",
    "training.mame.title": "De la photographie à un premier film publié",
    "training.mame.videoTitle": "Le premier court documentaire de Mame Cheikh Mbaye",
    "training.mame.quote": "Cette plateforme m’a permis de faire découvrir à un public international la réalité quotidienne des Sénégalais ordinaires.",
    "training.mame.watch": "Voir le film de Mame",
    "training.mame.brief": "Aider Mame Cheikh Mbaye, photographe basé à Dakar, à développer ses compétences en réalisation documentaire.",
    "training.mame.delivered": "Le mentorat d’Acquire a accompagné Mame dans le développement, le tournage et le montage de son premier court documentaire.",
    "training.mame.result": "Pin Africa a publié le film et rémunéré Mame pour son travail, reliant ainsi montée en compétences et opportunité professionnelle.",

    /* ---------- Clients ---------- */
    "clients.title": "Clients et partenaires",
    "clients.text": "Des productions internationales et des projets régionaux pour la FIFA, USAID via Chemonics, UNDP Africa et UN Sahel.",

    /* ---------- Méthode ---------- */
    "process.title": "Notre méthode",
    "process.intro": "Du premier brief à la livraison finale, une équipe coordonnée accompagne votre projet en quatre étapes claires, dans un ou plusieurs pays.",
    "process.brief.title": "Brief",
    "process.brief.text": "Faites appel à nous pour un projet de production, une campagne de communication ou un partenariat d’agence mensuel. Nous définissons ensemble vos objectifs, votre public, votre budget, le périmètre et le circuit de validation, avec des livrables clairs et des indicateurs de réussite.",
    "process.plan.title": "Préparation",
    "process.plan.text": "Nous enquêtons sur le sujet, écoutons les personnes concernées et définissons l’approche éditoriale et visuelle. Nous réunissons les bons créatifs locaux, coordonnons les lieux de tournage et établissons un calendrier commun pour des productions dans un ou plusieurs pays.",
    "process.produce.title": "Production",
    "process.produce.text": "Réalisateurs et créatifs locaux apportent à la production leur connaissance du terrain, leurs relations et leur regard. Nous coordonnons simultanément les équipes de plusieurs pays pour filmer de vraies personnes et des histoires en train de s’écrire, avec finesse culturelle et attention.",
    "process.deliver.title": "Livraison",
    "process.deliver.text": "Nous livrons les contenus et gérons leur publication sur les canaux convenus. Dans le cadre des partenariats mensuels, nous analysons les performances et ajustons avec vous le plan de communication.",

    /* ---------- Trusted by ---------- */
    "trusted.line1": "Ils nous font confiance",
    "trusted.line2": "ONG, marques, éditeurs et gouvernements",

    /* ---------- Équipe ---------- */
    "team.title": "Rencontrez l’équipe",
    "team.intro": "Voici les quatre personnes que vous rencontrerez le plus probablement lors de votre premier contact. Derrière elles, une large équipe de réalisateurs, de producteurs, de designers et de créatifs locaux, en Afrique et dans la diaspora, se constitue autour de chaque projet.",
    "team.bk.role": "Fondatrice et productrice exécutive",
    "team.bk.bio": "Née au Congo, Benedicte est journaliste multimédia et productrice ; elle a notamment travaillé pour la BBC, ITN/ITV News, The Independent et New African Woman. À travers Pinned Media, Pin Africa et Acquire by Pin Africa, elle défend les voix africaines et sous-représentées. Son approche journalistique fonde notre engagement envers les vraies personnes, la finesse culturelle et la force du récit visuel.",
    "team.bk.alt": "Portrait de Benedicte Kalombo (provisoire)",
    "team.as.role": "Producteur et chef opérateur",
    "team.as.bio": "Ayo associe image, production et développement éditorial pour créer des films qui touchent le public. À titre individuel, il a travaillé comme chef opérateur et producteur pour la Premier League et DAZN, et a acquis une expérience de terrain lors de la Coupe du monde de la FIFA au Qatar. Il met ce savoir-faire visuel et sa compréhension de la culture football au service de nos récits non scénarisés.",
    "team.as.alt": "Portrait d’Ayo Sanusi (provisoire)",
    "team.lk.role": "Directrice de production et responsable technique",
    "team.lk.bio": "Photographe à l’œil précis pour la lumière, Letitia gère la production sur le terrain et coordonne le dispositif technique. Sa connaissance des caméras et du matériel garantit que chaque équipe dispose des outils et du soutien nécessaires pour donner vie au récit.",
    "team.lk.alt": "Portrait de Letitia Kamayi (provisoire)",
    "team.jd.role": "Responsable des opérations de production",
    "team.jd.bio": "Janette veille à l’organisation des productions en coulisses : budgets, suivi des projets, coordination des lieux, des équipes et des échanges avec les clients. Elle apporte la planification et le pilotage qui permettent à nos équipes de travailler sans accroc d’un lieu à l’autre.",
    "team.jd.alt": "Portrait de Janette Daramy (provisoire)",

    /* ---------- Contact ---------- */
    "contact.title": "Racontons votre histoire",
    "contact.intro": "Vous cherchez une agence de production et de communication ? Parlez-nous de vos objectifs, de votre public et de votre budget. Nous menons des projets, des campagnes et des missions d’agence mensuelles, en français et en anglais.",
    "contact.portfolio": "Découvrir le portfolio de Benedicte",

    /* ---------- Confidentialité ---------- */
    "privacy.placeholder": "[Politique de confidentialité à fournir et à valider]"
  };

  var DICT = { fr: FR };
  var SUPPORTED = ["en", "fr"];
  var STORAGE_KEY = "pm-lang";
  var ATTRS = [
    ["data-i18n-alt", "alt"],
    ["data-i18n-aria-label", "aria-label"],
    ["data-i18n-title", "title"],
    ["data-i18n-content", "content"]
  ];

  var params = new URLSearchParams(window.location.search);
  var isPreview = params.has("preview");
  var current = "en";

  /* Texte anglais d'origine, conservé pour pouvoir revenir à l'anglais */
  var originals = new WeakMap();

  function remember(el, prop, value) {
    var store = originals.get(el);
    if (!store) {
      store = {};
      originals.set(el, store);
    }
    if (!(prop in store)) store[prop] = value;
    return store[prop];
  }

  function lookup(key, lang) {
    if (lang === "en") return null;
    var dict = DICT[lang];
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    if (isPreview) console.warn("[i18n] Clé manquante (" + lang + ") : " + key);
    return null;
  }

  /* Applique la langue à un conteneur (document, modale, contenu cloné…) */
  function apply(root, lang) {
    lang = lang || current;
    root = root || document;

    var nodes = root.querySelectorAll("[data-i18n]");
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var isTitle = el.tagName === "TITLE";
      var en = remember(el, "html", isTitle ? el.textContent : el.innerHTML);
      var value = lookup(key, lang);
      var next = value == null ? en : value;
      if (isTitle) {
        if (el.textContent !== next) el.textContent = next;
      } else if (el.innerHTML !== next) {
        el.innerHTML = next;
      }
    });

    ATTRS.forEach(function (pair) {
      root.querySelectorAll("[" + pair[0] + "]").forEach(function (el) {
        var key = el.getAttribute(pair[0]);
        var en = remember(el, pair[1], el.getAttribute(pair[1]) || "");
        var value = lookup(key, lang);
        el.setAttribute(pair[1], value == null ? en : value);
      });
    });
  }

  /* Renvoie la traduction d'une clé pour du texte généré en JS */
  function t(key, fallback) {
    var value = lookup(key, current);
    return value == null ? fallback : value;
  }

  function updateSwitches() {
    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === current));
    });
  }

  function setLang(lang, options) {
    options = options || {};
    if (SUPPORTED.indexOf(lang) === -1) lang = "en";
    current = lang;
    document.documentElement.lang = lang;
    apply(document, lang);
    updateSwitches();

    if (options.persist !== false) {
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {
        /* stockage indisponible (navigation privée, file://…) : on ignore */
      }
    }

    document.dispatchEvent(new CustomEvent("pm:langchange", { detail: { lang: lang } }));
  }

  function initialLang() {
    var fromUrl = params.get("lang");
    if (fromUrl && SUPPORTED.indexOf(fromUrl) !== -1) return fromUrl;
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) {
      /* ignore */
    }
    return "en";
  }

  /* API publique utilisée par main.js */
  window.PMi18n = {
    apply: function (root) { apply(root, current); },
    t: t,
    setLang: setLang,
    getLang: function () { return current; },
    isPreview: isPreview
  };

  function init() {
    document.addEventListener("click", function (event) {
      var btn = event.target.closest(".lang-switch__btn");
      if (!btn) return;
      setLang(btn.getAttribute("data-lang"));
    });

    var lang = initialLang();
    if (lang !== "en") {
      setLang(lang, { persist: params.has("lang") });
    } else {
      updateSwitches();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
