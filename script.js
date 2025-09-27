// This is the special listener that waits for the entire HTML page to be ready.
// ALL of our JavaScript code should go inside this function.
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Smart Sticky Header Logic ---
    const header = document.querySelector('.main-header');
    
    // We check if the header actually exists on the page before trying to use it.
    if (header) { 
        // This functionality is now handled by the CSS :not(.hero-section) selector
        // for better performance, but the JS is kept in case of fallback needs.
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

    // --- 4. Testimonial Slider Logic ---
    // Select all the individual testimonial slides within the slider container.
    // --- 4. Testimonial Slider Logic (Sliding Version) ---
const slider = document.querySelector('#testimonial-slider');

// Only run if the slider exists on the page
if (slider) {
    const track = slider.querySelector('.testimonial-track');
    const slides = Array.from(track.children);
    
    // Only run if there's more than one slide
    if (slides.length > 1) {
        let currentIndex = 0;
        const slideInterval = 6000; // Time in milliseconds (6 seconds)

        function moveToNextSlide() {
            // Move to the next slide index, looping back to 0 if at the end
            currentIndex = (currentIndex + 1) % slides.length;

            // Apply the transform to the track to move it horizontally
            track.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
        }
        
        // Start the automatic sliding
        setInterval(moveToNextSlide, slideInterval);
    }
}

}); // This is the closing bracket for our main DOMContentLoaded listener.