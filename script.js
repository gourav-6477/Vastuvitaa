// This is the special listener that waits for the entire HTML page to be ready.
// ALL of our JavaScript code should go inside this function.
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Smart Sticky Header Logic ---
    const header = document.querySelector('.main-header');
    
    // We check if the header actually exists on the page before trying to use it.
    if (header) { 
        window.addEventListener('scroll', () => {
            // Add .scrolled class if user scrolls more than 50px
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- 2. Scroll-Reveal Animation Logic ---
    const revealElements = document.querySelectorAll('.reveal');

    // Only run this code if there are elements with the "reveal" class.
    if (revealElements.length > 0) { 
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    // --- 3. Mobile Menu Logic ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav-overlay');

    // Check if the menu elements exist.
    if (menuToggle && mobileNav) { 
        menuToggle.addEventListener('click', () => {
            // Toggle the .is-open class on the overlay
            mobileNav.classList.toggle('is-open');
            // Prevent the body from scrolling when the menu is open
            document.body.style.overflow = mobileNav.classList.contains('is-open') ? 'hidden' : '';
        });
    }
    /* Add this inside the DOMContentLoaded listener in script.js */


}

); // This is the closing bracket for our main DOMContentLoaded listener.