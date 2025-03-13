document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add Active Class to Navigation Links on Scroll
    window.addEventListener("scroll", function () {
        let fromTop = window.scrollY + 60;

        navLinks.forEach(link => {
            let section = document.getElementById(link.getAttribute("href").substring(1));

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });

    // Toggle Dark Mode (Optional Feature)
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px";
    toggleButton.style.backgroundColor = "#333";
    toggleButton.style.color = "#fff";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
    });

    // Load Theme Preference
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

    // Add Light Mode CSS Dynamically
    const style = document.createElement("style");
    style.innerHTML = `
        .light-mode {
            background-color: #fff !important;
            color: #000 !important;
        }
    `;
    document.head.appendChild(style);
});
