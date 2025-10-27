import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const Shop = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="shop-page">
      <div className="container">
        <div className="shop-header">
          <h1>Our Products</h1>
          <p className="shop-subtitle">
            Premium Ayurvedic powders for your wellness journey
          </p>
        </div>

        <div className="shop-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Products
          </button>
          <button 
            className={`filter-btn ${filter === 'hair-care' ? 'active' : ''}`}
            onClick={() => setFilter('hair-care')}
          >
            Hair Care
          </button>
          <button 
            className={`filter-btn ${filter === 'wellness' ? 'active' : ''}`}
            onClick={() => setFilter('wellness')}
          >
            Wellness
          </button>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
