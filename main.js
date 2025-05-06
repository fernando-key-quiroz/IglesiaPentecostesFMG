// Main JavaScript file for Iglesia Pentecostés Fe Misericordia y Gracia
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Placeholder for analytics tracking (To be implemented later)
    function trackUserActivity(event) {
        console.log(`User interacted with ${event.target.tagName}`);
    }

    document.addEventListener("click", trackUserActivity);
});
