// Happy Text Faces - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Create floating pill shapes
    createFloatingPills();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add interactive form enhancements
    enhanceContactForm();
    
    // Add kaomoji hover effects
    addKaomojiEffects();
    
    // Add navigation enhancements
    enhanceNavigation();
    
    // Add heartbeat line animations
    addHeartbeatLines();
    
    // Add drop dividers
    addDropDividers();
});

// Create floating pill shapes
function createFloatingPills() {
    const pillsContainer = document.createElement('div');
    pillsContainer.className = 'floating-pills';
    
    for (let i = 0; i < 4; i++) {
        const pill = document.createElement('div');
        pill.className = 'pill';
        pillsContainer.appendChild(pill);
    }
    
    document.body.appendChild(pillsContainer);
}

// Initialize scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements that should animate on scroll
    const animateElements = document.querySelectorAll('.service-card, .blog-post, .value-item, .team-member, .kaomoji-item');
    animateElements.forEach(el => {
        el.classList.add('fade-in-on-scroll');
        observer.observe(el);
    });
}

// Enhance contact form with interactive features
function enhanceContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Add focus/blur effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
        
        // Add typing animation for kaomoji field
        if (input.id === 'favorite-kaomoji') {
            input.addEventListener('input', function() {
                if (this.value.length > 0) {
                    this.style.animation = 'bounce 0.5s ease-in-out';
                    setTimeout(() => {
                        this.style.animation = '';
                    }, 500);
                }
            });
        }
    });
    
    // Form submission with animation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = '送信中... (´∀｀)';
        submitButton.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            submitButton.textContent = '送信完了！ ( ´ ▽ ` )ﾉ';
            submitButton.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.transform = '';
                submitButton.style.background = '';
            }, 2000);
        }, 1500);
    });
}

// Add special effects to kaomoji elements
function addKaomojiEffects() {
    const kaomojiElements = document.querySelectorAll('.service-icon, .member-avatar, .kaomoji-display, .kaomoji, .value-icon, .info-icon');
    
    kaomojiElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // Add click effect
        element.addEventListener('click', function() {
            this.style.animation = 'bounce 0.6s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
}

// Enhance navigation with smooth scrolling and active states
function enhanceNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = '';
            }
        });
    });
    
    // Add smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add heartbeat line animations to sections
function addHeartbeatLines() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        if (index % 2 === 0) { // Add to every other section
            const heartbeatLine = document.createElement('div');
            heartbeatLine.className = 'heartbeat-line';
            section.appendChild(heartbeatLine);
        }
    });
}

// Add drop-shaped dividers
function addDropDividers() {
    const articles = document.querySelectorAll('article');
    
    articles.forEach(article => {
        const h3Elements = article.querySelectorAll('h3');
        h3Elements.forEach((h3, index) => {
            if (index > 0) { // Don't add to the first h3
                const dropDivider = document.createElement('div');
                dropDivider.className = 'drop-divider';
                h3.parentNode.insertBefore(dropDivider, h3);
            }
        });
    });
}

// Add particle effect on click
function createParticleEffect(x, y) {
    const colors = ['#FFE4E6', '#E8E4FF', '#E4FFF4', '#FFF0E4', '#E4F4FF'];
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 6;
        const velocity = 50 + Math.random() * 50;
        
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Add click particle effects to interactive elements
document.addEventListener('click', function(e) {
    const interactiveElements = ['button', 'a', '.service-card', '.kaomoji-item', '.blog-post'];
    
    if (interactiveElements.some(selector => e.target.matches(selector) || e.target.closest(selector))) {
        createParticleEffect(e.clientX, e.clientY);
    }
});

// Add typing effect for dynamic text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add random kaomoji rotation
function rotateRandomKaomoji() {
    const kaomojiList = [
        '( ´∀｀)', '(´▽｀)', '( ´ ▽ ` )', '(=^・ω・^=)', 
        'Uo･ｪ･oU', '(つД｀)ノ', '( ´ー｀)ノ', '(´∀｀)♪'
    ];
    
    const dailyKaomoji = document.querySelector('.kaomoji-display');
    if (dailyKaomoji) {
        setInterval(() => {
            const randomKaomoji = kaomojiList[Math.floor(Math.random() * kaomojiList.length)];
            dailyKaomoji.textContent = randomKaomoji;
        }, 5000);
    }
}

// Initialize random kaomoji rotation
rotateRandomKaomoji();

// Add CSS for enhanced form focus states
const style = document.createElement('style');
style.textContent = `
    .form-group.focused label {
        color: #9B59B6;
        transform: translateY(-2px);
        transition: all 0.3s ease;
    }
    
    .fade-in-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .fade-in-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .service-card:nth-child(even) {
        animation-delay: 0.2s;
    }
    
    .service-card:nth-child(3n) {
        animation-delay: 0.4s;
    }
`;
document.head.appendChild(style);

// Add performance optimization for animations
function optimizeAnimations() {
    // Reduce animations on low-performance devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
        
        const reducedMotionStyle = document.createElement('style');
        reducedMotionStyle.textContent = `
            .reduced-motion * {
                animation-duration: 0.5s !important;
                transition-duration: 0.2s !important;
            }
        `;
        document.head.appendChild(reducedMotionStyle);
    }
}

optimizeAnimations();

// Add accessibility enhancements
function enhanceAccessibility() {
    // Add keyboard navigation for interactive elements
    const interactiveElements = document.querySelectorAll('.service-card, .kaomoji-item, .blog-post');
    
    interactiveElements.forEach(element => {
        element.setAttribute('tabindex', '0');
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add focus indicators
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        *:focus {
            outline: 2px solid #9B59B6;
            outline-offset: 2px;
        }
        
        .service-card:focus,
        .kaomoji-item:focus,
        .blog-post:focus {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(focusStyle);
}

enhanceAccessibility();

