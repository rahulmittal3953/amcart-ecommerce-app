import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <div className="landing-nav-content">
          <div className="logo">🛒 AmCart</div>
          <div className="nav-buttons">
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to AmCart</h1>
          <p className="hero-subtitle">
            Your one-stop shop for fashion and lifestyle products
          </p>
          <p className="hero-description">
            Discover thousands of products at amazing prices. From jackets to jeans,
            shoes to shirts - we've got everything you need.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="hero-btn primary">
              Get Started
            </Link>
            <Link to="/shop" className="hero-btn secondary">
              Browse Products
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="product-showcase">
            <div className="showcase-item">🧥</div>
            <div className="showcase-item">👟</div>
            <div className="showcase-item">👕</div>
            <div className="showcase-item">👖</div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose AmCart?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Free shipping on orders over $100</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>100% secure payment with Stripe</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">↩️</div>
            <h3>Easy Returns</h3>
            <p>30-day hassle-free returns</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Top Quality</h3>
            <p>Premium products from trusted brands</p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          <Link to="/shop?category=Jackets" className="category-card">
            <div className="category-icon">🧥</div>
            <h3>Jackets</h3>
          </Link>
          <Link to="/shop?category=Shoes" className="category-card">
            <div className="category-icon">👟</div>
            <h3>Shoes</h3>
          </Link>
          <Link to="/shop?category=T-Shirts" className="category-card">
            <div className="category-icon">👕</div>
            <h3>T-Shirts</h3>
          </Link>
          <Link to="/shop?category=Jeans" className="category-card">
            <div className="category-icon">👖</div>
            <h3>Jeans</h3>
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Shopping?</h2>
          <p>Join thousands of happy customers today</p>
          <div className="cta-buttons">
            <Link to="/login" className="cta-btn">
              Login Now
            </Link>
          </div>
          <div className="demo-note">
            <p>🎯 Demo Account: demo@amcart.com / demo123</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>🛒 AmCart</h4>
            <p>Your trusted online shopping destination</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/shop">Shop</Link>
            <Link to="/login">Login</Link>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <Link to="/shop?category=Jackets">Jackets</Link>
            <Link to="/shop?category=Shoes">Shoes</Link>
            <Link to="/shop?category=T-Shirts">T-Shirts</Link>
            <Link to="/shop?category=Jeans">Jeans</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 AmCart. All rights reserved. | Demo E-Commerce Application</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
