# Vanta

A modern, animated website showcasing products with immersive video backgrounds and smooth GSAP scroll-driven animations.

## Overview

This project demonstrates a single-page application with multi-route navigation, featuring a video-enhanced homepage and a products gallery with scroll-triggered animations. Built with performance in mind using Vite's fast build tooling.

## Features

- **Full-screen video backgrounds** with responsive overlay text
- **GSAP ScrollTrigger animations** for scroll-driven card reveals
- **React Router** for client-side routing (Home, Products)
- **Responsive design** using Tailwind CSS utility classes
- **Context API** for state management
- **Custom components** including navbar, menu, time display, and back-to-top functionality
- **ESLint** configured for code quality

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **GSAP 3** - Animation library with ScrollTrigger plugin
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router v7** - Client-side routing
- **React Icons** - Icon library

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── common/      # Reusable components (Navbar, BackToTop, Time)
│   ├── home/        # Home page components (Video, HeroText, Footer)
│   └── products/    # Products page components (ProductsCard, ProductNavbar)
├── context/         # React Context providers
├── pages/           # Route components (Home, Products)
└── assets/          # Static assets
```
