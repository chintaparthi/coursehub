import React from 'react';

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Boost your learning with ease</h1>
        <p style={styles.subHeading}>Explore a fully automated Online Course Learning Management System.</p>
        <div style={styles.buttonContainer}>
          <button 
            style={styles.signupBtn} 
            onClick={() => window.location.href = '/signup'}
          >
            Sign Up
          </button>
          <button 
            style={styles.signinBtn} 
            onClick={() => window.location.href = '/signin'}
          >
            Sign In
          </button>
        </div>
      </div>
      <div style={styles.illustrationContainer}>
        <img src="https://th.bing.com/th/id/OIP.ITljDChxoCGK3tCXopEvRwHaEI?rs=1&pid=ImgDetMain" alt="Illustration" style={styles.illustration} />
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  homeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f5f5f5', // Light background color
    padding: '20px',
    fontFamily: 'Roboto, sans-serif', // Use Roboto for text
  },
  textContainer: {
    flex: 1,
    padding: '20px',
    textAlign: 'left',
  },
  heading: {
    fontSize: '3.5em',
    marginBottom: '20px',
    fontFamily: '"Bebas Neue", sans-serif', // Use the Bebas Neue font for the heading
    color: '#333', // Dark color for heading
  },
  subHeading: {
    fontSize: '1.5em',
    marginBottom: '40px',
    color: '#555', // Gray color for subheading
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px', // Space between buttons
  },
  signupBtn: {
    padding: '15px 30px',
    backgroundColor: '#4CAF50', // Green
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  signinBtn: {
    padding: '15px 30px',
    backgroundColor: '#2196F3', // Blue
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  illustrationContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    maxWidth: '80%', // Responsive width for illustration
    height: 'auto',
  },
};

// Adding hover effects for buttons
styles.signupBtn.onMouseOver = () => {
  styles.signupBtn.backgroundColor = '#45a049'; // Darker green on hover
  styles.signupBtn.transform = 'translateY(-3px)'; // Lift effect
  styles.signupBtn.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)'; // Stronger shadow on hover
};
styles.signupBtn.onMouseOut = () => {
  styles.signupBtn.backgroundColor = '#4CAF50'; // Original green
  styles.signupBtn.transform = 'translateY(0)'; // Reset lift effect
  styles.signupBtn.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; // Reset shadow
};

styles.signinBtn.onMouseOver = () => {
  styles.signinBtn.backgroundColor = '#1976D2'; // Darker blue on hover
  styles.signinBtn.transform = 'translateY(-3px)'; // Lift effect
  styles.signinBtn.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)'; // Stronger shadow on hover
};
styles.signinBtn.onMouseOut = () => {
  styles.signinBtn.backgroundColor = '#2196F3'; // Original blue
  styles.signinBtn.transform = 'translateY(0)'; // Reset lift effect
  styles.signinBtn.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; // Reset shadow
};

export default Home;
