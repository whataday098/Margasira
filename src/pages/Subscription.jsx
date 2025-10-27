import React, { useState } from 'react';
import { subscription, products } from '../data/products';
import { useCart } from '../context/CartContext';
import './Subscription.css';

const Subscription = () => {
  const { addToCart } = useCart();
  const [selectedProducts, setSelectedProducts] = useState(products.map(p => p.id));

  const handleCustomize = (productId) => {
    setSelectedProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const customBundlePrice = selectedProducts.length >= 4 ? 35 : selectedProducts.length * 10;

  const handleSubscribe = () => {
    const bundleProduct = {
      id: 'wellness-bundle',
      name: subscription.name,
      price: customBundlePrice,
      image: subscription.image,
      quantity: 1
    };
    addToCart(bundleProduct);
    alert('Subscription bundle added to cart!');
  };

  return (
    <div className="subscription-page">
      <div className="container">
        <div className="subscription-hero">
          <h1>Wellness Bundle Subscription</h1>
          <p className="hero-subtitle">Your monthly dose of Ayurvedic wellness</p>
        </div>

        <div className="subscription-main">
          <div className="subscription-image">
            <img src={subscription.image} alt={subscription.name} />
          </div>

          <div className="subscription-details">
            <div className="price-tag">
              <span className="price-amount">${customBundlePrice}</span>
              <span className="price-period">/month</span>
            </div>

            <p className="subscription-description">{subscription.description}</p>

            <div className="savings-highlight">
              <h3>🎉 Save Over 30%</h3>
              <p>Get all four premium powders for just $35/month instead of $67!</p>
            </div>

            <div className="bundle-includes">
              <h3>What's Included:</h3>
              <ul>
                {subscription.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="subscription-benefits">
              <h3>Subscription Benefits:</h3>
              <ul>
                {subscription.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <button 
              className="btn btn-primary btn-large subscribe-btn"
              onClick={handleSubscribe}
            >
              Subscribe Now - ${customBundlePrice}/month
            </button>

            <p className="subscription-note">
              Cancel anytime. No commitments. Just wellness.
            </p>
          </div>
        </div>

        <div className="bundle-customizer">
          <h2>Customize Your Bundle</h2>
          <p className="customizer-subtitle">
            Select at least 4 products to get the subscription price of $35/month
          </p>

          <div className="customizer-grid">
            {products.map(product => (
              <div 
                key={product.id}
                className={`customizer-item ${selectedProducts.includes(product.id) ? 'selected' : ''}`}
                onClick={() => handleCustomize(product.id)}
              >
                <div className="customizer-checkbox">
                  {selectedProducts.includes(product.id) ? '✓' : ''}
                </div>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p className="individual-price">${product.price}</p>
              </div>
            ))}
          </div>

          <div className="customizer-summary">
            <p>
              <strong>Selected: {selectedProducts.length} products</strong>
            </p>
            <p className="bundle-price">
              Bundle Price: ${customBundlePrice}/month
              {selectedProducts.length >= 4 && (
                <span className="savings-tag"> (Save $32!)</span>
              )}
            </p>
          </div>
        </div>

        <div className="subscription-faq">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-item">
            <h3>How does the subscription work?</h3>
            <p>
              Your selected bundle will be shipped to you every month. You'll be charged 
              $35/month for the full bundle. You can modify your selection or cancel anytime.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I skip a month?</h3>
            <p>
              Yes! You can pause your subscription anytime and resume when you're ready.
            </p>
          </div>

          <div className="faq-item">
            <h3>What if I want to change my products?</h3>
            <p>
              You can customize your bundle anytime through your account dashboard.
            </p>
          </div>

          <div className="faq-item">
            <h3>Is shipping free?</h3>
            <p>
              Yes! All subscription orders come with free shipping within the continental US.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
