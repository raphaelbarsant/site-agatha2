---
name: Agatha Pinheiro Presets
description: Landing page para venda de presets de fotografia profissional
colors:
  primary: "#C9A96E"
  primary-deep: "#B8944F"
  neutral-bg: "#FFFFFF"
  neutral-surface: "#F8F8F8"
  neutral-ink: "#333333"
  neutral-muted: "#666666"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "10px"
spacing:
  sm: "8px"
  md: "20px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
---

# Design System: Agatha Pinheiro Presets

## 1. Overview

**Creative North Star: "O Padrão Ouro"**

Este sistema visual traduz precisão técnica em elegância acessível. Cada elemento comunica expertise profissional sem frieza - é o equilíbrio entre um estúdio de fotografia de alto nível e a acolhedora realidade de quem vive de criar imagens. A paleta é intencionalmente contida: o dourado carrega toda a energia da marca, enquanto neutros precisos fornecem o palco onde as fotos dos presets brilham.

O sistema rejeita explicitamente o visual SaaS genérico (gradientes roxo-azul, cards genéricos, Inter em todo lugar) e o look "influencer digital" (emojis excessivos, cores neon, linguagem informal). Em vez disso, busca a sofisticação de uma ourivesaria: cada detalhe é preciso, cada espaço é respirável, cada interação é tátil.

**Key Characteristics:**
- Precisão tipográfica com hierarquia clara
- Dourado como âncora visual, não decoração
- Espaço negativo como elemento de design
- Micro-interações que comunicam qualidade
- Contraste alto para legibilidade profissional

## 2. Colors

A paleta é estruturada em torno de um único acento saturado - dourado clássico - apoiado por uma escala de neutros com temperatura neutra.

### Primary
- **Dourado Clássico** (#C9A96E): A assinatura visual. Usado em CTAs, destaques de navigation, e elementos que precisam de ênfase. Nunca em mais de 15% da superfície - sua raridade é o ponto.
- **Dourado Profundo** (#B8944F): Variedade escura para hover states e ênfase secundária.

### Neutral
- **Branco Puro** (#FFFFFF): Fundo principal, espaço respirável.
- **Cinza Superfície** (#F8F8F8): Fundo alternado, separação sutil entre seções.
- **Cinza Texto** (#333333): Cor principal do texto - contraste forte contra branco.
- **Cinza Muted** (#666666): Texto secundário, legendas, metadata.

### Named Rules
**The Gold Accent Rule.** O dourado é usado no máximo 15% de qualquer superfície. Sua economia transmite sofisticação - se tudo é dourado, nada é especial.

## 3. Typography

**Display Font:** Playfair Display (com Georgia como fallback)
**Body Font:** Inter (com system-ui como fallback)

**Character:** O contraste entre serif clássica e sans-serif moderna espelha a marca: tradição fotográfica com ferramentas contemporâneas. Playfair transmite autoridade e sofisticação; Inter comunica clareza técnica.

### Hierarchy
- **Display** (500, clamp(2.5rem, 5vw, 4rem), 1.2): Títulos hero e seções principais. Presença sem dominar.
- **Headline** (500, clamp(2rem, 4vw, 3rem), 1.2): Subtítulos de seção. Hierarquia clara.
- **Title** (500, 1.25rem, 1.2): Títulos de cards e componentes.
- **Body** (400, 1rem, 1.6): Texto corrido. Line-height generoso para respiração.
- **Label** (500, 0.9rem, normal): Navegação, botões, elementos interativos.

### Named Rules
**The Breathing Room Rule.** Line-height nunca abaixo de 1.2 para títulos, 1.6 para corpo. Texto compacto é estresse visual.

## 4. Elevation

Sistema de elevação sutil e ambiental. Sombras existem para criar profundidade hierárquica, não para decorators. Superfícies são planas por padrão; sombras aparecem como resposta a estado (hover, foco, elevação).

### Shadow Vocabulary
- **Ambient Lift** (`0 4px 20px rgba(0, 0, 0, 0.08)`): Hover em cards e botões. Elevação sutil que comunica interatividade.
- **CTA Glow** (`0 4px 15px rgba(201, 169, 110, 0.4)`): Hover no botão primário. Brilho dourado que reforça a ação.

### Named Rules
**The Flat-By-Default Rule.** Superfícies são planas em repouso. Sombras aparecem apenas como resposta a estado (hover, elevação, foco).

## 5. Components

### Buttons
- **Shape:** Bordas levemente arredondadas (10px radius)
- **Primary:** Fundo dourado (#C9A96E), texto branco, padding 14px 32px
- **Hover / Focus:** Transição suave para dourado profundo (#B8944F), elevação sutil com sombra dourada
- **Secondary / Ghost:** Fundo transparente, borda dourada, texto dourado

### Navigation
- **Style:** Header fixo, logo à esquerda, links à direita
- **Typography:** Inter 500, 0.9rem, uppercase não
- **Default/Hover/Active:** Cinza médio → Dourado → Dourado profundo
- **Mobile:** Hamburger menu com animação suave

### Comparison Slider (Componente Signature)
- **Purpose:** Mostrar transformação antes/depois dos presets
- **Behavior:** Drag interativo com handle circular branco
- **Labels:** "ANTES" e "DEPOIS" posicionados nos cantos inferiores
- **Visual:** Bordas arredondadas, sombra ambiental, cursor ew-resize

### Cards (Depoimentos)
- **Corner Style:** 10px radius
- **Background:** Cinza superfície (#F8F8F8)
- **Shadow Strategy:** Flat by default, ambient lift no hover
- **Border:** Nenhuma - a sombra define a borda
- **Internal Padding:** 2rem

## 6. Do's and Don'ts

### Do:
- **Do** usar o dourado com economia - máximo 15% da superfície
- **Do** manter contraste alto (4.5:1 mínimo) para todo texto
- **Do** usar Playfair Display para títulos que precisam de autoridade
- **Do** criar espaço generoso entre elementos - respiração é sofisticação
- **Do** usar sombras apenas em estados interativos (hover, focus)
- **Do** manter a paleta contida - neutros + um acento

### Don't:
- **Don't** usar gradientes roxo-azul ou purple-blue - é o SaaS genérico que PRODUCT.md rejeita
- **Don't** criar cards dentro de cards - hierarquia plana, sem nesting
- **Don't** usar fonte Inter em títulos - Playfair para display, Inter para corpo
- **Don't** colocar texto cinza sobre fundo colorido - usar tom da própria cor
- **Don't** animações bounce ou elásticas - easing suave e profissional
- **Don't** usar emojis excessivos ou linguagem informal - é marca profissional, não influencer
- **Don't** criar sidebars ou navegação complexa - é landing page, não app
- **Don't** usar borders-left/right maiores que 1px como acento - é o anti-pattern "side-stripe"
