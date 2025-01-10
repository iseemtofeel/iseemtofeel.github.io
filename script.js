document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  const buttonContainer = document.getElementById("button-container");
  const secondaryButtons = document.getElementById("secondary-buttons");
  const outputElement = document.querySelector(".output");

  let clickedPrimaryButtons = 0; // Track how many primary buttons have been clicked

  // Handle the first button
  quoteElement.addEventListener("click", function () {
    buttonContainer.style.display = "grid";
    quoteElement.style.display = "none";
  });

  // Function to display text and manage back functionality
  function showText(button, isSecondary = false) {
    const text = button.getAttribute("data-text");
    outputElement.innerHTML = `<div class="text-content">${text}</div>`;
    outputElement.style.display = "flex";
    buttonContainer.style.display = "none";
    secondaryButtons.style.display = isSecondary ? "grid" : "none";

    const backButton = document.createElement("button");
    backButton.id = "back-btn";
    backButton.textContent = "Back";
    backButton.addEventListener("click", function () {
      outputElement.style.display = "none";

      if (isSecondary) {
        secondaryButtons.style.display = "grid";
      } else {
        buttonContainer.style.display = "grid";
      }

      backButton.remove();
    });

    outputElement.appendChild(backButton);
  }

  // Add click events for primary buttons
  document.querySelectorAll("#button-container .item").forEach((button) => {
    button.addEventListener("click", function () {
      showText(button);
      button.style.display = "none";
      clickedPrimaryButtons++;

      // Check if all primary buttons are clicked
      if (clickedPrimaryButtons === 4) {
        secondaryButtons.style.display = "grid";
      }
    });
  });

  // Add click events for secondary buttons
  document.querySelectorAll("#secondary-buttons .item").forEach((button) => {
    button.addEventListener("click", function () {
      showText(button, true);
      // Keep the other secondary button visible
      button.style.display = "none";
    });
  });
});
