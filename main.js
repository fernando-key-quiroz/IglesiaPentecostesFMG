//Church Website:INDEX.HTML
// FILTER CATEGORY AUTHOR: FERNANDO QUIROZ
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

    // ==============================
    // FILTERING FUNCTIONALITY:
    // ==============================

    // Grab checkboxes for each filtering group:
    var categoryCheckboxes = document.querySelectorAll("#categoryFilter input[type='checkbox']");
    var dayCheckboxes = document.querySelectorAll("#dayFilter input[type='checkbox']");
    var timeCheckboxes = document.querySelectorAll("#timeFilter input[type='checkbox']");

    function filterEvents() {
        // Gather selected values (in lowercase, trimmed) from each group:
        var selectedCategories = Array.from(categoryCheckboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.value.toLowerCase().trim());
        
        var selectedDays = Array.from(dayCheckboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.value.toLowerCase().trim());
        
        var selectedTimes = Array.from(timeCheckboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.value.toLowerCase().trim());

        // Loop through every event item:
        var events = document.querySelectorAll(".event-item");
        events.forEach(function(event) {
            // Get event's categories (a space-separated string)
            var eventCategories = event.getAttribute("data-categories").toLowerCase().split(" ");
            
            // For day and time filtering, ensure your HTML has data-day and data-time.
            // If not present, default to empty string.
            var eventDay = (event.getAttribute("data-day") || "").toLowerCase().trim();
            var eventTime = (event.getAttribute("data-time") || "").toLowerCase().trim();

            // Check for a match in each group:
            // If no checkbox is selected in a group, that group passes.
            var categoryMatch = (selectedCategories.length === 0) || 
                selectedCategories.some(filterVal => eventCategories.includes(filterVal));
            
            var dayMatch = (selectedDays.length === 0) || 
                selectedDays.includes(eventDay);
            
            var timeMatch = (selectedTimes.length === 0) || 
                selectedTimes.includes(eventTime);
            
            // If the event satisfies all filters, show it; else hide it.
            if (categoryMatch && dayMatch && timeMatch) {
                event.style.display = "";
            } else {
                event.style.display = "none";
            }
        });
    }

    // Attach change event listeners on every filter checkbox in all groups:
    var allCheckboxes = document.querySelectorAll("#categoryFilter input, #dayFilter input, #timeFilter input");
    allCheckboxes.forEach(function(checkbox) {
       checkbox.addEventListener("change", filterEvents);
    });
});