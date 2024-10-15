document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const sections = document.querySelectorAll("section");

    // Function to check if the section is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        // Hide intro section after scrolling
        if (window.scrollY > 50) {
            intro.classList.add("hidden");
        } else {
            intro.classList.remove("hidden");
        }

        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible"); // Optional: Hide if not in view
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
});
