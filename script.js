const popup = document.getElementById("newsletterPopup");
const closeBtn = document.querySelector(".close");
const newsletterForm = document.getElementById("newsletterForm");

setTimeout(() => {
    if (popup) {
        popup.style.display = "block"; // Show the popup
    }
}, 5000);

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        if (popup) {
            popup.style.display = "none"; // Hide the popup
        }
    });
}

if (popup) {
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none"; // Hide the popup
        }
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        alert("Thank you for subscribing!"); // Show thank you message
        popup.style.display = "none"; // Close the popup
    });
}
