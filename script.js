document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  const buttonContainer = document.getElementById("button-container");
  const secondaryButtons = document.getElementById("secondary-buttons");
  const outputElement = document.querySelector(".output");

  let primaryClicks = 0;

  quoteElement.addEventListener("click", function () {
    buttonContainer.style.display = "grid";
    quoteElement.style.display = "none";
  });

  function showText(button) {
    const text = button.getAttribute("data-text");
    outputElement.innerHTML = `<div class="text-content">${text}</div>`;
    outputElement.style.display = "flex";
    buttonContainer.style.display = "none";
    secondaryButtons.style.display = "none";

    const backButton = document.createElement("button");
    backButton.id = "back-btn";
    backButton.textContent = "Back";
    backButton.addEventListener("click", function () {
      outputElement.style.display = "none";
      buttonContainer.style.display = primaryClicks < 4 ? "grid" : "none";
      secondaryButtons.style.display = primaryClicks >= 4 ? "grid" : "none";
      backButton.remove();
    });

    outputElement.appendChild(backButton);
  }

  document.querySelectorAll(".item").forEach((button) => {
    button.addEventListener("click", function () {
      showText(button);
      button.style.display = "none";
      if (buttonContainer.contains(button)) {
        primaryClicks++;
        if (primaryClicks === 4) {
          secondaryButtons.style.display = "grid";
        }
      }
    });
  });
});
