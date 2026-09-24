document.addEventListener("DOMContentLoaded", () => {
    // 1. Define the observer settings
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Triggers when 15% of the element enters the viewport
    };

    // 2. Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger the CSS transition
                entry.target.classList.add("is-visible");
                // Stop observing once it has been revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 3. Attach the observer to every element with the reveal class
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach(el => observer.observe(el));
});