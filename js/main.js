// Comparison Slider
function initComparisonSliders() {
    const sliders = document.querySelectorAll('.comparison-slider');
    
    sliders.forEach(slider => {
        const imageBefore = slider.querySelector('.comparison-image-before');
        const imageAfter = slider.querySelector('.comparison-image-after');
        const handle = slider.querySelector('.comparison-handle');
        const handleCircle = slider.querySelector('.handle-circle');
        
        const beforeUrl = slider.dataset.before;
        const afterUrl = slider.dataset.after;
        
        if (beforeUrl) {
            imageBefore.style.backgroundImage = `url(${beforeUrl})`;
        }
        if (afterUrl) {
            imageAfter.style.backgroundImage = `url(${afterUrl})`;
        }
        
        let isDragging = false;
        
        function updateSlider(x) {
            const rect = slider.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;
            position = Math.max(0, Math.min(100, position));
            
            handle.style.left = `${position}%`;
            imageAfter.style.clipPath = `inset(0 0 0 ${position}%)`;
        }
        
        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            updateSlider(e.clientX);
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            updateSlider(e.clientX);
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            updateSlider(e.touches[0].clientX);
        });
        
        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            updateSlider(e.touches[0].clientX);
        });
        
        document.addEventListener('touchend', () => {
            isDragging = false;
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
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
    
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('js-loaded');
    initComparisonSliders();
    initMobileMenu();
    initScrollReveal();
    initHeaderScroll();
});
