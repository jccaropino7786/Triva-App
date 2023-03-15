import React, { useState, useEffect } from 'react';

const TriviaGame = ({currentUser, setCurrentUser, userGame}) => {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([])
    const [answer, setAnswer] = useState("")

    
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            // const resp = await fetch("https://opentdb.com/api.php?amount=2&type=multiple")
            const resp = await fetch("https://the-trivia-api.com/api/questions?limit=3&categories=science,history'")
            const questionsList = await resp.json()
            // console.log(questionsList)
            setQuestions(questionsList)
          } catch (error) {
            alert(error)
          }
         }
        fetchData()  
      },[])

      console.log(questions)

    // const answers = [questions[currentQuestion]['correctAnswer']] + questions[currentQuestion]['incorrectAnswers']
    

      const answerSubmitted = (e) => {
        e.preventDefault()
        // Increment the score
        if (answer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()) {
          setAnswer("")
          setScore(currentScore => currentScore + 1);
        }

        fetch(`/user_games/${userGame.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( score )
          })
            .then(response => {
                console.log(response)
              
              if (response.status === 200) {
                response.json().then(data => {
                  console.log(data)
                    //update State
                })
              } else {
                response.json().then(error => alert(error.errors))
              }
            })
            .catch(error => alert(error));
    
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(thisQuestion => thisQuestion + 1);
        } else {
          setShowResults(true);
        }
      };


      if (questions.length === 0) return <h1>Loading...</h1>
    return (
        <div>
           <h1>Trivia Game</h1>
           <h2 className='score'>Score: {score}</h2>

          {showResults? (
            <div className="final-results">
               <h2>Final Score</h2>
               <h2>
               {score} out of {questions.length} correct 
               </h2>
             </div>
             ) : (
             <div className="question-card">
               
               <h2>
               Question: {currentQuestion + 1} out of {questions.length}
               </h2>
              <h3 className="question-text">{questions[currentQuestion].question}</h3>
                    <form onSubmit={answerSubmitted}>
                        <input value={answer} onChange={(e)=>setAnswer(e.target.value)} placeholder='Answer...'></input>
                        <button>Final Answer</button>
                    </form>
               {/* I need to create code that brings the correct and incorrect answers together */}
               {/* <ul classname="quiz-ul">
               
               {answers.map((option) => {
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