# Landing Page Presets Agatha Pinheiro - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimalist, elegant landing page to sell photography presets with an interactive before/after slider.

**Architecture:** Static HTML/CSS/JS site with no build tools. Single-page layout with smooth scroll navigation. Interactive slider component using vanilla JS with CSS clip-path.

**Tech Stack:** HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript, Google Fonts (Playfair Display + Inter)

## Global Constraints

- No frameworks or build tools - pure HTML/CSS/JS
- Colors: White `#FFFFFF`, Light gray `#F8F8F8`, Dark gray `#333333`, Medium gray `#666666`, Gold `#C9A96E`, Dark gold `#B8944F`
- Fonts: Playfair Display (headings), Inter (body)
- Responsive: Desktop, Tablet, Mobile
- Host on Vercel/Netlify (static)

---

## File Structure

```
site-agatha/
├── index.html          # Main page structure
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactions (slider, menu, animations)
├── img/                # Placeholder images (user provides real ones)
└── docs/
    ├── superpowers/
    │   ├── specs/
    │   └── plans/
    └── ...
```

---

### Task 1: Project Setup & HTML Structure

**Files:**
- Create: `index.html`
- Create: `css/style.css` (empty initially)
- Create: `js/main.js` (empty initially)

**Interfaces:**
- Produces: Basic HTML5 document with all sections outlined

- [ ] **Step 1: Create project directories**

```bash
mkdir -p css js img
```

