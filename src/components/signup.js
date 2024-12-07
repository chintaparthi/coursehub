import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    // Check if username contains only numbers
    const usernamePattern = /^[0-9]+$/;
    if (!usernamePattern.test(username)) {
      setError('Username must contain only numbers');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear error if all validation passes
    setError('');

    // Send data to the server
    axios
      .post("http://localhost:8080/signup", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("Signup successful:", res.data);
        navigate("/signin");
      })
      .catch((error) => {
        console.error('Signup error:', error);
        setError("An error occurred during registration. Please try again.");
      });
  };

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.signupContainer}>
        <h2 style={styles.heading}>Signup</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your username (numbers only)"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your email"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your password"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
              placeholder="Confirm your password"
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={styles.registerPrompt}>
          If you already registered, <span style={styles.link} onClick={() => navigate('/signin')}>click here</span> to sign in.
        </p>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  backgroundContainer: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url('https://img.freepik.com/free-photo/high-angle-view-laptop-stationeries-blue-background_23-2147880456.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    maxWidth: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    background: 'white',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.2s',
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  registerPrompt: {
    textAlign: 'center',
    marginTop: '15px',
  },
  link: {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Signup;
