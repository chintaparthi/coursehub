import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function StudentExams() {
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allexams');
        setExams(response.data);
      } catch (error) {
        console.error('Error fetching exam data:', error);
      }
    };

    fetchExams();
  }, []);

  const handleTakeExam = (examId) => {
    navigate(`/take-exam/${examId}`);
  };

  return (
    <div className="exam-container">
      <h1>Available Exams</h1>
      {exams.length > 0 ? (
        <div className="exam-grid">
          {exams.map((exam, index) => (
            <div key={index} className="exam-box">
              <h2>{exam.examname}</h2>
              <p><strong>Course:</strong> {exam.examcoursecode}</p>
              <p><strong>Date:</strong> {exam.examdate}</p>
              <p><strong>Time:</strong> {exam.examtime}</p>
              <p><strong>Status:</strong> {exam.isactive}</p>
              {exam.isactive === 'Yes' && (
                <button
                  className="take-exam-button"
                  onClick={() => handleTakeExam(exam.examid)}
                >
                  Take Exam
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No exams available at the moment.</p>
      )}

      {/* CSS for Exam Boxes */}
      <style>{`
        .exam-container {
          padding: 40px;
          max-width: 1200px;
          margin: auto;
          background-color: #f7f9fc;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .exam-container h1 {
          text-align: center;
          font-size: 2.5rem;
          color: #34495e;
          margin-bottom: 30px;
          font-family: 'Roboto', sans-serif;
          letter-spacing: 1.5px;
        }

        .exam-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .exam-box {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-left: 6px solid #3498db;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .exam-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .exam-box h2 {
          margin: 0 0 10px;
          font-size: 1.5rem;
          color: #2c3e50;
        }

        .exam-box p {
          margin: 5px 0;
          font-size: 1rem;
          color: #7f8c8d;
        }

        .exam-box p strong {
          color: #2c3e50;
        }

        .take-exam-button {
          margin-top: 15px;
          padding: 10px 15px;
          font-size: 1rem;
          font-weight: bold;
          color: white;
          background-color: #27ae60;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
          text-align: center;
        }

        .take-exam-button:hover {
          background-color: #2ecc71;
        }

        .exam-container p {
          text-align: center;
          color: #95a5a6;
          font-family: 'Roboto', sans-serif;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
