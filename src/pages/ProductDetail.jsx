import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${quantity} ${product.name} added to cart!`);
  };

  const averageRating = product.reviews 
    ? (product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length).toFixed(1)
    : 0;

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/shop" className="back-link">← Back to Shop</Link>

        <div className="product-main">
          <div className="product-image-large">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-details">
            <h1>{product.name}</h1>
            
            <div className="product-rating-large">
              {'⭐'.repeat(Math.round(averageRating))} 
              <span className="rating-text">{averageRating} ({product.reviews.length} reviews)</span>
            </div>

            <div className="product-price-large">${product.price}</div>

            <p className="product-description">{product.description}</p>

            <div className="product-meta">
              <div className="meta-item">
                <strong>Weight:</strong> {product.weight}
              </div>
              <div className="meta-item">
                <strong>Category:</strong> {product.category === 'hair-care' ? 'Hair Care' : 'Wellness'}
              </div>
            </div>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <button 
              className="btn btn-primary btn-large add-to-cart-main"
              onClick={handleAddToCart}
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>

        <div className="product-info-sections">
          <div className="info-section">
            <h2>Benefits</h2>
            <ul className="benefits-list">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="info-section">
            <h2>Ingredients</h2>
            <p>{product.ingredients}</p>
          </div>

          <div className="info-section">
            <h2>How to Use</h2>
            <p>{product.usage}</p>
          </div>
        </div>

        <div className="reviews-section">
          <div className="reviews-header">
            <h2>Customer Reviews</h2>
            <button 
              className="btn btn-outline"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              Write a Review
            </button>
          </div>

          {showReviewForm && (
            <form className="review-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your review!');
              setShowReviewForm(false);
              e.target.reset();
            }}>
              <input type="text" placeholder="Your name" required />
              <select required>
                <option value="">Select rating</option>
                <option value="5">⭐⭐⭐⭐⭐ 5 stars</option>
                <option value="4">⭐⭐⭐⭐ 4 stars</option>
                <option value="3">⭐⭐⭐ 3 stars</option>
                <option value="2">⭐⭐ 2 stars</option>
                <option value="1">⭐ 1 star</option>
              </select>
              <textarea placeholder="Your review" required rows="4"></textarea>
              <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
          )}

          <div className="reviews-list">
            {product.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div>
                    <strong>{review.author}</strong>
                    <div className="review-rating">
                      {'⭐'.repeat(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
