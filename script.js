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

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  hamburger.classList.toggle("toggle");
});

const projectOrder = [
  "project1.html",
  "project2.html",
  "project3.html",
  "project4.html",
  "project5.html",
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
