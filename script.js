// Get elements
const subscribeBtn = document.getElementById("subscribeBtn");
const popup = document.getElementById("newsletterPopup");
const closeBtn = document.querySelector(".close");

// Show the popup automatically after a delay
setTimeout(() => {
    popup.style.display = "block";
}, 5000); 

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close the popup if user clicks outside the popup content
window.addEventListener("click", (event) => {
    if (event.target == popup) {
        popup.style.display = "none";
    }
});