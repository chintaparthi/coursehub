import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData to include files and text fields
    const formData = new FormData();
    formData.append('coursename', courseName);
    formData.append('coursecode', courseCode);
    if (pdfFile) formData.append('pdfFile', pdfFile);
    if (imageFile) formData.append('imageFile', imageFile);

    // Make the POST request
    axios
      .post('http://localhost:8080/addcourse', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        alert(`Course Added: \nName: ${courseName}, Code: ${courseCode}`);
        setCourseName('');
        setCourseCode('');
        setPdfFile(null);
        setImageFile(null);
      })
      .catch((err) => {
        console.error('Error adding course:', err);
        alert('Failed to add course. Please try again.');
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add Course</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label} htmlFor="courseName">Course Name</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          style={styles.input}
          placeholder="Enter course name"
          required
        />

        <label style={styles.label} htmlFor="courseCode">Course Code</label>
        <input
          type="text"
          id="courseCode"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          style={styles.input}
          placeholder="Enter course code"
          required
        />

        <label style={styles.label} htmlFor="pdfFile">PDF File</label>
        <input
          type="file"
          id="pdfFile"
          accept="application/pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          style={styles.input}
        />

        <label style={styles.label} htmlFor="imageFile">Image File</label>
        <input
          type="file"
          id="imageFile"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          style={styles.input}
        />

        <button type="submit" style={styles.submitButton}>Add Course</button>
      </form>
    </div>
  );
};

// Inline CSS remains unchanged


// Inline CSS
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  label: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  submitButton: {
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    background: 'linear-gradient(90deg, #4CAF50, #81C784)', // Gradient background
    transition: 'background 0.3s ease',
  },
};

export default AddCourse;
