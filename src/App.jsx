import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { fetchRandomQuestion } from './utils/api.js';

function App() {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const getNewQuestion = async () => {
    const randomQuestion = await fetchRandomQuestion();
    console.log("Fetched Question Data:", randomQuestion); // Check what’s returned

    if (randomQuestion) {
        setQuestion(randomQuestion.question || "Error: No question");
        setOption1(randomQuestion.option1 || "Error: No option1");
        setOption2(randomQuestion.option2 || "Error: No option2");
        
        localStorage.setItem("Last Question", JSON.stringify(randomQuestion));
    }
  };

  useEffect(() => {
    getNewQuestion(); // Get a question when the component mounts
  }, []);

  return (
    <div className="App">
      <h1>Would You Rather?</h1>
      <p>{question}</p>
      <div className="btn-container">
        <button className="btn-1" onClick={getNewQuestion}>Option 1: {option1}</button>
        <button className="btn-2" onClick={getNewQuestion}>Option 2: {option2}</button>
      </div>
    </div>
  );
}

export default App;
