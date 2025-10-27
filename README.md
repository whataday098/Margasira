# Margasira - Ancient Wisdom. Modern Wellness.

Margasira is an Ayurvedic e-commerce brand promoting health and happiness through premium organic wellness products.

## About

This is a modern, responsive e-commerce website built for Margasira, offering premium Ayurvedic powders including:
- Organic Henna Powder ($18)
- Shikakai Powder ($15)
- Moringa Powder ($22)
- Turmeric Powder ($12)

## Features

- **Product Catalog**: Browse and filter products by category
- **Product Details**: Comprehensive product information with reviews
- **Shopping Cart**: Add/remove items with quantity controls
- **Checkout**: Complete payment and shipping form
- **Subscription**: $35/month wellness bundle with customizable products
- **Bundle Customizer**: Interactive product selection tool
- **Email Newsletter**: Subscribe for wellness tips
- **Mobile Responsive**: Fully optimized for all devices
- **Modern Design**: Earth-tone color scheme with clean, educational aesthetic

## Tech Stack

- **React 18** - Modern UI framework
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Context API** - State management for shopping cart
- **LocalStorage** - Cart persistence

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/whataday098/Margasira.git
cd Margasira
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Margasira/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Subscription.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── About.jsx
│   ├── context/         # React Context for state management
│   │   └── CartContext.jsx
│   ├── data/            # Product data
│   │   └── products.js
│   ├── styles/          # Global styles
│   │   └── index.css
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Target Audience

Health-conscious millennials (25-40) seeking clean beauty and wellness products with educational value.

## License

© 2025 Margasira. All rights reserved.
