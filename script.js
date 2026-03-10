/**
 * MeiMagic Website - Interactive JavaScript
 * Modern dark theme with animations
 */

// ========================================
// Configuration
// ========================================
const CONFIG = {
    lang: {
        en: '🇺🇸 EN',
        zh: '🇨🇳 中文'
    },
    defaultLang: 'en',
    animationDuration: 800,
    scrollThreshold: 50
};

// ========================================
// Initialize on DOM Load
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initParticles();
    initMouseGlow();
    initLanguageSwitcher();
    initScrollAnimations();
    initCounterAnimation();
    initFAQ();
    initNavbar();
    initMarquee();
    loadSavedLanguage();
});

// ========================================
// Mobile Menu Toggle
// ========================================
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }
}

// ========================================
// Particle Animation
// ========================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 4 + 2;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;
        
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// ========================================
// Mouse Follow Glow Effect
// ========================================
function initMouseGlow() {
    const mouseGlow = document.getElementById('mouse-glow');
    if (!mouseGlow) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateGlow() {
        // Smooth follow
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        mouseGlow.style.left = `${glowX}px`;
        mouseGlow.style.top = `${glowY}px`;
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
}

// ========================================
// Language Switcher
// ========================================
function initLanguageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    const currentLangSpan = document.getElementById('currentLang');
    
    if (!langToggle || !currentLangSpan) return;
    
    // Create dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.id = 'langDropdown';
    
    Object.entries(CONFIG.lang).forEach(([code, label]) => {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.dataset.lang = code;
        btn.addEventListener('click', () => {
            setLanguage(code);
            dropdown.classList.remove('show');
        });
        dropdown.appendChild(btn);
    });
    
    // Wrap toggle in container
    const wrapper = document.createElement('div');
    wrapper.className = 'lang-switcher';
    langToggle.parentNode.insertBefore(wrapper, langToggle);
    wrapper.appendChild(langToggle);
    wrapper.appendChild(dropdown);
    
    // Toggle dropdown
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    
    // Close on outside click
    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });
}

function setLanguage(lang) {
    localStorage.setItem('meimagic_lang', lang);
    
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan) {
        currentLangSpan.textContent = CONFIG.lang[lang];
    }
    
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
        element.textContent = lang === 'zh' ? element.getAttribute('data-zh') : element.getAttribute('data-en');
    });
    
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

function loadSavedLanguage() {
    const savedLang = localStorage.getItem('meimagic_lang') || CONFIG.defaultLang;
    setLanguage(savedLang);
}

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        if (window.scrollY > CONFIG.scrollThreshold) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ========================================
// Counter Animation
// ========================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// FAQ Accordion
// ========================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// ========================================
// Navbar Mobile Menu
// ========================================
function initNavbar() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileBtn || !navLinks) return;
    
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });
    
    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.classList.remove('active');
        });
    });
}

// ========================================
// Testimonials Marquee
// ========================================
function initMarquee() {
    const marqueeContent = document.querySelector('.marquee-content');
    if (!marqueeContent) return;
    
    // Clone content for seamless loop
    const clone = marqueeContent.cloneNode(true);
    marqueeContent.parentNode.appendChild(clone);
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Product Card Hover Effects
// ========================================
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ========================================
// Newsletter Form
// ========================================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('.form-input').value;
        
        // Show success message
        const btn = newsletterForm.querySelector('.btn');
        const originalText = btn.textContent;
        btn.textContent = '✓ Subscribed!';
        btn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            newsletterForm.reset();
        }, 3000);
    });
}

// ========================================
// Performance Optimization
// ========================================

// Lazy load images (if any)
if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img').forEach(img => {
        img.loading = 'lazy';
    });
}

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

// ========================================
// Console Branding
// ========================================
console.log('%c🦎 MeiMagic Website', 'font-size: 24px; font-weight: 800; background: linear-gradient(135deg, #6B4EFF 0%, #FF6B9D 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cModern Dark Theme with Animations', 'font-size: 14px; color: #A0A0A0;');
console.log('%cVisit: https://meimagic.gumroad.com', 'font-size: 14px; color: #6B4EFF;');
