document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector("nav ul");
    const sections = document.querySelectorAll("section");
    const navLinkItems = document.querySelectorAll("nav ul li a");

    function activateLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        let isHomeActive = true; // Assume home is active initially

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute("id");
            navLinkItems.forEach((link) => {
                if (link.getAttribute("href").includes(sectionId)) {
                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionBottom
                    ) {
                        link.classList.add("active");
                        isHomeActive = false; // Another section is active, so Home isn't
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });

        // Handle the home link separately
        navLinkItems.forEach((link) => {
            if (link.getAttribute("href") === "#home") {
                if (window.scrollY < window.innerHeight / 4 && isHomeActive) {
                    // Adjusted to check if near the very top
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            }
        });
    }

    // Event listeners
    window.addEventListener("scroll", activateLink);
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    navLinkItems.forEach((link) => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
            activateLink(); // Re-check active link after a click
        });
    });
});
