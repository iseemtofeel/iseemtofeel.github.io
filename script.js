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
      const textContent = button.getAttribute("data-text");

      // Display text in the output
      outputElement.innerHTML = `<div>${textContent}</div>`;
      outputElement.style.display = "flex";

      // Hide all buttons
      buttonContainer.style.display = "none";
      secondaryButtons.style.display = "none";

      // Add a back button
      const backBtn = document.createElement("button");
      backBtn.id = "back-btn";
      backBtn.textContent = "Back";
      backBtn.style.marginTop = "10px";

      backBtn.addEventListener("click", function () {
        // Clear the text when going back
        outputElement.style.display = "none";
        outputElement.innerHTML = ""; // Clear the displayed text

        // Show the primary buttons if not all primary buttons have been clicked
        if (primaryClickedCount < 4) {
          buttonContainer.style.display = "grid";
        } 
        // Show the secondary buttons if all primary buttons have been clicked
        else {
          secondaryButtons.style.display = "grid";
        }

        backBtn.remove(); // Remove the back button after going back
      });

      outputElement.appendChild(backBtn);
    }

    // Add event listeners to primary buttons
    const primaryItems = buttonContainer.querySelectorAll(".item");
    primaryItems.forEach((item) => {
      item.addEventListener("click", function () {
        primaryClickedCount++;
        handleButtonClick(item);

        // After clicking all primary buttons, show secondary buttons
        if (primaryClickedCount === primaryItems.length) {
          // Secondary buttons will appear only after text is displayed
          secondaryButtons.style.display = "grid";
        }
      });
    });

    // Add event listeners to secondary buttons
    const secondaryItems = secondaryButtons.querySelectorAll(".item");
    secondaryItems.forEach((item) => {
      item.addEventListener("click", function () {
        secondaryClickedCount++;
        handleButtonClick(item, true);

        // Hide secondary buttons if both are clicked
        if (secondaryClickedCount === secondaryItems.length) {
          secondaryButtons.style.display = "none";
        }
      });
    });
  }
});
