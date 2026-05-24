const toggleBtn = document.getElementById("dark-mode-toggle");
const body = document.body;

// toggleBtn.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");

//   const icon = toggleBtn.querySelector(".moon-icon");
//   if (body.classList.contains("dark-mode")) {
//     icon.textContent = "☀️";
//   } else {
//     icon.textContent = "🌙";
//   }
// });

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("menu-overlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
  if (overlay) overlay.classList.toggle("active");
});

if (overlay) {
  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
    overlay.classList.remove("active");
  });
}

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
    if (overlay) overlay.classList.remove("active");
  });
});

// Scroll-responsive header
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  lastScroll = currentScroll;
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

revealElements.forEach((el) => revealObserver.observe(el));

// Staggered reveal for grid children
const staggerContainers = document.querySelectorAll(".stagger-children");

const staggerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.1}s`;
          child.classList.add("revealed");
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

staggerContainers.forEach((el) => staggerObserver.observe(el));

// Active navigation state
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "index.html" && href === "index.html")) {
    link.classList.add("active-link");
  }
});

// ========== LANGUAGE SWITCHER ==========
function getCurrentLang() {
  return localStorage.getItem("lang") || "nl";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
  updateLangToggle(lang);
  document.documentElement.lang = lang;
}

function applyTranslations(lang) {
  // Text content (innerHTML)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key] && translations[key][lang]) {
      el.innerHTML = translations[key][lang];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[key] && translations[key][lang]) {
      el.placeholder = translations[key][lang];
    }
  });
}

function updateLangToggle(lang) {
  const btnEn = document.getElementById("lang-en");
  const btnNl = document.getElementById("lang-nl");
  if (btnEn && btnNl) {
    btnEn.classList.toggle("lang-active", lang === "en");
    btnNl.classList.toggle("lang-active", lang === "nl");
  }
}

// Initialize language on page load
if (typeof translations !== "undefined") {
  const savedLang = getCurrentLang();
  applyTranslations(savedLang);
  updateLangToggle(savedLang);
  document.documentElement.lang = savedLang;

  // Bind toggle buttons
  const btnEn = document.getElementById("lang-en");
  const btnNl = document.getElementById("lang-nl");
  if (btnEn) btnEn.addEventListener("click", () => setLang("en"));
  if (btnNl) btnNl.addEventListener("click", () => setLang("nl"));
}

const projectOrder = [
  "project1.html",
  "project2.html",
  "project3.html",
  "project4.html",
  "project5.html",
  "project6.html",
];

// Huidige pagina bepalen
const currentPageName = window.location.pathname.split("/").pop();
const currentIndex = projectOrder.indexOf(currentPageName);

// Buttons
const prevDiv = document.getElementById("prev-button");
const nextDiv = document.getElementById("next-button");

if (prevDiv && nextDiv && currentIndex !== -1) {
  const prevLink = prevDiv.querySelector("a");
  const nextLink = nextDiv.querySelector("a");

  // Vorige project
  if (currentIndex > 0) {
    prevLink.href = `./${projectOrder[currentIndex - 1]}`;
  } else {
    prevDiv.style.display = "none";
  }

  // Volgende project
  if (currentIndex < projectOrder.length - 1) {
    nextLink.href = `./${projectOrder[currentIndex + 1]}`;
  } else {
    nextDiv.style.display = "none";
  }
}
