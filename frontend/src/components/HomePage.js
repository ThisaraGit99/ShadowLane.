import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar';
import Footer from './Footer';
import './HomePage.css';

const slides = [
  {
    image: 'https://picsum.photos/1200/400?1',
    heading: 'Welcome to ShadowLane',
    description: 'Discover the best gadgets and electronics at unbeatable prices.',
  },
  {
    image: 'https://picsum.photos/1200/400?2',
    heading: 'Latest Tech Available',
    description: 'Get the newest gadgets in the market today!',
  },
  {
    image: 'https://picsum.photos/1200/400?3',
    heading: 'Exclusive Deals',
    description: 'Enjoy amazing discounts and offers on your favorite products.',
  },
  {
    image: 'https://picsum.photos/1200/400?3',
    heading: 'Exclusive Deals',
    description: 'Enjoy amazing discounts and offers on your favorite products.',
  },
];

const trendingItems = [
  {
    id: 1,
    image: 'https://picsum.photos/200/200?4',
    link: '/products/smartphone', // Replace with your product link
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/200?5',
    link: '/products/laptop', // Replace with your product link
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/200?6',
    link: '/products/headphones', // Replace with your product link
  },
];

const tradingItems = [
  { id: 1, image: 'https://picsum.photos/200/300?1' },
  { id: 2, image: 'https://picsum.photos/200/300?2' },
  { id: 3, image: 'https://picsum.photos/200/300?3' },
  { id: 4, image: 'https://picsum.photos/200/300?4' },
  { id: 5, image: 'https://picsum.photos/200/300?5' },
  { id: 6, image: 'https://picsum.photos/200/300?6' },
  { id: 7, image: 'https://picsum.photos/200/300?7' },
  { id: 8, image: 'https://picsum.photos/200/300?8' },
  { id: 9, image: 'https://picsum.photos/200/300?9' },
  { id: 10, image: 'https://picsum.photos/200/300?10' },
  { id: 11, image: 'https://picsum.photos/200/300?11' },
  { id: 12, image: 'https://picsum.photos/200/300?12' },
];

// Featured Items Section
const featuredItems = [
  { id: 1, image: 'https://picsum.photos/200/300?1' },
  { id: 2, image: 'https://picsum.photos/200/300?2' },
  { id: 3, image: 'https://picsum.photos/200/300?3' },
  { id: 4, image: 'https://picsum.photos/200/300?4' },
];


function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* <NavBar /> */}

      <div className="hero">
        <img src={slides[currentSlide].image} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>{slides[currentSlide].heading}</h1>
          <p>{slides[currentSlide].description}</p>
          <button className="shop-now" onClick={nextSlide}>Shop Now</button>
        </div>
        <div className="hero-navigation">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`nav-bar ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className="about-us">
        <div className="about-sections">
          <div className="about-section">
            <h3>Wide Range of Products</h3>
            <p>We offer a wide selection of the latest gadgets and electronics at competitive prices.</p>
          </div>
          <div className="about-section">
            <h3>Quality Assurance</h3>
            <p>Our products go through rigorous quality checks to ensure the best experience for our customers.</p>
          </div>
          <div className="about-section">
            <h3>Customer Support</h3>
            <p>We provide 24/7 customer support to help you with any questions or issues.</p>
          </div>
          <div className="about-section">
            <h3>Fast Delivery</h3>
            <p>Enjoy quick and reliable delivery services to get your products on time.</p>
          </div>
        </div>
      </div>

      {/* Trending Items Section */}
      <div className="trending-items">
        <div className="trending-list">
          {trendingItems.map(item => (
            <div
              key={item.id}
              className="trending-item"
              onClick={() => navigate(item.link)}
            >
              <img src={item.image} alt="Trending Item" />
            </div>
          ))}
        </div>
      </div>

      {/* Trading Collection Section */}
      <div className="trading-collection">
        <h2>Tranding Collection</h2>
        <div className="trading-grid">
          {tradingItems.map((item) => (
            <div key={item.id} className="trading-item">
              <img src={item.image} alt={`Trading Item ${item.id}`} />
            </div>
          ))}
        </div>
      </div>

      {/*Inside the return statement of HomePage component*/}
      <div className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-list">
          {featuredItems.map(item => (
            <div key={item.id} className="featured-item">
              <img src={item.image} alt={`Featured Item ${item.id}`} />
            </div>
          ))}
        </div>
      </div>

      

      

      <Footer />
    </div>
  );
}

export default HomePage;
