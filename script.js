document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  const buttonContainer = document.getElementById("button-container");
  const secondaryButtons = document.getElementById("secondary-buttons");
  const outputElement = document.querySelector(".output");

  let primaryClickedCount = 0;

  // Show the primary buttons grid when the quote is clicked
  quoteElement.addEventListener("click", function () {
    buttonContainer.style.display = "grid";
    quoteElement.style.display = "none";
  });

  // Function to handle button clicks
  function handleButtonClick(button) {
    const text = button.getAttribute("data-text");

    // Show only the text in the output area
    outputElement.innerHTML = `<div class="text-content">${text}</div>`;
    outputElement.style.display = "flex";

    // Hide all button containers
    buttonContainer.style.display = "none";
    secondaryButtons.style.display = "none";

    // Add the back button
    const backBtn = document.createElement("button");
    backBtn.id = "back-btn";
    backBtn.textContent = "Back";
    backBtn.addEventListener("click", function () {
      outputElement.style.display = "none"; // Hide the text content
      outputElement.innerHTML = ""; // Clear the content

      // Restore button visibility based on click state
      if (primaryClickedCount < 4) {
        buttonContainer.style.display = "grid"; // Show primary buttons
      } else {
        secondaryButtons.style.display = "grid"; // Show secondary buttons
      }

      backBtn.remove(); // Remove the back button
    });

    outputElement.appendChild(backBtn);
  }

  // Add event listeners to primary buttons
  const primaryItems = buttonContainer.querySelectorAll(".item");
  primaryItems.forEach((item) => {
    item.addEventListener("click", function () {
      handleButtonClick(item);

      // Increment primary button click count and hide the clicked button
      primaryClickedCount++;
      item.style.display = "none";

      // Show secondary buttons if all primary buttons are clicked
      if (primaryClickedCount === 4) {
        secondaryButtons.style.display = "grid";
      }
    });
  });

  // Add event listeners to secondary buttons
  const secondaryItems = secondaryButtons.querySelectorAll(".item");
  secondaryItems.forEach((item) => {
    item.addEventListener("click", function () {
      handleButtonClick(item);

      // Hide the clicked secondary button
      item.style.display = "none";
    });
  });
});
