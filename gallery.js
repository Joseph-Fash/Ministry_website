(function () {
  const GALLERY_COLLECTIONS = [
    {
      id: "ministry-of-the-word",
      title: "The Ministry of the Word",
      description:
        "Teaching, exhortation, and moments of spiritual labour across gatherings, pulpits, and ministry assignments.",
      cover: "images/gallery/ministry-of-the-word/cover.jpeg",
      images: [
        {
          src: "images/gallery/ministry-of-the-word/cover.jpeg",
          caption: "Preaching at a Word Encounter service",
        },
        {
          src: "images/gallery/ministry-of-the-word/01.jpeg",
          caption: "Preaching at a Word Encounter service",
        },
        {
          src: "images/gallery/ministry-of-the-word/02.jpeg",
          caption: "Ministering at a conference",
        },
        {
          src: "images/gallery/ministry-of-the-word/03.jpeg",
          caption: "A moment of teaching",
        },
        {
          src: "images/gallery/ministry-of-the-word/04.jpeg",
          caption: "Pulpit ministration",
        },
        {
          src: "images/gallery/ministry-of-the-word/05.jpeg",
          caption: "Pulpit ministration",
        },
        {
          src: "images/gallery/ministry-of-the-word/06.jpeg",
          caption: "Pulpit ministration",
        },
      ],
    },
    {
      id: "fellowship-and-fathers",
      title: "Fellowship & Fathers",
      description:
        "Moments shared with ministers, mentors, and fellow labourers whose lives and ministries have shaped the journey.",
      cover: "images/gallery/fellowship-and-fathers/cover.jpeg",
      images: [
        {
          src: "images/gallery/fellowship-and-fathers/cover.jpeg",
          caption: "With Dr. Arome Osayi",
        },
        {
          src: "images/gallery/fellowship-and-fathers/01.jpeg",
          caption: "With Dr. Arome Osayi",
        },
        {
          src: "images/gallery/fellowship-and-fathers/02.jpeg",
          caption: "Fellowship with a father in the faith",
        },
        {
          src: "images/gallery/fellowship-and-fathers/03.jpeg",
          caption: "A ministry association gathering",
        },
        {
          src: "images/gallery/fellowship-and-fathers/04.jpeg",
          caption: "With senior ministers",
        },
      ],
    },
    {
      id: "home-and-covenant",
      title: "Home & Covenant",
      description:
        "Quiet glimpses of family, partnership, and the life held together behind the public work of ministry.",
      cover: "images/gallery/home-and-covenant/cover.jpeg",
      images: [
        {
          src: "images/gallery/home-and-covenant/cover.jpeg",
          caption: "Dr. Abraham and Pst. Damilola Achimugu",
        },
        {
          src: "images/gallery/home-and-covenant/01.jpeg",
          caption: "Dr. Abraham and Pst. Damilola Achimugu",
        },
        {
          src: "images/gallery/home-and-covenant/02.jpeg",
          caption: "A family moment",
        },
        {
          src: "images/gallery/home-and-covenant/03.jpeg",
          caption: "Home life",
        },
        {
          src: "images/gallery/home-and-covenant/04.jpeg",
          caption: "Together",
        },
      ],
    },
    {
      id: "healing-as-calling",
      title: "Healing as Calling",
      description:
        "A record of the medical vocation carried alongside ministry — service, discipline, and compassion in practice.",
      cover: "images/gallery/healing-as-calling/cover.jpeg",
      images: [
        {
          src: "images/gallery/healing-as-calling/cover.jpeg",
          caption: "In clinical practice",
        },
        {
          src: "images/gallery/healing-as-calling/01.jpeg",
          caption: "In clinical practice",
        },
        {
          src: "images/gallery/healing-as-calling/02.jpeg",
          caption: "Serving in a doctor's coat",
        },
      ],
    },
    {
      id: "mercy-in-motion",
      title: "Mercy in Motion",
      description:
        "Images from village missions, outreaches, orphanage visits, and places where the Gospel took practical form.",
      cover: "images/gallery/mercy-in-motion/cover.jpeg",
      images: [
        {
          src: "images/gallery/mercy-in-motion/cover.jpeg",
          caption: "A village outreach",
        },
        {
          src: "images/gallery/mercy-in-motion/01.jpeg",
          caption: "A village outreach",
        },
        {
          src: "images/gallery/mercy-in-motion/02.jpeg",
          caption: "Visiting an orphanage home",
        },
        {
          src: "images/gallery/mercy-in-motion/03.jpeg",
          caption: "Practical compassion in action",
        },
        {
          src: "images/gallery/mercy-in-motion/04.jpeg",
          caption: "Serving a community",
        },
      ],
    },
    {
      id: "seeds-for-a-generation",
      title: "Seeds for a Generation",
      description:
        "Moments of learning, mentoring, and investment in children, students, and the lives still being formed.",
      cover: "images/gallery/seeds-for-a-generation/cover.jpeg",
      images: [
        {
          src: "images/gallery/seeds-for-a-generation/cover.jpeg",
          caption: "Pst. Damilola with school children",
        },
        {
          src: "images/gallery/seeds-for-a-generation/01.jpeg",
          caption: "Pst. Damilola with school children",
        },
        {
          src: "images/gallery/seeds-for-a-generation/02.jpeg",
          caption: "An academic outreach moment",
        },
      ],
    },
    {
      id: "honour-and-heritage",
      title: "Honour & Heritage",
      description:
        "Photographs that reflect family roots, gratitude, and the people whose prayers, labour, and example helped shape the path.",
      cover: "images/gallery/honour-and-heritage/cover.jpeg",
      images: [
        {
          src: "images/gallery/honour-and-heritage/cover.jpeg",
          caption: "With Rev. Clement and Pst. Josephine Achimugu",
        },
        {
          src: "images/gallery/honour-and-heritage/01.jpeg",
          caption: "With Rev. Clement and Pst. Josephine Achimugu",
        },
        {
          src: "images/gallery/honour-and-heritage/02.jpeg",
          caption: "A family heritage moment",
        },
        {
          src: "images/gallery/honour-and-heritage/03.jpeg",
          caption: "Roots and gratitude",
        },
        {
          src: "images/gallery/honour-and-heritage/04.jpeg",
          caption: "Roots and gratitude",
        },
        {
          src: "images/gallery/honour-and-heritage/05.jpeg",
          caption: "Roots and gratitude",
        },
        {
          src: "images/gallery/honour-and-heritage/06.jpeg",
          caption: "Roots and gratitude",
        },
      ],
    },
    {
      id: "shared-labour",
      title: "Shared Labour",
      description:
        "A visual record of ministry friendships, partnerships, and the work carried alongside trusted companions.",
      cover: "images/gallery/shared-labour/cover.jpeg",
      images: [
        {
          src: "images/gallery/shared-labour/cover.jpeg",
          caption: "With ministry colleagues",
        },
        {
          src: "images/gallery/shared-labour/01.jpeg",
          caption: "With ministry colleagues",
        },
        {
          src: "images/gallery/shared-labour/02.jpeg",
          caption: "A partnership in service",
        },
        {
          src: "images/gallery/shared-labour/03.jpeg",
          caption: "Fellow labourers",
        },
        {
          src: "images/gallery/shared-labour/04.jpeg",
          caption: "Fellow labourers",
        },
        {
          src: "images/gallery/shared-labour/05.jpeg",
          caption: "Fellow labourers",
        },
      ],
    },
  ];

  // Tonal fallbacks — shown behind/instead of a cover photo until real
  // images are in place, so a missing file never shows a broken-image icon.
  const FALLBACK_GRADIENTS = [
    "linear-gradient(150deg,#1E2330,#161B27 55%,#B98A46 170%)",
    "linear-gradient(150deg,#232838,#141824 60%,#7c5a34 170%)",
    "linear-gradient(150deg,#1b2030,#0f1219 60%,#567399 170%)",
    "linear-gradient(150deg,#242a3a,#12151e 55%,#D9A662 170%)",
    "linear-gradient(150deg,#1E2330,#0f1219 60%,#8a6a3c 170%)",
    "linear-gradient(150deg,#20263a,#12151e 55%,#4c6f93 170%)",
    "linear-gradient(150deg,#262c3c,#141824 60%,#B98A46 170%)",
    "linear-gradient(150deg,#1b2233,#0f1219 55%,#3f5c7a 170%)",
  ];

  const grid = document.getElementById("collectionsGrid");
  if (!grid) return; // this script only does anything on gallery.html

  const viewIcon =
    '<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  GALLERY_COLLECTIONS.forEach((col, i) => {
    const card = document.createElement("div");
    card.className = "collection-card reveal" + (i === 0 ? " featured" : "");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "View " + col.title + " collection");

    const cover = document.createElement("div");
    cover.className = "collection-cover";
    cover.style.backgroundImage =
      "url('" +
      col.cover +
      "'), " +
      FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length];

    const index = document.createElement("span");
    index.className = "collection-index";
    index.textContent = String(i + 1).padStart(2, "0");

    const cue = document.createElement("span");
    cue.className = "view-cue";
    cue.innerHTML = viewIcon;

    cover.appendChild(index);
    cover.appendChild(cue);

    const body = document.createElement("div");
    body.className = "collection-body";
    body.innerHTML =
      "<h3>" +
      col.title +
      "</h3>" +
      "<p>" +
      col.description +
      "</p>" +
      '<div class="collection-meta">' +
      "<span>" +
      col.images.length +
      " Photos</span>" +
      '<span class="view-collection">View Collection →</span>' +
      "</div>";

    card.appendChild(cover);
    card.appendChild(body);
    card.addEventListener("click", () => openLightbox(i, 0, card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(i, 0, card);
      }
    });

    grid.appendChild(card);
  });

  // The site-wide reveal observer in main.js already ran before these
  // cards existed, so give the newly injected ones their own observer.
  const revealCards = grid.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const cardIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            cardIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    revealCards.forEach((el) => cardIO.observe(el));
  } else {
    revealCards.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------- Lightbox ---------------- */
  const lightbox = document.getElementById("lightbox");
  const imageEl = document.getElementById("lightboxImage");
  const captionEl = document.getElementById("lightboxCaption");
  const counterEl = document.getElementById("lightboxCounter");
  const titleEl = document.getElementById("lightboxTitle");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-nav.prev");
  const nextBtn = lightbox.querySelector(".lightbox-nav.next");
  const stage = lightbox.querySelector(".lightbox-stage");

  let currentCollection = 0;
  let currentIndex = 0;
  let lastFocused = null;

  function renderSlide() {
    const col = GALLERY_COLLECTIONS[currentCollection];
    const img = col.images[currentIndex];
    imageEl.style.backgroundImage =
      "url('" +
      img.src +
      "'), " +
      FALLBACK_GRADIENTS[currentCollection % FALLBACK_GRADIENTS.length];
    captionEl.textContent = img.caption || "";
    counterEl.textContent = currentIndex + 1 + " / " + col.images.length;
    titleEl.textContent = col.title;
  }

  function openLightbox(colIndex, imgIndex, trigger) {
    currentCollection = colIndex;
    currentIndex = imgIndex;
    lastFocused = trigger || document.activeElement;
    renderSlide();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    if (lastFocused) lastFocused.focus();
  }

  function nextSlide() {
    const col = GALLERY_COLLECTIONS[currentCollection];
    currentIndex = (currentIndex + 1) % col.images.length;
    renderSlide();
  }

  function prevSlide() {
    const col = GALLERY_COLLECTIONS[currentCollection];
    currentIndex = (currentIndex - 1 + col.images.length) % col.images.length;
    renderSlide();
  }

  lightbox
    .querySelectorAll("[data-close]")
    .forEach((el) => el.addEventListener("click", closeLightbox));
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  // Touch swipe support
  let touchStartX = null;
  stage.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );
  stage.addEventListener(
    "touchend",
    (e) => {
      if (touchStartX === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) {
        dx > 0 ? prevSlide() : nextSlide();
      }
      touchStartX = null;
    },
    { passive: true },
  );
})();
