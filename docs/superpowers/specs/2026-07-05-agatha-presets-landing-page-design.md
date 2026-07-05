# Design Spec: Landing Page - Presets Agatha Pinheiro

## Visão Geral

Landing page estática para venda de presets de fotografia da Agatha Pinheiro. Estilo minimalista e elegante, com foco em conversão e experiência visual.

## Stack Técnico

- **HTML5** + **CSS3** (Flexbox/Grid) + **JavaScript vanilla**
- **Slider antes/depois:** Componente JS puro com drag interativo
- **Hospedagem:** Vercel ou Netlify (gratuito, com domínio próprio depois)
- **Sem frameworks** - máximo desempenho e leveza

## Identidade Visual

### Paleta de Cores

| Uso | Cor | Hex |
|-----|-----|-----|
| Fundo principal | Branco | `#FFFFFF` |
| Fundo secundário | Cinza claro | `#F8F8F8` |
| Texto principal | Cinza escuro | `#333333` |
| Texto secundário | Cinza médio | `#666666` |
| Destaque/CTA | Dourado/Rosé | `#C9A96E` |
| Hover CTA | Dourado escuro | `#B8944F` |

### Tipografia

- **Títulos:** Playfair Display (serifada, elegante)
- **Corpo:** Inter ou Lato (sans-serif, limpa)
- **Fallback:** system-ui, sans-serif

### Estilo Geral

- Bordas arredondadas sutis (8-12px)
- Sombras leves (`box-shadow: 0 4px 20px rgba(0,0,0,0.08)`)
- Muito espaço em branco
- Animações suaves (fade-in, scroll reveals)

## Estrutura da Página

### 1. Header (Fixo)

- Logo/nome "Agatha Pinheiro" à esquerda
- Links de navegação à direita: Início | Antes/Depois | Sobre | Comprar
- Fundo branco com sombra leve ao rolar
- Responsivo: menu hamburger no mobile

### 2. Hero Section

- **Fundo:** Foto full-width de trabalho da Agatha (com overlay escuro sutil)
- **Título principal:** "Transforme suas fotos com um clique"
- **Subtítulo:** "Presets profissionais criados por Agatha Pinheiro"
- **CTA:** Botão dourado "Ver presets" (scroll para seção de vendas)
- **Animação:** Fade-in suave no carregamento

### 3. Antes/Depois (Slider Interativo)

- **Título da seção:** "Veja a mágica acontecer"
- **Layout:** 3-4 sliders empilhados verticalmente
- **Funcionamento:**
  - Slider central com handle arrastável
  - Arrastar para esquerda = foto editada (depois)
  - Arrastar para direita = foto original (antes)
  - Labels "ANTES" e "DEPOIS" nos cantos
- **Mobile:** Funciona com touch drag
- **Estilo:** Bordas sutis, sombra leve, visual limpo

### 4. Depoimentos

- **Título da seção:** "Quem já usa, recomenda"
- **Layout:** Grid 3 colunas (1 no mobile)
- **Cards:**
  - Foto do cliente (circular)
  - Nome
  - Depoimento (2-3 linhas)
  - Estrelas (opcional)
- **Estilo:** Cards com bordas arredondadas, sombra sutil

### 5. Sobre a Agatha

- **Layout:** Flexbox - foto à esquerda, texto à direita
- **Foto:** Retrato profissional da Agatha
- **Texto:** Bio curta (2-3 linhas), foco em experiência
- **Link:** Ícone + link para Instagram
- **Estilo:** Simples, pessoal, acolhedor

### 6. CTA Final (Seção de Vendas)

- **Fundo:** Dourado/rosé suave ou gradiente sutil
- **Título:** "Comece a editar hoje"
- **Lista de benefícios:**
  - Ícone + texto para cada benefício
  - Ex: "10 presets profissionais"
  - Ex: "Compatível com Lightroom Mobile e Desktop"
  - Ex: "Download imediato"
  - Ex: "Suporte incluso"
- **Preço:** Destaque visual (tamanho maior, cor de destaque)
  - Ex: "R$ 79,90" (com ou sem desconto riscado)
- **Botão:** Grande, dourado, "QUERO MEUS PRESETS"
- **Garantia:** "Garantia de 7 dias ou seu dinheiro de volta"
- **Nota:** "Download imediato após a compra"

### 7. Footer

- Copyright © 2026 Agatha Pinheiro
- Links: Instagram | Contato
- Links legais (se necessário)

## Comportamento e Interações

### Navegação

- Scroll suave entre seções (smooth scroll)
- Header fixo no topo ao rolar
- Menu hamburger no mobile (abre/fecha com animação)

### Slider Antes/Depois

- Implementação com CSS `clip-path` ou `overflow: hidden`
- JavaScript para controlar posição do slider via drag
- Touch events para mobile
- Snap suave ao centro (opcional)

### Animações

- Fade-in ao scroll (Intersection Observer)
- Botões com hover suave (transição de cor/sombra)
- Slider com transição suave

### Responsividade

- **Desktop:** Layout completo, 3 colunas para depoimentos
- **Tablet:** 2 colunas, ajustes de espaçamento
- **Mobile:** 1 coluna, menu hamburger, slider otimizado para toque

## Arquivos do Projeto

```
site-agatha/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos globais
├── js/
│   └── main.js         # Interações (slider, menu, animações)
├── img/
│   ├── hero.jpg        # Foto do hero
│   ├── agatha.jpg      # Foto da Agatha
│   ├── before-1.jpg    # Foto antes (slider 1)
│   ├── after-1.jpg     # Foto depois (slider 1)
│   ├── before-2.jpg    # Foto antes (slider 2)
│   ├── after-2.jpg     # Foto depois (slider 2)
│   ├── before-3.jpg    # Foto antes (slider 3)
│   └── after-3.jpg     # Foto depois (slider 3)
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-07-05-agatha-presets-landing-page-design.md
```

## Ordem de Implementação

1. **Estrutura HTML** - Header, Hero, seções, Footer
2. **Estilos base** - Reset, tipografia, paleta, layout
3. **Hero Section** - Estilos e responsividade
4. **Slider Antes/Depois** - Componente JS + estilos
5. **Depoimentos** - Grid de cards
6. **Sobre** - Layout flex
7. **CTA Final** - Estilos de conversão
8. **Header fixo + Menu mobile**
9. **Animações** - Scroll reveals, hover effects
10. **Testes de responsividade**

## Métricas de Sucesso

- Page load < 2s
- Lighthouse score > 90
- Slider funciona em touch e mouse
- Layout responsivo em todos os tamanhos
- CTA visível e acessível
