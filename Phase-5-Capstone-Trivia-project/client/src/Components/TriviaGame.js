import React, { useState, useEffect } from 'react';

const TriviaGame = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       const response = await fetch('');
//       const data = await response.json();
//       setQuestions(data.results);
//       setCurrentQuestion(data.results[0]);
//     }
//     fetchQuestions();
//   }, []);

  const checkAnswer = () => {
    if (userAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
      const nextQuestionIndex = questions.indexOf(currentQuestion) + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestion(questions[nextQuestionIndex]);
        setUserAnswer('');
      } else {
        setIsGameOver(true);
      }
    } else {
      setIsGameOver(true);
    }
  }

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  }

  if (isGameOver) {
    return (
      <div>
        <h2>Game Over</h2>
        <p>Your final score is {score} out of {questions.length}.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Trivia Game</h2>
      {/* <p>Question {questions.indexOf(currentQuestion) + 1} of {questions.length}</p>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.incorrect_answers.map(answer => (
          <li key={answer}>
            <label>
              <input type="radio" name="answer" value={answer} onChange={handleAnswerChange} />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={checkAnswer}>Submit Answer</button>
      <p>Score: {score}</p> */}
    </div>
  );
}

export default TriviaGame;