const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.removeProperty("--x");
    card.style.removeProperty("--y");
  });
});

const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const total = slides.length;
const interval = 25000; // 14 sec

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % total;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + total) % total;
  updateSlider();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

// autoplay
let timer = setInterval(nextSlide, interval);

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, interval);
}