- [ ] **Step 2: Create index.html with full structure**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agatha Pinheiro - Presets de Fotografia</title>
    <meta name="description" content="Transforme suas fotos com presets profissionais criados por Agatha Pinheiro">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="header" id="header">
        <div class="container">
            <a href="#" class="logo">Agatha Pinheiro</a>
            <nav class="nav" id="nav">
                <a href="#inicio" class="nav-link">Início</a>
                <a href="#antes-depois" class="nav-link">Antes/Depois</a>
                <a href="#sobre" class="nav-link">Sobre</a>
                <a href="#comprar" class="nav-link nav-cta">Comprar</a>
            </nav>
            <button class="menu-toggle" id="menu-toggle" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="inicio">
        <div class="hero-content">
            <h1 class="hero-title">Transforme suas fotos com um clique</h1>
            <p class="hero-subtitle">Presets profissionais criados por Agatha Pinheiro</p>
            <a href="#comprar" class="btn btn-primary">Ver presets</a>
        </div>
    </section>

    <!-- Antes/Depois Section -->
    <section class="comparison" id="antes-depois">
        <div class="container">
            <h2 class="section-title">Veja a mágica acontecer</h2>
            
            <div class="slider-container">
                <div class="comparison-slider" data-before="img/before-1.jpg" data-after="img/after-1.jpg">
                    <div class="comparison-label comparison-label-before">ANTES</div>
                    <div class="comparison-label comparison-label-after">DEPOIS</div>
                    <div class="comparison-image comparison-image-before"></div>
                    <div class="comparison-image comparison-image-after"></div>
                    <div class="comparison-handle">
                        <div class="handle-line"></div>
                        <div class="handle-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </div>
                        <div class="handle-line"></div>
                    </div>
                </div>
            </div>

            <div class="slider-container">
                <div class="comparison-slider" data-before="img/before-2.jpg" data-after="img/after-2.jpg">
                    <div class="comparison-label comparison-label-before">ANTES</div>
                    <div class="comparison-label comparison-label-after">DEPOIS</div>
                    <div class="comparison-image comparison-image-before"></div>
                    <div class="comparison-image comparison-image-after"></div>
                    <div class="comparison-handle">
                        <div class="handle-line"></div>
                        <div class="handle-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </div>
                        <div class="handle-line"></div>
                    </div>
                </div>
            </div>

            <div class="slider-container">
                <div class="comparison-slider" data-before="img/before-3.jpg" data-after="img/after-3.jpg">
                    <div class="comparison-label comparison-label-before">ANTES</div>
                    <div class="comparison-label comparison-label-after">DEPOIS</div>
                    <div class="comparison-image comparison-image-before"></div>
                    <div class="comparison-image comparison-image-after"></div>
                    <div class="comparison-handle">
                        <div class="handle-line"></div>
                        <div class="handle-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </div>
                        <div class="handle-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Depoimentos Section -->
    <section class="testimonials" id="depoimentos">
        <div class="container">
            <h2 class="section-title">Quem já usa, recomenda</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <img src="img/client-1.jpg" alt="Foto do cliente" class="testimonial-image">
                    <h3 class="testimonial-name">Maria Silva</h3>
                    <p class="testimonial-text">"Os presets da Agatha transformaram completamente minhas fotos. Uso todos os dias!"</p>
                    <div class="testimonial-stars">★★★★★</div>
                </div>
                <div class="testimonial-card">
                    <img src="img/client-2.jpg" alt="Foto do cliente" class="testimonial-image">
                    <h3 class="testimonial-name">Ana Costa</h3>
                    <p class="testimonial-text">"Melhor investimento que fiz para meu Instagram. As fotos ficam incríveis!"</p>
                    <div class="testimonial-stars">★★★★★</div>
                </div>
                <div class="testimonial-card">
                    <img src="img/client-3.jpg" alt="Foto do cliente" class="testimonial-image">
                    <h3 class="testimonial-name">Juliana Santos</h3>
                    <p class="testimonial-text">"Simples e profissional. Exatamente o que eu precisava para minhas fotos."</p>
                    <div class="testimonial-stars">★★★★★</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sobre Section -->
    <section class="about" id="sobre">
        <div class="container">
            <div class="about-content">
                <div class="about-image">
                    <img src="img/agatha.jpg" alt="Agatha Pinheiro">
                </div>
                <div class="about-text">
                    <h2 class="section-title">Sobre Agatha</h2>
                    <p>Agatha Pinheiro é fotógrafa profissional há mais de 5 anos, especializada em retratos e lifestyle. Criou esses presets após anos de experiência editando fotos para clientes e projetos pessoais.</p>
                    <p>Cada preset foi cuidadosamente ajustado para funcionar em diferentes tipos de foto, mantendo um visual co-profissional e elegante.</p>
                    <a href="https://instagram.com/agathapinheiro" target="_blank" class="social-link">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        @agathapinheiro
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Final Section -->
    <section class="cta" id="comprar">
        <div class="container">
            <h2 class="cta-title">Comece a editar hoje</h2>
            <div class="cta-benefits">
                <div class="benefit-item">
                    <span class="benefit-icon">✓</span>
                    <span class="benefit-text">10 presets profissionais</span>
                </div>
                <div class="benefit-item">
                    <span class="benefit-icon">✓</span>
                    <span class="benefit-text">Compatível com Lightroom Mobile e Desktop</span>
                </div>
                <div class="benefit-item">
                    <span class="benefit-icon">✓</span>
                    <span class="benefit-text">Download imediato</span>
                </div>
                <div class="benefit-item">
                    <span class="benefit-icon">✓</span>
                    <span class="benefit-text">Suporte incluso</span>
                </div>
            </div>
            <div class="cta-price">
                <span class="price">R$ 79,90</span>
            </div>
            <a href="#" class="btn btn-primary btn-large">QUERO MEUS PRESETS</a>
            <p class="cta-guarantee">Garantia de 7 dias ou seu dinheiro de volta</p>
            <p class="cta-note">Download imediato após a compra</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 Agatha Pinheiro. Todos os direitos reservados.</p>
            <div class="footer-links">
                <a href="https://instagram.com/agathapinheiro" target="_blank">Instagram</a>
                <a href="mailto:contato@agathapinheiro.com">Contato</a>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Verify file structure**

Run: `ls -la`
Expected: See css/, js/, img/ directories and index.html

- [ ] **Step 4: Commit**

```bash
git init
git add .
git commit -m "feat: initial HTML structure for Agatha's landing page"
```

---

### Task 2: Base Styles & Typography

**Files:**
- Create: `css/style.css`

**Interfaces:**
- Produces: CSS variables, reset, typography, container, buttons

- [ ] **Step 1: Create css/style.css with CSS variables and reset**

```css
/* CSS Variables */
:root {
    --color-white: #FFFFFF;
    --color-light-gray: #F8F8F8;
    --color-dark-gray: #333333;
    --color-medium-gray: #666666;
    --color-gold: #C9A96E;
    --color-gold-dark: #B8944F;
    --font-heading: 'Playfair Display', Georgia, serif;
    --font-body: 'Inter', system-ui, sans-serif;
    --shadow-light: 0 4px 20px rgba(0, 0, 0, 0.08);
    --border-radius: 10px;
    --transition: all 0.3s ease;
}

/* Reset */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    color: var(--color-dark-gray);
    line-height: 1.6;
    background-color: var(--color-white);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Typography */
h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 500;
    line-height: 1.2;
}

h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
}

h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
}

h3 {
    font-size: 1.25rem;
}

p {
    margin-bottom: 1rem;
    color: var(--color-medium-gray);
}

/* Container */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 14px 32px;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    border: none;
}

.btn-primary {
    background-color: var(--color-gold);
    color: var(--color-white);
}

.btn-primary:hover {
    background-color: var(--color-gold-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(201, 169, 110, 0.4);
}

.btn-large {
    padding: 18px 48px;
    font-size: 1.125rem;
}

/* Section Title */
.section-title {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--color-dark-gray);
}
```

