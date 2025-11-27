// ===========================
// Animated Particle Background
// ===========================
if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
        color: {
            value: ['#a855f7', '#ec4899', '#8b5cf6']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#a855f7',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
    });
}

// ===========================
// Page Setup - Remove scroll-based nav highlighting for multi-page
// ===========================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// Mobile Menu Toggle
// ===========================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Active Navigation Removed for Multi-Page Setup
// Each page now has its own active state set in HTML
// ===========================

// ===========================
// Smooth Scroll for Same-Page Anchors (if any)
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Statistics Counter Animation
// ===========================
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ===========================
// Testimonials Carousel
// ===========================
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.testimonial-dots');

let currentTestimonial = 0;
const totalTestimonials = testimonialCards.length;

// Create dots
for (let i = 0; i < totalTestimonials; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateTestimonial() {
    testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    updateTestimonial();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonial();
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// Auto-play testimonials
let testimonialInterval = setInterval(nextTestimonial, 5000);

// Pause auto-play on hover
const testimonialSlider = document.querySelector('.testimonials-slider');
testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

testimonialSlider.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

// ===========================
// Tech Stack Icon Animations
// ===========================
const techIcons = document.querySelectorAll('.tech-icon-item');

techIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.1}s`;
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .about-text, .contact-item, .cert-item, .stat-item, .tech-category-section, .github-stat-card, .profile-badge');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

// ===========================
// Skills Progress Bar Animation
// ===========================
const skillBars = document.querySelectorAll('.skill-progress');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const progress = progressBar.getAttribute('data-progress');
            
            setTimeout(() => {
                progressBar.style.width = progress + '%';
            }, 200);
            
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillsObserver.observe(bar);
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showFormStatus('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormStatus('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission (replace with actual API call)
    try {
        // Simulate API delay
        await simulateFormSubmission(formData);
        
        showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    } catch (error) {
        showFormStatus('Oops! Something went wrong. Please try again later.', 'error');
    }
});

function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        // Log form data to console (for demonstration)
        console.log('Form submitted with data:', data);
        
        // Simulate network delay
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';

    // Hide status message after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

// ===========================
// Project Card Hover Effect Enhancement
// ===========================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// Typing Effect for Hero Section (Optional)
// ===========================
const heroTitle = document.querySelector('.hero-title');
const titleText = heroTitle.textContent;
let index = 0;

function typeWriter() {
    if (index < titleText.length) {
        heroTitle.textContent = titleText.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Uncomment to enable typing effect
// heroTitle.textContent = '';
// typeWriter();

// ===========================
// Parallax Effect for Hero Section
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content, .hero-image');
    
    parallaxElements.forEach((element, index) => {
        const speed = index === 0 ? 0.5 : 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===========================
// Dynamic Year in Footer
// ===========================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.textContent = `© ${currentYear} Swathi S. All rights reserved.`;
}

// ===========================
// Lazy Loading for Project Images (if using real images)
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===========================
// Add Ripple Effect to Buttons
// ===========================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===========================
// Cursor Trail Effect (Optional - for desktop)
// ===========================
const createCursorTrail = () => {
    if (window.innerWidth < 768) return; // Disable on mobile

    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 500);
    });
};

// Add cursor trail CSS
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    .cursor-trail {
        position: absolute;
        width: 5px;
        height: 5px;
        background: var(--accent-color);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.6;
        animation: trail-fade 0.5s ease-out forwards;
        z-index: 9999;
    }
    @keyframes trail-fade {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);

// Uncomment to enable cursor trail
// createCursorTrail();

// ===========================
// GitHub Stats Update Note
// ===========================
// Note: Replace 'swathis' in the GitHub URLs with your actual GitHub username
// The stats will automatically update based on your GitHub activity
// You can customize the theme colors by modifying the URL parameters

// For GitHub stats, update these URLs in index.html:
// - Replace 'username=swathis' with 'username=YOUR_GITHUB_USERNAME'
// - Update coding profile links (LeetCode, HackerRank, etc.) with your actual profile URLs

// ===========================
// Keyboard Navigation for Testimonials
// ===========================
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevTestimonial();
    } else if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
});

// ===========================
// Touch/Swipe Support for Testimonials
// ===========================
let touchStartX = 0;
let touchEndX = 0;

testimonialSlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

testimonialSlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextTestimonial();
    }
    if (touchEndX > touchStartX + 50) {
        prevTestimonial();
    }
}

// ===========================
// Stats Counter Animation on Multiple Views
// ===========================
const resetStatsOnScroll = () => {
    const statsSection = document.querySelector('.statistics');
    if (!statsSection) return;

    const statsRect = statsSection.getBoundingClientRect();
    const isVisible = statsRect.top < window.innerHeight && statsRect.bottom >= 0;

    if (!isVisible) {
        statNumbers.forEach(stat => {
            stat.textContent = '0';
        });
    }
};

// Optional: Uncomment to reset stats when scrolling away
// window.addEventListener('scroll', debounce(resetStatsOnScroll, 200));

// ===========================
// Console Message
// ===========================
console.log('%c👋 Hi there! Welcome to my portfolio!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cLooking for something? Feel free to explore the code!', 'color: #b8c1ec; font-size: 14px;');
console.log('%cInterested in working together? Let\'s connect!', 'color: #7b2ff7; font-size: 14px;');
console.log('%c📊 Don\'t forget to update GitHub username in the stats section!', 'color: #00d9ff; font-size: 14px; font-weight: bold;');

// ===========================
// Performance Optimization
// ===========================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event handlers
const debouncedScrollHandler = debounce(() => {
    highlightNavLink();
}, 50);

window.addEventListener('scroll', debouncedScrollHandler);

// ===========================
// Preload Critical Resources
// ===========================
window.addEventListener('load', () => {
    // Remove loading class if you have one
    document.body.classList.add('loaded');
    
    // Initialize AOS or other animation libraries here if needed
    console.log('Page fully loaded and ready!');
});

// ===========================
// Handle External Links
// ===========================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.rel = 'noopener noreferrer';
});

// ===========================
// Keyboard Navigation Enhancement
// ===========================
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===========================
// Animated Moving Particles Background
// ===========================
function createAnimatedBackground() {
    const container = document.createElement('div');
    container.className = 'bubbles-container';
    
    // Create moving particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'bubble';
        
        // Random starting position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        particle.style.left = startX + '%';
        particle.style.top = startY + '%';
        
        // Random movement direction
        const moveX = (Math.random() - 0.5) * 1000;
        const moveY = (Math.random() - 0.5) * 1000;
        particle.style.setProperty('--tx', moveX + 'px');
        particle.style.setProperty('--ty', moveY + 'px');
        
        // Random animation duration and delay
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);
    }
    
    // Create connection lines
    const shapes = ['square', 'circle'];
    for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.className = `geometric-shape shape-${shapes[i % shapes.length]}`;
        line.style.top = Math.random() * 100 + '%';
        line.style.left = '-150px';
        line.style.setProperty('--angle', (Math.random() * 60 - 30) + 'deg');
        line.style.animationDuration = (Math.random() * 20 + 15) + 's';
        line.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(line);
    }
    
    document.body.insertBefore(container, document.body.firstChild);
}

// ===========================
// Circular Skills Progress Animation
// ===========================
const circularProgressBars = document.querySelectorAll('.circular-progress');

const animateCircularProgress = (progressElement) => {
    const percent = parseInt(progressElement.getAttribute('data-percent'));
    const circularBar = progressElement.querySelector('.circular-bar');
    const percentValue = progressElement.querySelector('.percent-value');
    
    // Circle circumference: 2 * π * r, where r = 72
    const circumference = 2 * Math.PI * 72;
    const offset = circumference - (circumference * percent / 100);
    
    // Animate the progress
    setTimeout(() => {
        circularBar.style.strokeDashoffset = offset;
    }, 200);
    
    // Animate the percentage counter
    let currentPercent = 0;
    const duration = 1500;
    const increment = percent / (duration / 16);
    
    const updatePercent = () => {
        currentPercent += increment;
        if (currentPercent < percent) {
            percentValue.textContent = Math.floor(currentPercent) + '%';
            requestAnimationFrame(updatePercent);
        } else {
            percentValue.textContent = percent + '%';
        }
    };
    
    updatePercent();
};

const circularProgressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCircularProgress(entry.target);
            circularProgressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

circularProgressBars.forEach(progress => {
    circularProgressObserver.observe(progress);
});

// ===========================
// Skills Carousel Navigation - Frontend & Backend
// ===========================
function initializeSkillCarousel(trackId, prevBtnId, nextBtnId) {
    const skillsTrack = document.getElementById(trackId);
    const skillPrevBtn = document.getElementById(prevBtnId);
    const skillNextBtn = document.getElementById(nextBtnId);

    if (skillsTrack && skillPrevBtn && skillNextBtn) {
        const skillItems = skillsTrack.querySelectorAll('.skill-circular-item');
        const itemWidth = 200; // width of each item
        const gap = 64; // 4rem = 64px
        const itemTotalWidth = itemWidth + gap;
        
        let currentSkillIndex = 0;
        const maxIndex = Math.max(0, skillItems.length - 3); // Show 3 items at a time
        
        const updateSkillCarousel = () => {
            const translateX = -(currentSkillIndex * itemTotalWidth);
            skillsTrack.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            skillPrevBtn.disabled = currentSkillIndex === 0;
            skillNextBtn.disabled = currentSkillIndex >= maxIndex;
            
            // Update button opacity
            skillPrevBtn.style.opacity = currentSkillIndex === 0 ? '0.3' : '1';
            skillNextBtn.style.opacity = currentSkillIndex >= maxIndex ? '0.3' : '1';
        };
        
        skillNextBtn.addEventListener('click', () => {
            if (currentSkillIndex < maxIndex) {
                currentSkillIndex++;
                updateSkillCarousel();
            }
        });
        
        skillPrevBtn.addEventListener('click', () => {
            if (currentSkillIndex > 0) {
                currentSkillIndex--;
                updateSkillCarousel();
            }
        });
        
        // Initialize carousel
        updateSkillCarousel();
        
        // Touch/Swipe support for skills carousel
        let skillsTouchStartX = 0;
        let skillsTouchEndX = 0;
        
        skillsTrack.addEventListener('touchstart', (e) => {
            skillsTouchStartX = e.changedTouches[0].screenX;
        });
        
        skillsTrack.addEventListener('touchend', (e) => {
            skillsTouchEndX = e.changedTouches[0].screenX;
            handleSkillsSwipe();
        });
        
        function handleSkillsSwipe() {
            if (skillsTouchEndX < skillsTouchStartX - 50) {
                // Swipe left - next
                if (currentSkillIndex < maxIndex) {
                    currentSkillIndex++;
                    updateSkillCarousel();
                }
            }
            if (skillsTouchEndX > skillsTouchStartX + 50) {
                // Swipe right - prev
                if (currentSkillIndex > 0) {
                    currentSkillIndex--;
                    updateSkillCarousel();
                }
            }
        }
    }
}

// Initialize both carousels
if (document.querySelector('.skills.page-section')) {
    initializeSkillCarousel('hardTrack', 'hardPrev', 'hardNext');
    initializeSkillCarousel('softTrack', 'softPrev', 'softNext');
}

// ===========================
// Modern Skills Section - Tab Switching and Animations
// ===========================
function initializeModernSkills() {
    const skillsTabs = document.querySelectorAll('.skills-tab');
    const tabContents = document.querySelectorAll('.skills-tab-content');
    
    console.log('Skills tabs found:', skillsTabs.length);
    console.log('Tab contents found:', tabContents.length);
    
    if (skillsTabs.length === 0) return;
    
    // Tab switching
    skillsTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = tab.getAttribute('data-tab');
            console.log('Tab clicked:', targetTab);
            
            // Remove active class from all tabs and contents
            skillsTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('Activated tab:', targetTab);
            }
            
            // Animate progress bars in the newly visible tab
            setTimeout(() => {
                animateProgressBars(targetTab);
            }, 100);
        });
    });
    
    // Animate progress bars on page load for active tab
    setTimeout(() => {
        console.log('Initializing progress bars...');
        animateProgressBars('technical');
    }, 500);
    
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeTab = document.querySelector('.skills-tab-content.active');
                if (activeTab) {
                    console.log('Section in view, animating:', activeTab.id);
                    animateProgressBars(activeTab.id);
                }
            }
        });
    }, { threshold: 0.3 });
    
    const skillsSection = document.querySelector('.skills.page-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

function animateProgressBars(tabId) {
    const tabContent = document.getElementById(tabId);
    if (!tabContent) {
        console.log('Tab content not found:', tabId);
        return;
    }
    
    const progressBars = tabContent.querySelectorAll('.skill-progress-bar');
    console.log('Progress bars found:', progressBars.length);
    
    progressBars.forEach((bar, index) => {
        // Reset first
        bar.style.width = '0%';
        
        setTimeout(() => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
            console.log(`Animating bar ${index} to ${progress}%`);
        }, index * 100);
    });
}

// ===========================
// Initialize Everything
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized successfully! ✨');
    
    // Create animated background
    createAnimatedBackground();
    
    // Initialize modern skills section with a delay to ensure DOM is ready
    setTimeout(() => {
        initializeModernSkills();
    }, 100);
    
    // Page-specific initialization
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    console.log(`Current page: ${currentPage}`);
});

// Also initialize on window load as backup
window.addEventListener('load', () => {
    console.log('Window fully loaded');
    // Reinitialize if skills section exists and hasn't been initialized
    const skillsSection = document.querySelector('.skills.page-section');
    if (skillsSection && !skillsSection.dataset.initialized) {
        skillsSection.dataset.initialized = 'true';
        setTimeout(() => {
            initializeModernSkills();
        }, 200);
    }
});

