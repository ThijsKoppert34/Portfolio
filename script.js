document.addEventListener("DOMContentLoaded", () => {
  const woorden = document.querySelectorAll("#animatieTekst span");

  woorden.forEach((woord, i) => {
    woord.style.opacity = 0;
    woord.style.display = "inline-block";
    woord.style.transform = "translateY(10px)";
    woord.style.transition = "opacity 0.4s ease, transform 0.4s ease";

    setTimeout(() => {
      woord.style.opacity = 1;
      woord.style.transform = "translateY(0)";
    }, i * 300); // 0.3s tussen elk woord
  });
});

const toggles = document.querySelectorAll(".nerdToggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      // Zet alle andere toggles uit
      toggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.checked = false;
        }
      });
    }
  });
});

document.querySelectorAll(".openExtra").forEach((button) => {
  button.addEventListener("click", () => {
    const overlay = button.parentElement.querySelector(".overlay");
    overlay.classList.remove("hidden");
  });
});

document.querySelectorAll(".sluitExtra").forEach((button) => {
  button.addEventListener("click", () => {
    const overlay = button.closest(".overlay");
    overlay.classList.add("hidden");
  });
});
