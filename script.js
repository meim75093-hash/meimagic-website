document.addEventListener('DOMContentLoaded', function() {
    const mouseGlow = document.getElementById('mouse-glow');
    let mouseTicking = false;
    
    document.addEventListener('mousemove', function(e) {
        if (!mouseTicking) {
            window.requestAnimationFrame(function() {
                mouseGlow.style.left = e.clientX + 'px';
                mouseGlow.style.top = e.clientY + 'px';
                mouseTicking = false;
            });
            mouseTicking = true;
        }
    });
    
    const langToggle = document.getElementById('langToggle');
    const currentLang = document.getElementById('currentLang');
    let isEnglish = true;
    
    langToggle.addEventListener('click', function() {
        isEnglish = !isEnglish;
        currentLang.textContent = isEnglish ? '🇺🇸 EN' : '🇨🇳 中文';
        
        document.querySelectorAll('[data-en], [data-zh]').forEach(el => {
            el.textContent = isEnglish ? el.getAttribute('data-en') : el.getAttribute('data-zh');
            if (el.tagName === 'TITLE') {
                document.title = isEnglish ? el.getAttribute('data-en') : el.getAttribute('data-zh');
            }
        });
    });
    
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(number => {
            const target = parseInt(number.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                number.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    function setupScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        let scrollTicking = false;
        
        function checkReveal() {
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < window.innerHeight * 0.85 && elementTop > 0) {
                    element.classList.add('active');
                }
            });
            scrollTicking = false;
        }
        
        checkReveal();
        
        window.addEventListener('scroll', function() {
            if (!scrollTicking) {
                window.requestAnimationFrame(checkReveal);
                scrollTicking = true;
            }
        });
    }
    
    function setupFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                faqItem.classList.toggle('active');
                
                document.querySelectorAll('.faq-item.active').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });
            });
        });
    }
    
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particleCount = 50;
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = `${Math.random() * 10 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = `rgba(99, 102, 241, ${Math.random() * 0.2})`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            fragment.appendChild(particle);
        }
        
        particlesContainer.appendChild(fragment);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% { transform: translateY(0) translateX(0); }
                25% { transform: translateY(-20px) translateX(10px); }
                50% { transform: translateY(0) translateX(20px); }
                75% { transform: translateY(20px) translateX(10px); }
                100% { transform: translateY(0) translateX(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    setupScrollReveal();
    setupFAQ();
    setupSmoothScroll();
    createParticles();
    setTimeout(animateNumbers, 500);
    
    const navbar = document.querySelector('.navbar');
    let navTicking = false;
    
    window.addEventListener('scroll', function() {
        if (!navTicking) {
            window.requestAnimationFrame(function() {
                if (window.scrollY > 50) {
                    navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.boxShadow = 'none';
                }
                navTicking = false;
            });
            navTicking = true;
        }
    });
});
