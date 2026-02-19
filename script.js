document.addEventListener('DOMContentLoaded', () => {
    console.log("LG Subscribe Site Initialized.");
});

// Auto-close Mega Menu when a link is clicked
document.querySelectorAll('.mega-menu-panel a').forEach(link => {
    link.addEventListener('click', () => {
        // Alpine.js handles the state, but we ensure smooth navigation
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
