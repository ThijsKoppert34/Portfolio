document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.getElementById("animatieTekst");
  const content = h1.innerHTML;

  // splits op woorden én behoud witruimtes en <br>
  const parts = content.split(/(<br\s*\/?>|\s+)/g);

  h1.innerHTML = "";

  parts.forEach((part, index) => {
    if (part.match(/^<br\s*\/?>$/i)) {
      h1.appendChild(document.createElement("br"));
    } else if (part.trim() === "") {
      // voeg witruimte toe als tekstnode
      h1.appendChild(document.createTextNode(part));
    } else {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = part;
      h1.appendChild(span);

      setTimeout(() => {
        span.classList.add("visible");
      }, index * 150);
    }
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
