import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/signin");
  };

  return (
    <div style={styles.navbarContainer}>
      <div style={styles.navbar}>
        <div style={styles.logo}>User Dashboard</div>
        <div style={styles.navLinks}>
          <a href="/user/home1" style={styles.navLink}>Home</a>
          <a href="/user/register" style={styles.navLink}>Registering Courses</a>
          <a href="/user/getcourses/" style={styles.navLink}>Courses</a>
          
          <a href="/user/studentexam" style={styles.navLink}>Exams</a>
          <a href="/user/contactus" style={styles.navLink}>Contact Us</a>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline CSS
const styles = {
  navbarContainer: {
    width: '100%',
    backgroundColor: '#a2794b',
    padding: '20px 0', // Increased padding for height
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    color: 'white',
    fontSize: '28px', // Increased font size for the logo
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px', // Increased font size for nav links
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px', // Increased font size for logout button
  },
};

export default UserNavbar;
