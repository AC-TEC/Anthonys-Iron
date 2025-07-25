//Menu toggle annimation

function toggleMenu() {
    const menu = document.querySelector(".mobile_menu");

    if (menu.classList.contains("show")) {
        //fade out
        menu.classList.remove("show");
        setTimeout(() => {
            menu.classList.add("hidden");
        }, 500); //match CSS transition
    } else {
        //fade in
        menu.classList.remove("hidden");
        setTimeout(() => {
            menu.classList.add("show");
        }, 10); //allow time for reflow
    }
}



