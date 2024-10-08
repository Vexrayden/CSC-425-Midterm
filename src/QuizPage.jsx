import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({  //store users answer for the dev questions
    q1: '',
    q2: '',
    q3: '',

  });

  const handleChange = (e) => {         // handle change of inputs
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {       //submits the quis
    e.preventDefault();
    // answer check
    if (answers.q1 && answers.q2 && answers.q3) {
      navigate('/welcome'); // Navigate to Welcome page if else
    } else {
      alert('Please answer all questions before submitting.');
    }
  };

  return (
    <div>
      <h1>Take Quiz to Qualify</h1>
      <p>Welcome to the qualifier quiz</p>
      
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div>
          <p>1. What is the time complexity of binary search?</p>
          <label>
            <input
              type="radio"
              name="q1"
              value="O(log n)"
              onChange={handleChange}
              required
            />
            O(log n)
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="O(n)"
              onChange={handleChange}
            />
            O(n)
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="O(n^2)"
              onChange={handleChange}
            />
            O(n^2)
          </label>
        </div>

        {/* Question 2 */}
        <div>
          <p>2. Which of the following is a JavaScript framework?</p>
          <label>
            <input
              type="radio"
              name="q2"
              value="React"
              onChange={handleChange}
              required
            />
            React
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="Django"
              onChange={handleChange}
            />
            Django
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="Laravel"
              onChange={handleChange}
            />
            Laravel
          </label>
        </div>

        {/* Question 3 */}
        <div>
          <p>3. What does CSS stand for?</p>
          <label>
            <input
              type="radio"
              name="q3"
              value="Cascading Style Sheets"
              onChange={handleChange}
              required
            />
            Cascading Style Sheets
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="Computer Style Sheets"
              onChange={handleChange}
            />
            Computer Style Sheets
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="Creative Style Sheets"
              onChange={handleChange}
            />
            Creative Style Sheets
          </label>
        </div>

        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default QuizPage;
  
  