document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  const buttonContainer = document.getElementById("button-container");
  const secondaryButtons = document.getElementById("secondary-buttons");
  const outputElement = document.querySelector(".output");

  if (quoteElement && buttonContainer && secondaryButtons && outputElement) {
    // Show the primary buttons on quote click
    quoteElement.addEventListener("click", function () {
      buttonContainer.style.display = "grid";
      quoteElement.style.display = "none";
    });

    // Handle button clicks
    function handleButtonClick(button) {
      const textContent = button.getAttribute("data-text");

      // Show the text in the output section
      outputElement.innerHTML = `<div>${textContent}</div>`;
      outputElement.style.display = "block";

      // Hide all buttons
      buttonContainer.style.display = "none";
      secondaryButtons.style.display = "none";

      // Add a "Back" button
      const backBtn = document.createElement("button");
      backBtn.id = "back-btn";
      backBtn.textContent = "Back";

      // Back button functionality
      backBtn.addEventListener("click", function () {
        outputElement.style.display = "none";
        outputElement.innerHTML = ""; // Clear the text

        // Show appropriate buttons
        if (button.classList.contains("primary")) {
          buttonContainer.style.display = "grid";
        } else {
          secondaryButtons.style.display = "grid";
        }

        backBtn.remove();
      });

      outputElement.appendChild(backBtn);
    }

    // Attach event listeners to primary buttons
    const primaryItems = buttonContainer.querySelectorAll(".item");
    primaryItems.forEach((item) => {
      item.classList.add("primary");
      item.addEventListener("click", function () {
        handleButtonClick(item);
      });
    });

    // Attach event listeners to secondary buttons
    const secondaryItems = secondaryButtons.querySelectorAll(".item");
    secondaryItems.forEach((item) => {
      item.classList.add("secondary");
      item.addEventListener("click", function () {
        handleButtonClick(item);
      });
    });
  }
});
