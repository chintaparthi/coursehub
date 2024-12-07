import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [registrationData, setRegistrationData] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [registeredCourses, setRegisteredCourses] = useState([]);

  // Fetch courses and faculty on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allcourses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allpro');
        setFaculty(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchCourses();
    fetchFaculty();
  }, []);

  const handleRegister = async (coursecode) => {
    const selectedProf = selectedFaculty[coursecode];
    if (selectedProf) {
      const newEntry = {
        courseCode: coursecode,
        faculty: selectedProf,
      };
      setRegistrationData([...registrationData, newEntry]);
      setRegisteredCourses([...registeredCourses, coursecode]);
      alert(`Registered for ${coursecode} with faculty ${selectedProf}`);

      try {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const response = await axios.post('http://localhost:8080/addstudentcourse', {
          susername: loggedInUser,
          fusername: selectedProf,
          coursecode: coursecode,
        });
        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      alert('Please select a faculty before registering');
    }
  };

  const loggedInUser = localStorage.getItem('loggedInUser');

  return (
    <div className="register-container">
      <h1>Course Registration</h1>
      <h2>Welcome, {loggedInUser ? loggedInUser : 'Guest'}</h2>

      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Select Faculty</th>
            <th>Register</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.coursecode}>
              <td>{course.coursecode}</td>
              <td>{course.coursename}</td>
              <td>
                <select
                  onChange={(e) => {
                    setSelectedFaculty({
                      ...selectedFaculty,
                      [course.coursecode]: e.target.value,
                    });
                  }}
                  disabled={registeredCourses.includes(course.coursecode)} 
                >
                  <option value="">Select Faculty</option>
                  {faculty.map((prof) => (
                    <option key={prof.username} value={prof.username}>
                      {prof.username}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  onClick={() => handleRegister(course.coursecode)}
                  disabled={registeredCourses.includes(course.coursecode)} 
                >
                  {registeredCourses.includes(course.coursecode) ? 'Registered' : 'Register'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .register-container {
          padding: 20px;
          max-width: 600px;
          margin: 80px auto; /* Center the container with margin */
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          background-color: #fff; /* Added background color for better visibility */
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          padding: 8px;
          text-align: left;
          border: 1px solid #ccc;
        }
        th {
          background-color: #f4f4f4;
        }
        button {
          padding: 10px 15px;
          background-color: #a2794b;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button[disabled] {
          background-color: #ccc;
          cursor: not-allowed;
        }
        button:hover:not([disabled]) {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
