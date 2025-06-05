// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navItems = document.querySelectorAll('.custom-nav-item');

// Ripple effect for nav items
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 400);
    });
});

// Click highlight for nav items
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(i => i.classList.remove('active-nav-box'));
        this.classList.add('active-nav-box');
    });
});

// Scroll-based nav highlight (fixes Home section highlight issue)
document.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section[id]');
    let found = false;
    let scrollPos = window.scrollY + 80; // adjust offset for fixed navbar

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
            navItems.forEach(item => {
                const link = item.querySelector('.nav-link');
                item.classList.remove('active-nav-box');
                if (link && link.getAttribute('href') === `#${section.id}`) {
                    item.classList.add('active-nav-box');
                }
            });
            found = true;
        }
    });

    // If at the very top, highlight Home
    if (!found && window.scrollY < 100) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#home') {
                link.classList.add('active');
            }
        });
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            item.classList.remove('active-nav-box');
            if (link && link.getAttribute('href') === '#home') {
                item.classList.add('active-nav-box');
            }
        });
    }
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('[data-filter]');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Certifications Carousel: Dot click/toggle AND auto-slide
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.cert-slide');
    const dots = document.querySelectorAll('.cert-dot');
    let current = 0;
    let intervalId;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        dots.forEach((dot, i) => dot.style.opacity = i === idx ? '1' : '.5');
        current = idx;
    }

    function nextSlide() {
        let next = (current + 1) % slides.length;
        showSlide(next);
    }

    function startInterval() {
        intervalId = setInterval(nextSlide, 6000); // 6 seconds per slide
    }

    function resetInterval() {
        clearInterval(intervalId);
        startInterval();
    }

    dots.forEach((dot, i) => {
        dot.onclick = function() {
            showSlide(i);
            resetInterval();
        };
    });

    showSlide(current);
    startInterval();
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (contactForm.checkValidity()) {
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = 'Sending...';
            
            setTimeout(() => {
                contactForm.reset();
                formSuccess.classList.remove('d-none');
                submitButton.disabled = false;
                submitButton.innerHTML = 'Send Message';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.add('d-none');
                }, 5000);
            }, 1500);
        }
        
        contactForm.classList.add('was-validated');
    });
}

// Update Copyright Year
const yearEl = document.getElementById('currentYear');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}