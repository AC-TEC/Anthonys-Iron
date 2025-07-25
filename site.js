//Menu toggle annimation

function toggleMenu() {
    const menu = document.querySelector(".mobile_menu");
    const transitionDuration = 800; // Match the CSS transition duration

    if (menu.classList.contains("show")) {
        // Fade out
        menu.classList.remove("show");
        
        // After the transition, set visibility to hidden to ensure it's not clickable
        setTimeout(() => {
        }, transitionDuration); // Wait for the transition to finish
    } else {
        // Fade in
        // Ensure the menu is visible and ready for the fade-in transition
        menu.classList.add("show"); // This will trigger the opacity and visibility transition
    }
}




