document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  const buttonContainer = document.getElementById("button-container");
  const secondaryButtons = document.getElementById("secondary-buttons");
  const outputElement = document.querySelector(".output");

  let primaryClicks = 0;

  // Handle first button
  quoteElement.addEventListener("click", function () {
    buttonContainer.style.display = "grid";
    quoteElement.style.display = "none";
  });

  // Function to display text and manage back functionality
  function showText(button, isLastPrimary = false) {
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

      if (isLastPrimary) {
        secondaryButtons.style.display = "grid";
      } else {
        buttonContainer.style.display = "grid";
      }

      backButton.remove();
    });

    outputElement.appendChild(backButton);
  }

  // Add click events for primary buttons
  document.querySelectorAll("#button-container .item").forEach((button, index) => {
    button.addEventListener("click", function () {
      showText(button, index === 3);
      button.style.display = "none";
      primaryClicks++;
    });
  });

  // Add click events for secondary buttons
  document.querySelectorAll("#secondary-buttons .item").forEach((button) => {
    button.addEventListener("click", function () {
      showText(button);
      button.style.display = "none";
    });
  });
});
