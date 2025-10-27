import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">Ancient Wisdom. Modern Wellness.</h1>
          <p className="hero-subtitle">
            Discover the power of Ayurvedic wellness with our premium collection of 
            organic henna, shikakai, moringa, and turmeric powders.
          </p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary btn-large">
              Shop Now
            </Link>
            <Link to="/subscription" className="btn btn-outline btn-large">
              Try Our Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Pure. Natural. Authentic.</h2>
              <p>
                At Margasira, we believe in the timeless wisdom of Ayurveda. Our products 
                are carefully sourced and processed to preserve their natural goodness, 
                bringing you the authentic benefits that have been trusted for centuries.
              </p>
              <p>
                Every powder we offer is 100% organic, chemical-free, and packed with 
                nutrients to support your journey to holistic wellness.
              </p>
            </div>
            <div className="about-values">
              <div className="value-card">
                <div className="value-icon">🌿</div>
                <h3>100% Organic</h3>
                <p>No chemicals, no additives</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌍</div>
                <h3>Sustainably Sourced</h3>
                <p>Ethically harvested ingredients</p>
              </div>
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h3>Ancient Wisdom</h3>
                <p>Ayurvedic traditions honored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Our Premium Collection</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/shop" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="subscription-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Save with Our Wellness Bundle</h2>
            <p>Get all four premium powders delivered monthly for just $35</p>
            <p className="savings">Save over 30% compared to individual purchases!</p>
            <Link to="/subscription" className="btn btn-primary btn-large">
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Margasira?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>🚚 Free Shipping</h3>
              <p>On all subscription orders</p>
            </div>
            <div className="benefit-item">
              <h3>🔄 Easy Returns</h3>
              <p>30-day money-back guarantee</p>
            </div>
            <div className="benefit-item">
              <h3>💚 Clean Beauty</h3>
              <p>No harmful chemicals ever</p>
            </div>
            <div className="benefit-item">
              <h3>📚 Educational</h3>
              <p>Wellness tips included</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
