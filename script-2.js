document.addEventListener("DOMContentLoaded", function () {
    const highlights = document.querySelectorAll(".highlight");
    const tooltip = document.getElementById("tooltip");

    highlights.forEach((highlight) => {
        highlight.addEventListener("mouseenter", function (event) {
            tooltip.innerText = highlight.dataset.info;
            tooltip.style.display = "block";
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        highlight.addEventListener("mouseleave", function () {
            tooltip.style.display = "none";
        });

        highlight.addEventListener("click", function () {
            alert(highlight.dataset.info);
        });
    });
});
