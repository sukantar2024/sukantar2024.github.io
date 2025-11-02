document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked (for mobile usability)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Dynamic Copyright Year ---
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- Add Progress Bar Percentages (Optional visual touch) ---
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const level = bar.getAttribute('data-level');
        // This is a CSS property manipulation; for a live, functional site, 
        // the style="width: XX%" attribute is more reliable for static hosting.
        // We ensure the HTML attribute is set, but this JS can be used for dynamic effects later.
    });
});