import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/signin");
  };

  return (
    <div style={styles.navbarContainer}>
      <div style={styles.navbar}>
        <div style={styles.logo}>Admin Dashboard</div>
        <div style={styles.navLinks}>
          <a href="/admin/professor" style={styles.navLink}>Professor</a>
          <a href="/admin/courses" style={styles.navLink}>Courses</a>
          <a href="/admin/student" style={styles.navLink}>Users</a>
          <a href="/admin/exams" style={styles.navLink}>Exams</a>
          <a href="/admin/studentcourse" style={styles.navLink}>Student Course</a> {/* New Link Added */}
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
    padding: '20px 0', // Increased padding for more height
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
    fontSize: '24px',
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
    fontSize: '18px',
  },
  logoutButton: {
    padding: '8px 16px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AdminNavbar;
