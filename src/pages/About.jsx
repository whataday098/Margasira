import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About Margasira</h1>
          <p className="tagline">Ancient Wisdom. Modern Wellness.</p>
        </div>

        <div className="about-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Margasira was born from a deep reverence for Ayurvedic traditions and a 
              commitment to bringing authentic wellness to modern life. We believe that 
              the ancient wisdom of Ayurveda holds the key to natural beauty and holistic health.
            </p>
            <p>
              Every product we offer is carefully sourced from trusted suppliers who share 
              our values of sustainability, purity, and authenticity. We work directly with 
              organic farmers to ensure our powders are of the highest quality, free from 
              chemicals and additives.
            </p>
          </div>
        </div>

        <div className="mission-values">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To empower health-conscious individuals with pure, authentic Ayurvedic products 
              that promote holistic wellness, natural beauty, and sustainable living.
            </p>
          </div>

          <div className="values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🌿</div>
                <h3>Purity</h3>
                <p>100% organic, no chemicals, no compromises</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌍</div>
                <h3>Sustainability</h3>
                <p>Ethically sourced, environmentally responsible</p>
              </div>
              <div className="value-item">
                <div className="value-icon">✨</div>
                <h3>Authenticity</h3>
                <p>Traditional Ayurvedic practices honored</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💚</div>
                <h3>Wellness</h3>
                <p>Holistic health for mind, body, and spirit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose">
          <h2>Why Choose Margasira?</h2>
          <div className="reasons-grid">
            <div className="reason">
              <h3>Quality Guaranteed</h3>
              <p>
                Every batch is tested for purity and potency. We stand behind our products 
                with a 30-day satisfaction guarantee.
              </p>
            </div>
            <div className="reason">
              <h3>Educational Approach</h3>
              <p>
                We don't just sell products—we educate. Each purchase comes with detailed 
                usage guides and wellness tips.
              </p>
            </div>
            <div className="reason">
              <h3>Community Focused</h3>
              <p>
                Join our growing community of wellness enthusiasts. Share experiences, 
                learn from others, and grow together.
              </p>
            </div>
            <div className="reason">
              <h3>Sustainable Practices</h3>
              <p>
                From sourcing to packaging, we minimize our environmental impact while 
                maximizing quality and freshness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
