import React from 'react';

const Courses = () => {
  const handleNavigation = (path) => {
    window.location.href = path; // Redirects to the specified path
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Courses Management</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleNavigation('/admin/courses/add')} style={styles.button}>
          Add Course
        </button>
        <button onClick={() => handleNavigation('/admin/courses/delete')} style={styles.button}>
          Delete Course
        </button>
        <button onClick={() => handleNavigation('/admin/courses/view')} style={styles.button}>
          View Course
        </button>
        <button onClick={() => handleNavigation('/admin/courses/edit')} style={styles.button}>
          Edit Course
        </button>
      </div>
    </div>
  );
};

// Inline CSS
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #f0f4f8, #e0e7ea)', // Light and pale gradient background
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },
  buttonContainer: {
    display: 'grid', // Using grid for a 2x2 layout
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
    gap: '20px', // Space between buttons
    width: '80%', // Limit width for the buttons
    maxWidth: '600px', // Maximum width
  },
  button: {
    padding: '20px', // Increased padding for thicker buttons
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    background: 'linear-gradient(90deg, #4CAF50, #81C784)', // Gradient background for buttons
    transition: 'background 0.3s ease',
  },
};

export default Courses;
