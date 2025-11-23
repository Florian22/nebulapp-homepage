document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Scroll to Center Logic (Cross-page support)
    // If the URL has a hash (e.g., #apps-section), scroll it to center
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // remove '#'
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Wait slightly for layout to settle
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }
});

// 3. Helper function for On-Page buttons (e.g., "Explore Apps")
function scrollToCenter(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Update URL hash without jumping
        history.pushState(null, null, '#' + elementId);
    }
}