// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 鼠标跟随光晕效果
    const mouseGlow = document.getElementById('mouse-glow');
    
    document.addEventListener('mousemove', function(e) {
        mouseGlow.style.left = e.clientX + 'px';
        mouseGlow.style.top = e.clientY + 'px';
    });
    
    // 2. 语言切换功能
    const langToggle = document.getElementById('langToggle');
    const currentLang = document.getElementById('currentLang');
    let isEnglish = true;
    
    langToggle.addEventListener('click', function() {
        isEnglish = !isEnglish;
        
        // 更新语言显示
        currentLang.textContent = isEnglish ? '🇺🇸 EN' : '🇨🇳 中文';
        
        // 更新所有带语言属性的元素
        document.querySelectorAll('[data-en], [data-zh]').forEach(el => {
            el.textContent = isEnglish ? el.getAttribute('data-en') : el.getAttribute('data-zh');
            
            // 特殊处理 title 标签
            if (el.tagName === 'TITLE') {
                document.title = isEnglish ? el.getAttribute('data-en') : el.getAttribute('data-zh');
            }
        });
    });
    
    // 3. 数字计数动画
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(number => {
            const target = parseInt(number.getAttribute('data-target'));
            const duration = 2000; // 动画时长（毫秒）
            const step = target / (duration / 16); // 每 16ms 的步长
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
    
    // 4. 滚动显示动画
    function setupScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        
        function checkReveal() {
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                
                // 元素进入视口时显示
                if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
                    element.classList.add('active');
                }
            });
        }
        
        // 初始检查
        checkReveal();
        
        // 滚动时检查
        window.addEventListener('scroll', checkReveal);
    }
    
    // 5. FAQ 折叠展开功能
    function setupFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                
                // 切换激活状态
                faqItem.classList.toggle('active');
                
                // 关闭其他激活的 FAQ 项
                document.querySelectorAll('.faq-item.active').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });
            });
        });
    }
    
    // 6. 平滑滚动
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // 减去导航栏高度
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // 7. 粒子背景效果（简化版）
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            
            // 随机样式
            particle.style.position = 'absolute';
            particle.style.width = `${Math.random() * 10 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = `rgba(99, 102, 241, ${Math.random() * 0.2})`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }
        
        // 添加浮动动画
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0) translateX(0);
                }
                25% {
                    transform: translateY(-20px) translateX(10px);
                }
                50% {
                    transform: translateY(0) translateX(20px);
                }
                75% {
                    transform: translateY(20px) translateX(10px);
                }
                100% {
                    transform: translateY(0) translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // 初始化所有功能
    setupScrollReveal();
    setupFAQ();
    setupSmoothScroll();
    createParticles();
    
    // 数字计数动画延迟执行
    setTimeout(animateNumbers, 500);
    
    // 8. 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});