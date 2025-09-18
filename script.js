
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Flavor data
const flavors = {
    caramel: {
        name: 'Caramel Crave',
        subtitle: 'Caramel Flavour',
        image: 'imgs/caramel.png',
        class: ''
    },
    lime: {
        name: 'Sublime Lime',
        subtitle: 'Lime Flavour',
        image: 'imgs/lime.png',
        class: 'lime'
    },
    coffee: {
        name: 'Creamy Coffee',
        subtitle: 'Coffee Flavour',
        image: 'imgs/coffe.png',
        class: 'coffee'
    }
};

let currentFlavor = 'caramel';
let currentSize = '500ml';

// DOM elements
const heroSection = document.getElementById('heroSection');
const productImage = document.getElementById('productImage');
const flavorName = document.getElementById('flavorName');
const selectedSize = document.getElementById('selectedSize');
const flavorSubtitle = document.querySelector('.flavor-subtitle');

// Initialize animations with enhanced hero entrance
function initAnimations() {
    // Hero entrance animations with 2-second delay
    const heroTl = gsap.timeline({ delay: 2 });
    
    // Background elements animation (bubbles)
    heroTl.fromTo('.bubble', {
        scale: 0,
        opacity: 0
    }, {
        scale: 1,
        opacity: 0.6,
        duration: 1.2,
        stagger: {
            each: 0.15,
            from: "random"
        },
        ease: "back.out(1.7)"
    }, 0);
    
    // Main product image animation (more dramatic entrance)
    heroTl.fromTo('.product-image', {
        opacity: 0,
        y: 200,
        rotation: -5,
        scale: 0.8
    }, {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)"
    }, 0.2);
    
    // Hero title animation (more dynamic)
    heroTl.fromTo('.hero-title', {
        opacity: 0,
        y: -80,
        skewX: 15
    }, {
        opacity: 1,
        y: 0,
        skewX: 0,
        duration: 1.2,
        ease: "power3.out"
    }, 0.3);
    
    // Size text animation
    heroTl.fromTo('.size-text', {
        opacity: 0,
        y: -40,
        scale: 0.9
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power2.out"
    }, 0.5);
    
    // Description animation
    heroTl.fromTo('.description', {
        opacity: 0,
        y: 30,
        scale: 0.95
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power2.out"
    }, 0.6);
    
    // Flavor info animation
    heroTl.fromTo('.flavor-info', {
        opacity: 0,
        x: -30
    }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
    }, 0.7);
    
    // Size selector animation
    heroTl.fromTo('.size-selector', {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, 0.8);
    
    // Purchase section animation
    heroTl.fromTo('.purchase-section', {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, 0.9);
    
    // Product features animation (staggered)
    heroTl.fromTo('.product-features div', {
        opacity: 0,
        y: 20,
        scale: 0.9
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.7)"
    }, 1.0);
    
    // Floating bubble animations (continuous)
    gsap.to('.bubble', {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true
    });
    
    // About section animations (texts from top, stats from bottom)
    gsap.fromTo('.about-content', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
        }
    });

    gsap.fromTo('.feature-item', {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.features-container',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
        }
    });

    gsap.fromTo('.stat-card', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
        }
    });

    // Services section animations (icons from top, texts from left)
    gsap.fromTo('.services-header', {
        opacity: 0,
        y: -50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#services',
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
        }
    });

    gsap.fromTo('.service-icon', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
        }
    });

    gsap.fromTo(['.service-title', '.service-description'], {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
        }
    });

    // Team section animations (images from bottom, texts from left)
    gsap.fromTo('.team-header', {
        opacity: 0,
        y: -50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#team',
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
        }
    });

    gsap.fromTo('.team-avatar', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
        }
    });

    gsap.fromTo(['.team-name', '.team-role', '.team-bio'], {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
        }
    });

    // Contact section animations (form from left, info from right)
    gsap.fromTo('.contact-header', {
        opacity: 0,
        y: -50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
        }
    });

    gsap.fromTo('.form-element', {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
        }
    });

    gsap.fromTo('.contact-item', {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
        }
    });
}

// Enhanced flavor switching with more fluid transitions
function switchFlavor(flavor) {
    if (flavor === currentFlavor) return;

    const flavorData = flavors[flavor];
    currentFlavor = flavor;

    // Create a GSAP timeline for the transition
    const tl = gsap.timeline();

    // Fade out all hero content with more dynamic animation
    tl.to(['.hero-title', '.size-text', '.description', '.size-selector', '.purchase-section', '.flavor-info', '.product-features div'], {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power2.in",
        stagger: 0.05
    })
    .to('.product-image', {
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
            // Update hero section class
            heroSection.className = `hero-section ${flavorData.class}`;
            // Update content
            productImage.src = flavorData.image;
            productImage.alt = `Primo ${flavorData.name}`;
            flavorName.textContent = flavorData.name;
            flavorSubtitle.textContent = flavorData.subtitle;
        }
    }, "-=0.3")
    // Fade in new content with enhanced animations
    .fromTo('.product-image', {
        opacity: 0,
        y: 150,
        scale: 0.8,
        rotation: -5
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
    }, "+=0.1")
    .fromTo('.hero-title', {
        opacity: 0,
        y: -50,
        skewX: 10
    }, {
        opacity: 1,
        y: 0,
        skewX: 0,
        duration: 0.9,
        ease: "power3.out"
    }, "-=0.8")
    .fromTo('.size-text', {
        opacity: 0,
        y: -30
    }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.6")
    .fromTo('.description', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.5")
    .fromTo('.size-selector', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.4")
    .fromTo('.purchase-section', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.3")
    .fromTo('.flavor-info', {
        opacity: 0,
        x: -20
    }, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.2")
    .fromTo('.product-features div', {
        opacity: 0,
        y: 15,
        scale: 0.95
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.7)"
    }, "-=0.1");

    // Update active flavor button
    document.querySelectorAll('.flavor-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-flavor="${flavor}"]`).classList.add('active');
}

// Size selection
function selectSize(size) {
    if (size === currentSize) return;

    currentSize = size;
    selectedSize.textContent = size;

    // Update active size button
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-size="${size}"]`).classList.add('active');

    // Animate size change
    gsap.fromTo(selectedSize, {
        scale: 1.2,
        color: 'white'
    }, {
        scale: 1,
        color: 'var(--hero-text-muted)',
        duration: 0.3,
        ease: "power2.out"
    });
}

// Smooth scrolling for navigation
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Animate button
    gsap.to('.submit-btn', {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
        onComplete: () => {
            // Show success animation
            gsap.to('#formSuccess', {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                gsap.to('#formSuccess', {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }, 3000);
        }
    });
}

// Sticky nav on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navigation');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();

    // Flavor buttons
    document.querySelectorAll('.flavor-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const flavor = e.target.getAttribute('data-flavor');
            switchFlavor(flavor);
        });
    });

    // Size buttons
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const size = e.target.getAttribute('data-size');
            selectSize(size);
        });
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            smoothScrollTo(target);
        });
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
});
