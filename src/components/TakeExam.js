import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TakeExam = () => {
  const { examId } = useParams();
  const [exam, setExam] = useState(null);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getexam/${examId}`);
        setExam(response.data);
      } catch (error) {
        console.error('Error fetching the exam:', error);
      }
    };

    fetchExam();
  }, [examId]);

  const handleResponseChange = (questionIndex, value) => {
    setResponses({ ...responses, [questionIndex]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/submitexam`, {
        examId,
        responses,
      });
      alert('Exam submitted successfully!');
      navigate('/studentexams');
    } catch (error) {
      console.error('Error submitting the exam:', error);
    }
  };

  if (!exam) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{exam.examname}</h1>
      <form onSubmit={handleSubmit}>
        {exam.questions.map((question, index) => (
          <div key={index} className="question">
            <p>
              <strong>Q{index + 1}:</strong> {question.questionText}
            </p>
            {question.type === 'multiple-choice' ? (
              question.options.map((option, optIndex) => (
                <div key={optIndex} className="option">
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={responses[index] === option}
                      onChange={(e) => handleResponseChange(index, e.target.value)}
                      required
                    />
                    {option}
                  </label>
                </div>
              ))
            ) : (
              <input
                type="text"
                value={responses[index] || ''}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                placeholder="Type your answer here"
                required
              />
            )}
          </div>
        ))}
        <button type="submit">Submit Exam</button>
      </form>
    </div>
  );
};

export default TakeExam;
