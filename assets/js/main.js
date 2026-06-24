"// =====================================
// Kgorogang Thatching Services
// Main JavaScript File
// =====================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Navigation Toggle =====
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ===== Portfolio Filter (Portfolio Page) =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    if (filterButtons.length > 0 && portfolioCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                portfolioCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    // Hide all cards first
                    card.style.display = 'none';
                    
                    // Show cards that match filter or show all
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        setTimeout(() => {
                            card.style.display = 'block';
                            card.classList.add('fade-in');
                        }, 100);
                    }
                });
            });
        });
    }
    
    // ===== Contact Form Handling =====
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Check if using placeholder Formspree URL
            const formAction = this.getAttribute('action');
            
            if (formAction.includes('YOUR_FORM_ID')) {
                e.preventDefault();
                
                // Show success message (demo mode)
                if (formSuccess) {
                    formSuccess.style.display = 'block';
                    contactForm.style.display = 'none';
                    
                    // Scroll to success message
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                // In production, remove the preventDefault and let Formspree handle it
                return;
            }
            
            // If using real Formspree, this will submit normally
            // You can add additional validation here if needed
        });
    }
    
    // ===== Smooth Scroll for Anchor Links =====
    const anchorLinks = document.querySelectorAll('a[href^=\"#\"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal page anchors
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ===== Fade In Animation on Scroll =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .value-card, .testimonial-card, .reason-card');
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // ===== Form Validation Enhancement =====
    const formInputs = document.querySelectorAll('input[required], textarea[required], select[required]');
    
    formInputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('error');
        });
        
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
    
    // ===== WhatsApp Button Tracking (Optional Analytics) =====
    const whatsappButton = document.querySelector('.whatsapp-float');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp button clicked');
            
            // Example: Google Analytics event
            // gtag('event', 'whatsapp_click', { 'event_category': 'contact' });
        });
    }
    
    // ===== Phone Link Tracking (Optional Analytics) =====
    const phoneLinks = document.querySelectorAll('a[href^=\"tel:\"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Phone link clicked');
            
            // Example: Google Analytics event
            // gtag('event', 'phone_click', { 'event_category': 'contact' });
        });
    });
    
    // ===== Image Lazy Loading Fallback =====
    // Modern browsers support native lazy loading, but this is a fallback
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading=\"lazy\"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for older browsers
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // ===== Print Current Year in Footer =====
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // ===== Parallax Effect for Hero (Optional Enhancement) =====
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < hero.offsetHeight) {
                hero.style.backgroundPositionY = -(scrolled * parallaxSpeed) + 'px';
            }
        });
    }
    
    // ===== Service Cards Hover Effect Enhancement =====
    const serviceCards = document.querySelectorAll('.service-card, .portfolio-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // ===== Initialize Page =====
    console.log('Kgorogang Thatching Services website loaded successfully!');
});

// ===== Utility Functions =====

// Function to validate phone number (South African format)
function validatePhoneNumber(phone) {
    // Remove spaces and special characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Check if it's a valid SA phone number (10 digits starting with 0, or 11 with country code)
    return /^(0\d{9}|27\d{9})$/.test(cleaned);
}

// Function to format phone number for display
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    
    if (cleaned.length === 10) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    } else if (cleaned.length === 11) {
        return cleaned.replace(/(\d{2})(\d{2})(\d{3})(\d{4})/, '+$1 $2 $3 $4');
    }
    
    return phone;
}

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export functions for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validatePhoneNumber,
        formatPhoneNumber,
        isInViewport
    };
}
"