- [ ] **Step 2: Open in browser to verify styles load**

Run: Open `index.html` in browser
Expected: Clean typography, gold buttons visible

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add base styles, CSS variables, and typography"
```

---

### Task 3: Header Styles

**Files:**
- Modify: `css/style.css`

**Interfaces:**
- Produces: Fixed header with navigation

- [ ] **Step 1: Add header styles to style.css**

```css
/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: var(--color-white);
    box-shadow: var(--shadow-light);
    transition: var(--transition);
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-dark-gray);
}

.nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-medium-gray);
    transition: var(--transition);
}

.nav-link:hover {
    color: var(--color-gold);
}

.nav-cta {
    background-color: var(--color-gold);
    color: var(--color-white) !important;
    padding: 10px 24px;
    border-radius: var(--border-radius);
}

.nav-cta:hover {
    background-color: var(--color-gold-dark);
}

/* Menu Toggle (Mobile) */
.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.menu-toggle span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--color-dark-gray);
    transition: var(--transition);
}

/* Responsive - Header */
@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }

    .nav {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background-color: var(--color-white);
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        box-shadow: var(--shadow-light);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
    }

    .nav.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    .nav-cta {
        width: 100%;
        text-align: center;
    }
}
```

- [ ] **Step 2: Test header in browser**

Expected: Fixed header, gold CTA button, hamburger menu on mobile

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add header styles with responsive mobile menu"
```

---

### Task 4: Hero Section Styles

**Files:**
- Modify: `css/style.css`

**Interfaces:**
- Produces: Full-screen hero with background image

- [ ] **Step 1: Add hero styles to style.css**

```css
/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                url('../img/hero.jpg') center/cover no-repeat;
    padding: 100px 20px 60px;
}

.hero-content {
    max-width: 800px;
    animation: fadeInUp 1s ease;
}

.hero-title {
    color: var(--color-white);
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
    color: var(--color-white);
    font-size: 1.25rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive - Hero */
@media (max-width: 768px) {
    .hero {
        padding: 80px 20px 40px;
    }

    .hero-subtitle {
        font-size: 1rem;
    }
}
```

- [ ] **Step 2: Test hero section**

Expected: Full-screen hero with overlay, centered text, fade-in animation

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add hero section with background image and animation"
```

---

### Task 5: Comparison Slider Component (HTML + CSS)

**Files:**
- Modify: `css/style.css`

**Interfaces:**
- Produces: Styled slider component ready for JS interaction

- [ ] **Step 1: Add comparison slider styles to style.css**

```css
/* Comparison Section */
.comparison {
    padding: 100px 0;
    background-color: var(--color-light-gray);
}

/* Comparison Slider */
.slider-container {
    max-width: 900px;
    margin: 0 auto 4rem;
}

.comparison-slider {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-light);
    cursor: ew-resize;
    user-select: none;
}

.comparison-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}

.comparison-image-before {
    background-image: var(--before-image);
    z-index: 1;
}

.comparison-image-after {
    background-image: var(--after-image);
    z-index: 2;
    clip-path: inset(0 0 0 50%);
}

.comparison-handle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background-color: var(--color-white);
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.handle-line {
    flex: 1;
    width: 2px;
    background-color: var(--color-white);
}

.handle-circle {
    width: 48px;
    height: 48px;
    background-color: var(--color-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    pointer-events: auto;
    cursor: ew-resize;
}

.handle-circle svg {
    width: 24px;
    height: 24px;
    color: var(--color-dark-gray);
}

/* Comparison Labels */
.comparison-label {
    position: absolute;
    bottom: 20px;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.6);
    color: var(--color-white);
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
}

.comparison-label-before {
    left: 20px;
}

.comparison-label-after {
    right: 20px;
}

