import React, { useState, useEffect } from 'react';

const TriviaGame = () => {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch("https://opentdb.com/api.php?amount=20")
            const questionsList = await resp.json()
            setQuestions(questionsList)
          } catch (error) {
            alert(error)
          }
         }
        fetchData()  
      },[])

      

      const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
          setScore(score + 1);
        }
    
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
        }
      };
  
    return (
        <div>
           <h1>Trivia Game</h1>
           <h2 className='score'>Score: {score}</h2>

          {showResults? (
            <div className="final-results">
               <h1>Final Results</h1>
               <h2>
               {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
               </h2>
             </div>
             ) : (
             <div className="question-card">
               
               <h2>
               Question: {currentQuestion + 1} out of {questions.length}
               </h2>
               <h3 className="question-text">{questions[currentQuestion].text}</h3>
     
               
               <ul classname="quiz-ul">
               {questions[currentQuestion].options.map((option) => {
                    return (
                        <li className="quiz-li"
                            key={option.id}
                            onClick={() => optionClicked(option.isCorrect)}
                        >
                            {option.text}
                        </li>
                );
                    })} 
               </ul>
               
             </div>
             )}
           
         </div>
       );
  }

export default TriviaGame;