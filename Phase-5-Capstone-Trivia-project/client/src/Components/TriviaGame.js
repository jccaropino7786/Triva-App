import React, { useState, useEffect } from 'react';

const TriviaGame = ({currentUser, setCurrentUser, currentUserGame}) => {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([])
    const [answer, setAnswer] = useState("")

    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const resp = await fetch("https://the-trivia-api.com/api/questions?limit=3&categories=science,history'")
              const questionsList = await resp.json()
              setQuestions(questionsList)
              
              // create question, answer, and question-answer objects for each question
              for (const question of questionsList) {
                try {
                  const questionResponse = await fetch('/questions', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question_text: question.question }),
                  })
                  const questionData = await questionResponse.json()
                  
                  const answerResponse = await fetch('/answers', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ answer_text: question.correctAnswer }),
                  })
                  const answerData = await answerResponse.json()
                  
                  const questionAnswerResponse = await fetch('/question_answers', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                      question_id: questionData.id,
                      answer_id: answerData.id,
                      user_game_id: sessionStorage.getItem('user_game_id'),
                    }),
                  })
                  const questionAnswerData = await questionAnswerResponse.json()
                  
                  console.log(questionData, answerData, questionAnswerData)
                } catch (error) {
                  alert(error)
                }
              }
            } catch (error) {
              alert(error)
            }
          }
        fetchData()
        //for each question create question.question
        //create question
        //create answer for each create question.answer
        //create question answer for each question for the current user attach the question and answer that was asked to the user
        
      },[])

      console.log(questions)

    

      const answerSubmitted = (e) => {
        e.preventDefault()
        // Increment the score
        if (answer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()) {
          setAnswer("")
          setScore(currentScore => currentScore + 1);
        }

        fetch(`/user_games/${currentUser.user_game.id}`, {
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
              
               
             </div>
             )}
           
         </div>
       );
  }

export default TriviaGame;