import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha'; // Import the reCAPTCHA component

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState(''); // State for storing the reCAPTCHA token

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token); // Update the token on CAPTCHA completion
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Basic validation
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    if (!captchaToken) {
      setError('Please complete the CAPTCHA');
      return;
    }

    axios
      .post("http://localhost:8080/signin", {
        username: username,
        password: password,
        captchaToken: captchaToken, // Include the CAPTCHA token in the request
      })
      .then((res) => {
        if (res.data === "admin") {
          alert("Admin login successful");
          localStorage.setItem('loggedInUser', username);
          navigate("/admin/professor");
        } else if (res.data === "user") {
          alert("User login successful");
          localStorage.setItem('loggedInUser', username);
          navigate("/user/home1");
        } else {
          alert("Login unsuccessful");
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.signinContainer}>
        <h2 style={styles.heading}>Sign In</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
              placeholder="Username"
            />
          </div>

          <div style={styles.formGroup}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="Password"
            />
          </div>

          <div style={styles.formGroup}>
            <ReCAPTCHA
              sitekey="your-site-key" // Replace with your reCAPTCHA site key
              onChange={handleCaptchaChange}
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            LOGIN
          </button>

          <div style={styles.rememberMeContainer}>
            <label style={styles.rememberMeLabel}>
              <input type="checkbox" />
              Remember me
            </label>
            <span style={styles.forgotPassword} onClick={() => alert("Reset password functionality to be implemented.")}>
              Forgot Password?
            </span>
          </div>
        </form>

        <p style={styles.registerPrompt}>
          If you haven't registered, <span style={styles.link} onClick={() => navigate('/signup')}>click here</span> to register.
        </p>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  backgroundContainer: {
    minHeight: '100vh', // Full height of the viewport
    backgroundImage: `url('https://img.freepik.com/free-photo/blue-surface-with-study-tools_23-2147864592.jpg')`, // Set the background image
    backgroundRepeat: 'repeat', // Repeat the image
    backgroundSize: 'cover', // Cover the entire background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinContainer: {
    maxWidth: '800px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
    color: '#333', // Dark text
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white background for the form
    
  },
  heading: {
    marginBottom: '20px',
    color: '#007bff', // Blue heading
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '25px', // More rounded edges
    border: '1px solid #ccc', // Light border
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    backgroundColor: '#f0f8ff', // Light background for inputs
    color: '#333', // Dark text
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff', // Blue button
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  rememberMeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
  },
  rememberMeLabel: {
    fontSize: '14px',
  },
  forgotPassword: {
    color: '#007bff', // Link color for forgot password
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  registerPrompt: {
    marginTop: '15px',
  },
  link: {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Signin;