/* Responsive - Comparison */
@media (max-width: 768px) {
    .comparison {
        padding: 60px 0;
    }

    .comparison-slider {
        aspect-ratio: 4 / 3;
    }

    .handle-circle {
        width: 40px;
        height: 40px;
    }

    .handle-circle svg {
        width: 20px;
        height: 20px;
    }

    .comparison-label {
        font-size: 0.65rem;
        padding: 6px 12px;
    }
}
```

- [ ] **Step 2: Test slider visual appearance**

Expected: Slider placeholder visible with handle in center, labels positioned

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add comparison slider styles"
```

---

### Task 6: Comparison Slider JavaScript

**Files:**
- Create: `js/main.js`

**Interfaces:**
- Consumes: `.comparison-slider` elements from HTML
- Produces: Interactive drag functionality

- [ ] **Step 1: Create js/main.js with slider functionality**

```javascript
// Comparison Slider
function initComparisonSliders() {
    const sliders = document.querySelectorAll('.comparison-slider');
    
    sliders.forEach(slider => {
        const imageBefore = slider.querySelector('.comparison-image-before');
        const imageAfter = slider.querySelector('.comparison-image-after');
        const handle = slider.querySelector('.comparison-handle');
        const handleCircle = slider.querySelector('.handle-circle');
        
        // Set background images from data attributes
        const beforeUrl = slider.dataset.before;
        const afterUrl = slider.dataset.after;
        
        if (beforeUrl) {
            imageBefore.style.setProperty('--before-image', `url(${beforeUrl})`);
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
        
        // Mouse events
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
        
        // Touch events
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
        
        // Close menu when clicking a link
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
    
    // Observe sections
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
    initComparisonSliders();
    initMobileMenu();
    initScrollReveal();
    initHeaderScroll();
});
```

- [ ] **Step 2: Test slider in browser**

Expected: Drag handle to reveal before/after images, works with mouse and touch

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add comparison slider JavaScript with drag interaction"
```

---

### Task 7: Testimonials Section Styles

**Files:**
- Modify: `css/style.css`

**Interfaces:**
- Produces: Grid layout for testimonial cards

- [ ] **Step 1: Add testimonials styles to style.css**

```css
/* Testimonials Section */
.testimonials {
    padding: 100px 0;
    background-color: var(--color-white);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.testimonial-card {
    background-color: var(--color-light-gray);
    padding: 2rem;
    border-radius: var(--border-radius);
    text-align: center;
    transition: var(--transition);
}

.testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-light);
}

.testimonial-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1rem;
    border: 3px solid var(--color-gold);
}

.testimonial-name {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.testimonial-text {
    font-size: 0.95rem;
    font-style: italic;
    margin-bottom: 1rem;
}

.testimonial-stars {
    color: var(--color-gold);
    font-size: 1.2rem;
    letter-spacing: 2px;
}

/* Responsive - Testimonials */
@media (max-width: 992px) {
    .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .testimonials-grid {
        grid-template-columns: 1fr;
    }

    .testimonial-card {
        padding: 1.5rem;
    }
}
```

- [ ] **Step 2: Test testimonials grid**

Expected: 3-column grid on desktop, 2 on tablet, 1 on mobile

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add testimonials section with responsive grid"
```

---

### Task 8: About Section Styles

**Files:**
- Modify: `css/style.css`

**Interfaces:**
- Produces: Flexbox layout with image and text

- [ ] **Step 1: Add about section styles to style.css**

```css
/* About Section */
.about {
    padding: 100px 0;
    background-color: var(--color-light-gray);
}

.about-content {
    display: flex;
    align-items: center;
    gap: 4rem;
}

.about-image {
    flex: 1;
}

.about-image img {
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-light);
}

.about-text {
    flex: 1;
}

.about-text .section-title {
    text-align: left;
}

.social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-gold);
    font-weight: 500;
    transition: var(--transition);
}

.social-link:hover {
    color: var(--color-gold-dark);
}

.social-link svg {
    transition: var(--transition);
}

.social-link:hover svg {
    transform: scale(1.1);
}

/* Responsive - About */
@media (max-width: 768px) {
    .about-content {
        flex-direction: column;
        gap: 2rem;
    }

    .about-text .section-title {
        text-align: center;
    }

    .about-text {
        text-align: center;
    }
}
```

- [ ] **Step 2: Test about section**

Expected: Side-by-side layout on desktop, stacked on mobile

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add about section with flexbox layout"
```

---

### Task 9: CTA Final Section Styles

**Files:**
- Modify: `css/style.css`

**Interfaces:**
- Produces: Conversion-focused section with price and benefits

- [ ] **Step 1: Add CTA section styles to style.css**

```css
/* CTA Section */
.cta {
    padding: 100px 0;
    background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%);
    text-align: center;
}

