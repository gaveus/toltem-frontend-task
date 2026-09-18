import { useEffect, useState } from "react";

import { Header } from "./components/organisms/Header";
import { Footer } from "./components/organisms/Footer";

import "./App.css";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <Header activePath="#" />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <p className="hero-eyebrow">WELCOME TO TOLTEM</p>

            <h1>
              A Modern
              <br />
              Dining Experience
            </h1>

            <p className="hero-description">
              Discover delicious meals, carefully prepared and served with
              warmth. Experience great food in a welcoming atmosphere.
            </p>

            <div className="hero-actions">
              <a href="#menu" className="hero-button primary">
                Explore Menu
              </a>

              <a href="#about" className="hero-button secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="restaurant-section">
          <div className="section-heading">
            <p className="section-eyebrow">OUR MENU</p>

            <h2>Made With Care</h2>

            <p>
              Enjoy a selection of delicious dishes prepared with quality
              ingredients and served with care.
            </p>
          </div>

          <div className="menu-grid">
            {/* Signature Meals */}
            <article className="menu-card">
              <div className="menu-card-image">🍽️</div>

              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>Signature Meals</h3>
                  <span className="menu-price">₦8,500</span>
                </div>

                <p>
                  Delicious signature dishes prepared with carefully selected
                  ingredients for a memorable dining experience.
                </p>

                <div className="menu-card-footer">
                  <span className="menu-category">Chef&apos;s Special</span>

                  <button
                    type="button"
                    className="menu-order-button"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </article>

            {/* Special Dishes */}
            <article className="menu-card">
              <div className="menu-card-image">🥘</div>

              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>Special Dishes</h3>
                  <span className="menu-price">₦7,500</span>
                </div>

                <p>
                  Carefully prepared meals combining rich flavour, freshness
                  and quality ingredients.
                </p>

                <div className="menu-card-footer">
                  <span className="menu-category">Popular</span>

                  <button
                    type="button"
                    className="menu-order-button"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </article>

            {/* Drinks */}
            <article className="menu-card">
              <div className="menu-card-image">🍹</div>

              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>Drinks &amp; More</h3>
                  <span className="menu-price">₦3,500</span>
                </div>

                <p>
                  Refreshing drinks and complementary options carefully
                  selected to complete your dining experience.
                </p>

                <div className="menu-card-footer">
                  <span className="menu-category">Refreshing</span>

                  <button
                    type="button"
                    className="menu-order-button"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-content">
            <p className="section-eyebrow">ABOUT TOLTEM</p>

            <h2>Good Food. Great Atmosphere.</h2>

            <p>
              Toltem is focused on creating a modern dining experience where
              great food and genuine hospitality come together.
            </p>

            <p>
              Whether you are joining us for a quick meal or spending time
              with friends and family, we are here to make every visit
              enjoyable.
            </p>
          </div>
        </section>

        {/* Newsletter / Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <div className="contact-content">
              <p className="section-eyebrow">STAY CONNECTED</p>

              <h2>Get the Latest From Toltem</h2>

              <p>
                Subscribe to receive updates about our latest dishes, special
                offers, events, and dining experiences.
              </p>

              <form
                className="subscribe-form"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <label
                  htmlFor="subscriber-email"
                  className="sr-only"
                >
                  Email address
                </label>

                <input
                  id="subscriber-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />

                <button type="submit">
                  Subscribe
                </button>
              </form>

              <p className="subscribe-note">
                By subscribing, you agree to receive updates from Toltem.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          className="scroll-to-top"
          aria-label="Scroll to top"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;