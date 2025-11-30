<div align="center">

# 🏢 Röllinger GmbH

### Modern Corporate Website

A sophisticated, high-performance corporate website for Röllinger GmbH — a Swiss company specializing in facility management, renovation, and real estate services.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## ✨ Features

- **🎯 Smooth Scrolling** — Buttery-smooth scroll experience powered by [Lenis](https://lenis.darkroom.engineering/)
- **🖱️ Custom Cursor** — Interactive cursor that responds to user interactions
- **⚡ Preloader Animation** — Elegant loading sequence for premium feel
- **🎬 Scroll Animations** — Dynamic animations triggered by scroll position using Framer Motion
- **📱 Responsive Design** — Optimized for all devices and screen sizes
- **🎨 Modern UI Components** — Glass cards, magnetic effects, text reveals, and more
- **🔊 Noise Texture** — Subtle grain overlay for depth and character

## 🏗️ Architecture

```
├── App.tsx                    # Main application component
├── components/
│   ├── Hero.tsx              # Hero section with main CTA
│   ├── About.tsx             # ScrollyTelling about section
│   ├── Services.tsx          # Soft grid services display
│   ├── ParallaxSection.tsx   # Parallax scrolling section
│   ├── Portfolio.tsx         # Project carousel
│   ├── Testimonials.tsx      # Client testimonials
│   ├── Contact.tsx           # Contact form section
│   ├── Navigation.tsx        # Main navigation
│   ├── Footer.tsx            # Site footer
│   ├── SmoothScroll.tsx      # Lenis scroll wrapper
│   └── ui/
│       ├── CustomCursor.tsx  # Interactive cursor
│       ├── GlassCard.tsx     # Glassmorphism card component
│       ├── Magnetic.tsx      # Magnetic hover effect
│       ├── Noise.tsx         # Grain texture overlay
│       ├── Preloader.tsx     # Loading animation
│       ├── Section.tsx       # Reusable section wrapper
│       └── TextReveal.tsx    # Animated text reveal
└── hooks/
    └── useIsMobile.ts        # Mobile detection hook
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/festim-jetishi/festim-jetishi.github.io.git
   cd festim-jetishi.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth Scrolling |
| [Lucide React](https://lucide.dev/) | Icons |

## 🎨 Design Features

### Visual Effects
- **Glassmorphism** — Frosted glass UI elements
- **Parallax Scrolling** — Multi-layer depth effects
- **Magnetic Interactions** — Elements that follow cursor
- **Text Reveal Animations** — Smooth character-by-character reveals

### User Experience
- **Progressive Loading** — Content loads as user scrolls
- **Responsive Breakpoints** — Tailored layouts for mobile, tablet, desktop
- **Performance Optimized** — Lazy loading and efficient re-renders

## 📄 License

This project is private and proprietary to Röllinger GmbH.

---

<div align="center">

**Built with ❤️ in Switzerland 🇨🇭**

</div>
