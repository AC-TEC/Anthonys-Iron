//Menu toggle annimation

function toggleMenu() {
    const menu = document.querySelector(".mobile_menu");
    const transitionDuration = 800; // Match the CSS transition duration in milliseconds

    if (menu.classList.contains("show")) {
        // Fade out
        menu.classList.remove("show");
        // After the transition, set visibility to hidden to ensure it's not clickable
        // and doesn't take up space, and add the 'hidden' class if you still need it
        // for other purposes (though with visibility:hidden, it might not be strictly necessary).
        setTimeout(() => {
            // If you still want a 'hidden' class to mark it as fully out of the flow, add it here.
            // However, 'visibility: hidden;' combined with 'opacity: 0;' is often sufficient.
            // For this specific problem, simply allowing the CSS transition to handle visibility is key.
            // If you need to truly remove it from the layout, you could add:
            // menu.style.display = 'none';
            // But for a smooth fade, rely on opacity and visibility.
        }, transitionDuration); // Wait for the transition to finish
    } else {
        // Fade in
        // Ensure the menu is visible and ready for the fade-in transition
        menu.classList.add("show"); // This will trigger the opacity and visibility transition
    }
}