.cta-title {
    color: var(--color-white);
    margin-bottom: 2rem;
}

.cta-benefits {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.benefit-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-white);
}

.benefit-icon {
    font-size: 1.25rem;
}

.benefit-text {
    font-size: 1rem;
}

.cta-price {
    margin-bottom: 2rem;
}

.price {
    font-family: var(--color-heading);
    font-size: 3rem;
    font-weight: 700;
    color: var(--color-white);
}

.cta .btn-primary {
    background-color: var(--color-white);
    color: var(--color-gold);
    margin-bottom: 1.5rem;
}

.cta .btn-primary:hover {
    background-color: var(--color-light-gray);
    transform: translateY(-2px);
}

.cta-guarantee {
    color: var(--color-white);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.cta-note {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
}

/* Responsive - CTA */
@media (max-width: 576px) {
    .cta {
        padding: 60px 0;
    }

    .price {
        font-size: 2.5rem;
    }

    .cta-benefits {
        flex-direction: column;
        align-items: center;
    }
}
```

- [ ] **Step 2: Test CTA section**

Expected: Gold gradient background, centered benefits, large price, white button

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add CTA section with conversion-focused design"
```

---

### Task 10: Footer & Scroll Reveal Styles

**Files:**
- Modify: `css/style.css`

**Interfaces:**
- Produces: Footer styles and scroll reveal animations

- [ ] **Step 1: Add footer and scroll reveal styles to style.css**

```css
/* Footer */
.footer {
    padding: 2rem 0;
    background-color: var(--color-dark-gray);
    text-align: center;
}

.footer p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--color-gold);
}

/* Scroll Reveal Animation */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}

/* Header Scrolled State */
.header.scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

- [ ] **Step 2: Test footer and scroll animations**

Expected: Dark footer, smooth scroll reveals on sections, header shadow on scroll

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add footer styles and scroll reveal animations"
```

---

### Task 11: Final Testing & Responsiveness

**Files:**
- Modify: `index.html` (if needed)
- Modify: `css/style.css` (if needed)
- Modify: `js/main.js` (if needed)

**Interfaces:**
- Produces: Fully tested, responsive landing page

- [ ] **Step 1: Test on desktop (1920x1080)**

Expected: All sections visible, slider works, navigation smooth

- [ ] **Step 2: Test on tablet (768px)**

Expected: 2-column testimonials, stacked about section, hamburger menu works

- [ ] **Step 3: Test on mobile (375px)**

Expected: Single column, slider touch works, menu opens/closes

- [ ] **Step 4: Run Lighthouse audit**

Run: Open Chrome DevTools > Lighthouse > Generate Report
Expected: Performance > 90, Accessibility > 90

- [ ] **Step 5: Fix any issues found**

- [ ] **Step 6: Final commit**

```bash
git add .
git commit -m "feat: complete landing page with responsive design"
```

---

### Task 12: Documentation & Deployment Prep

**Files:**
- Create: `README.md`

**Interfaces:**
- Produces: Project documentation

- [ ] **Step 1: Create README.md**

```markdown
# Landing Page - Presets Agatha Pinheiro

Landing page estática para venda de presets de fotografia.

## Stack

- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript Vanilla
- Google Fonts (Playfair Display + Inter)

## Estrutura

```
site-agatha/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    ├── hero.jpg
    ├── agatha.jpg
    ├── before-1.jpg
    ├── after-1.jpg
    └── ...
```

## Como rodar localmente

1. Abra `index.html` no navegador
2. Ou use um servidor local:
   ```bash
   npx serve .
   ```

## Deploy

### Vercel
1. Crie conta em vercel.com
2. Importe o repositório
3. Deploy automático

### Netlify
1. Crie conta em netlify.com
2. Arraste a pasta do projeto
3. Deploy automático

## Imagens

Substitua as imagens placeholder em `img/` pelas fotos reais da Agatha.

## Personalização

- Cores: Edite as variáveis CSS em `css/style.css`
- Textos: Edite diretamente no `index.html`
- Preço: Busque por "R$ 79,90" e substitua
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add project README with setup instructions"
```

- [ ] **Step 3: Final verification**

Run: `git log --oneline`
Expected: Clean commit history with all features

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-07-05-agatha-presets-landing-page.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
