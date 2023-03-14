import React, { useState, useEffect } from 'react';

const TriviaGame = () => {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState([0]);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            // const resp = await fetch("https://opentdb.com/api.php?amount=2&type=multiple")
            const resp = await fetch("https://the-trivia-api.com/api/questions?limit=20&categories=science,history'")
            const questionsList = await resp.json()
            console.log(questionsList)
            // setQuestions(questionsList.map())
          } catch (error) {
            alert(error)
          }
         }
        fetchData()  
      },[])

      
   
      console.log(questions)
      console.log(currentQuestion)

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
              <h3 className="question-text">{questions[currentQuestion]}</h3>
     
               {/* I need to create code that brings the correct and incorrect answers together */}
               {/* <ul classname="quiz-ul">
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
               </ul> */}
               
             </div>
             )}
           
         </div>
       );
  }

export default TriviaGame;