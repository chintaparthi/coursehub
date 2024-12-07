import React from 'react';

export default function Home1() {
  return (
    <div>
      <style>{`
        /* Global Styling */
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }

        .home-container {
          text-align: center;
        }

        /* Hero Section */
        .hero-section {
          background-color: #a2794b;
          color: white;
          padding: 60px 20px;
          margin-top: 80px; /* Adjust this value to move the hero section down */
        }

        .hero-section h1 {
          font-size: 3em;
          margin-bottom: 20px;
        }

        .hero-section p {
          font-size: 1.2em;
          margin-bottom: 10px;
        }

        .cta-button {
          background-color: transparent;
          color: white;
          padding: 15px 30px;
          font-size: 1.2em;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: transparent;
        }

        /* Features Section */
        .features-section {
          display: flex;
          justify-content: center;
          padding: 50px 0;
        }

        .feature-box {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin: 0 20px;
          width: 250px;
        }

        .feature-box h3 {
          color: #a2794b; /* Updated heading color */
          font-size: 1.5em;
          margin-bottom: 15px;
        }

        .feature-box p {
          font-size: 1em;
          color: #333;
        }

        /* Footer Section */
        .footer-section {
          background-color: #333;
          color: white;
          padding: 20px;
          font-size: 0.9em;
        }
      `}</style>

      <div className="home-container">
        {/* Hero Section */}
        <header className="hero-section">
          <h1>Welcome to Our Online Course Learning Management System</h1>
          <p>Your portal for effective and seamless learning experiences.</p>
          <button className="cta-button">Explore Courses</button>
        </header>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature-box">
            <h3>Quality Courses</h3>
            <p>Access a variety of top-notch courses crafted by experienced professionals.</p>
          </div>
          <div className="feature-box">
            <h3>Expert Instructors</h3>
            <p>Learn from the best in the industry to stay ahead in your career.</p>
          </div>
          <div className="feature-box">
            <h3>Student Support</h3>
            <p>Our support team is always available to help you on your learning journey.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
