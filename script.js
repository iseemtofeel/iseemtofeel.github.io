document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  const buttonContainer = document.getElementById("button-container");
  const secondaryButtons = document.getElementById("secondary-buttons");
  const outputElement = document.querySelector(".output");

  let primaryClickedCount = 0;
  let secondaryClickedCount = 0;

  if (quoteElement && buttonContainer && secondaryButtons && outputElement) {
    // Show the primary grid when the quote is clicked
    quoteElement.addEventListener("click", function () {
      buttonContainer.style.display = "grid";
      quoteElement.style.display = "none";
    });

    // Function to handle button clicks
    function handleButtonClick(button, isSecondary = false) {
      const text = button.getAttribute("data-text");
      
      // Show the text when the button is clicked
      outputElement.innerHTML = `<div class="text-content">${text}</div>`;
      outputElement.style.display = "flex";

      // Hide the clicked button
      button.style.display = "none"; 

      // Hide the primary buttons
      buttonContainer.style.display = "none";

      // If all primary buttons are clicked, show the secondary buttons
      if (primaryClickedCount === 4) {
        secondaryButtons.style.display = "grid"; // Show secondary buttons
      }

      // Add back button
      const backBtn = document.createElement("button");
      backBtn.id = "back-btn";
      backBtn.textContent = "Back";
      backBtn.addEventListener("click", function () {
        // Clear the text when going back
        outputElement.style.display = "none";
        outputElement.innerHTML = ""; // Clear the displayed text

        // Show the primary buttons again if not all have been clicked
        if (primaryClickedCount < 4) {
          buttonContainer.style.display = "grid"; // Show primary buttons again
        } 
        // Show secondary buttons if all primary buttons are clicked
        else {
          secondaryButtons.style.display = "grid"; // Show secondary buttons after all primary buttons
        }

        backBtn.remove(); // Remove the back button after going back
      });

      outputElement.appendChild(backBtn); // Add the back button to the output container
    }

    // Add event listeners to primary buttons
    const primaryItems = buttonContainer.querySelectorAll(".item");
    primaryItems.forEach((item) => {
      item.addEventListener("click", function () {
        primaryClickedCount++;
        handleButtonClick(item);

        // After clicking all primary buttons, show secondary buttons
        if (primaryClickedCount === primaryItems.length) {
          // Secondary buttons will be shown after all primary ones are clicked
        }
      });
    });

    // Add event listeners to secondary buttons
    const secondaryItems = secondaryButtons.querySelectorAll(".item");
    secondaryItems
