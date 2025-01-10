document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  const buttonContainer = document.getElementById("button-container");
  const secondaryButtons = document.getElementById("secondary-buttons");
  const outputElement = document.querySelector(".output");

  let primaryClickedCount = 0;

  // Show the primary grid when the quote is clicked
  quoteElement.addEventListener("click", function () {
    buttonContainer.style.display = "grid";
    quoteElement.style.display = "none";
  });

  // Function to handle button clicks
  function handleButtonClick(button) {
    const text = button.getAttribute("data-text");

    // Show the text when the button is clicked
    outputElement.innerHTML = `<div class="text-content">${text}</div>`;
    outputElement.style.display = "flex";

    // Hide the clicked button
    button.style.display = "none"; 

    // If all primary buttons are clicked, show the secondary buttons
    primaryClickedCount++;
    if (primaryClickedCount === 4) {
      secondaryButtons.style.display = "grid";
    }

    // Add back button
    const backBtn = document.createElement("button");
    backBtn.id = "back-btn";
    backBtn.textContent = "Back";
    backBtn.addEventListener("click", function () {
      // Clear the text when going back
      outputElement.style.display = "none";
      outputElement.innerHTML = ""; // Clear the displayed text

      // Show the primary buttons again
      buttonContainer.style.display = "grid";
      secondaryButtons.style.display = "none"; // Hide secondary buttons when going back

      backBtn.remove(); // Remove the back button after going back
    });

    outputElement.appendChild(backBtn); // Add the back button to the output container
  }

  // Add event listeners to primary buttons
  const primaryItems = buttonContainer.querySelectorAll(".item");
  primaryItems.forEach((item) => {
    item.addEventListener("click", function () {
      handleButtonClick(item);
    });
  });

  // Add event listeners to secondary buttons (Feel and Seem)
  const secondaryItems = secondaryButtons.querySelectorAll(".item");
  secondaryItems.forEach((item) => {
    item.addEventListener("click", function () {
      handleButtonClick(item);
    });
  });
});
