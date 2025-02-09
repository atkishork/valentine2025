    let lastClicked = null;

    function toggleBlur(element, day, date, message) {
        // Reset previous clicked card
        if (lastClicked && lastClicked !== element) {
            lastClicked.classList.remove("active");
        }

        // Toggle current card
        element.classList.toggle("active");

        // Update lastClicked
        lastClicked = element.classList.contains("active") ? element : null;
    }
