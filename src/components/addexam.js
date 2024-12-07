import React, { useState } from 'react';
import axios from 'axios';

const AddExams = () => {
  const [examid, setExamid] = useState('');
  const [examName, setExamName] = useState('');
  const [examCourseCode, setExamCourseCode] = useState('');
  const [examTime, setExamTime] = useState('');
  const [examDate, setExamDate] = useState('');
  const [isActive, setIsActive] = useState('Yes');
  const [questions, setQuestions] = useState([]);

  // Add a new question
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { type: 'multiple-choice', questionText: '', options: ['', '', '', ''], correctAnswer: '' },
    ]);
  };

  // Update a question's field
  const updateQuestion = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  // Update a specific option of a question
  const updateOption = (qIndex, optIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[optIndex] = value;
    setQuestions(updatedQuestions);
  };

  // Delete a question
  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  // Submit the exam and questions
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/addexam', {
      examid,
      examname: examName,
      examtime: examTime,
      examdate: examDate,
      examcoursecode: examCourseCode,
      isactive: isActive,
      questions,
    })
      .then(response => {
        alert('Exam and questions added successfully');
      })
      .catch(error => {
        console.error('There was an error adding the exam and questions!', error);
      });

    // Reset form fields
    setExamid('');
    setExamName('');
    setExamCourseCode('');
    setExamTime('');
    setExamDate('');
    setIsActive('Yes');
    setQuestions([]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add Exam</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Exam details */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Exam ID:</label>
          <input
            type="text"
            value={examid}
            onChange={(e) => setExamid(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Exam Name:</label>
          <input
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Course Code:</label>
          <input
            type="text"
            value={examCourseCode}
            onChange={(e) => setExamCourseCode(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Exam Time:</label>
          <input
            type="time"
            value={examTime}
            onChange={(e) => setExamTime(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Exam Date:</label>
          <input
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Is Active:</label>
          <select
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
            required
            style={styles.input}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Add Questions */}
        <h2 style={styles.subtitle}>Add Questions</h2>
        {questions.map((q, qIndex) => (
          <div key={qIndex} style={styles.questionContainer}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Question Type:</label>
              <select
                value={q.type}
                onChange={(e) => updateQuestion(qIndex, 'type', e.target.value)}
                style={styles.input}
              >
                <option value="multiple-choice">Multiple Choice</option>
                <option value="blanks">Fill in the Blanks</option>
              </select>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Question Text:</label>
              <input
                type="text"
                value={q.questionText}
                onChange={(e) => updateQuestion(qIndex, 'questionText', e.target.value)}
                required
                style={styles.input}
              />
            </div>
            {q.type === 'multiple-choice' && (
              <>
                {q.options.map((opt, optIndex) => (
                  <div key={optIndex} style={styles.inputGroup}>
                    <label style={styles.label}>Option {optIndex + 1}:</label>
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => updateOption(qIndex, optIndex, e.target.value)}
                      required
                      style={styles.input}
                    />
                  </div>
                ))}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Correct Answer:</label>
                  <input
                    type="text"
                    value={q.correctAnswer}
                    onChange={(e) => updateQuestion(qIndex, 'correctAnswer', e.target.value)}
                    required
                    style={styles.input}
                  />
                </div>
              </>
            )}
            <button
              type="button"
              onClick={() => deleteQuestion(qIndex)}
              style={styles.deleteButton}
            >
              Delete Question
            </button>
          </div>
        ))}
        <button type="button" onClick={addQuestion} style={styles.addButton}>Add Question</button>
        <button type="submit" style={styles.button}>Add Exam</button>
      </form>
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
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },
  subtitle: {
    fontSize: '24px',
    margin: '20px 0',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '400px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    background: 'linear-gradient(90deg, #4CAF50, #81C784)',
    transition: 'background 0.3s ease',
  },
  addButton: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    background: '#2196F3',
    transition: 'background 0.3s ease',
    marginBottom: '20px',
  },
  deleteButton: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    background: '#e74c3c',
    transition: 'background 0.3s ease',
    marginTop: '10px',
  },
  questionContainer: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '15px',
    backgroundColor: '#fff',
  },
};

export default AddExams;
