// Language Switcher Configuration
const LANG_CONFIG = {
  en: '🇺🇸 English',
  zh: '🇨🇳 中文'
};

const DEFAULT_LANG = 'en';

// Initialize language switcher on DOM load
document.addEventListener('DOMContentLoaded', function() {
  initLanguageSwitcher();
  loadSavedLanguage();
  initSmoothScroll();
  initScrollAnimations();
  initProductCards();
});

/**
 * Initialize Language Switcher
 */
function initLanguageSwitcher() {
  // Create language switcher button
  const langSwitcher = document.createElement('div');
  langSwitcher.className = 'lang-switcher';
  langSwitcher.innerHTML = `
    <button id="langToggle" class="lang-toggle" aria-label="Switch Language">
      <span id="currentLang">${LANG_CONFIG[DEFAULT_LANG]}</span>
      <span class="lang-arrow">▼</span>
    </button>
    <div id="langDropdown" class="lang-dropdown">
      <button data-lang="zh">${LANG_CONFIG.zh}</button>
      <button data-lang="en">${LANG_CONFIG.en}</button>
    </div>
  `;
  
  // Add to hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.appendChild(langSwitcher);
  }
  
  // Bind events
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  
  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });
    
    // Click option to switch language
    langDropdown.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        setLanguage(lang);
        langDropdown.classList.remove('show');
      });
    });
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function() {
      langDropdown.classList.remove('show');
    });
  }
}

/**
 * Set Language
 */
function setLanguage(lang) {
  // Save preference
  localStorage.setItem('meimagic_lang', lang);
  
  // Update button display
  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan) {
    currentLangSpan.textContent = LANG_CONFIG[lang];
  }
  
  // Switch all text
  document.querySelectorAll('[data-zh][data-en]').forEach(element => {
    if (lang === 'zh') {
      element.textContent = element.getAttribute('data-zh');
    } else {
      element.textContent = element.getAttribute('data-en');
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  
  console.log('Language switched to:', lang);
}

/**
 * Load Saved Language Preference
 */
function loadSavedLanguage() {
  const savedLang = localStorage.getItem('meimagic_lang') || DEFAULT_LANG;
  setLanguage(savedLang);
}

// Smooth scroll for anchor links
function initSmoothScroll() {
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

// Add scroll animation to hero section
function initScrollAnimations() {
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe product cards
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Observe sections
  document.querySelectorAll('.section-title, .section-subtitle, .about-text, .highlight').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Add hover effect to product cards with JavaScript enhancement
function initProductCards() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });
}

// Console message for developers
console.log('%c🦎 MeiMagic Website', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cBuilt with ❤️ for productivity enthusiasts', 'font-size: 14px; color: #6b7280;');
console.log('%cVisit: https://meimagic.gumroad.com', 'font-size: 14px; color: #6366f1;');
