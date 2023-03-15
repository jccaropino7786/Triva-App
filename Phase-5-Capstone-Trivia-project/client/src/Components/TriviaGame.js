import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TriviaGame = ({currentUser, setCurrentUser, currentUserGame, setCurrentUserGame}) => {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([])
    const [answer, setAnswer] = useState("")

    const navigate = useNavigate()

    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const resp = await fetch("https://the-trivia-api.com/api/questions?limit=10&categories=science,history'")
              const questionsList = await resp.json()
              
              const questionResponse = await fetch('/questions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ questions: questionsList }),
              })
              const questionData = await questionResponse.json()
              
              setQuestions(questionData)
              // create question, answer, and question-answer objects for each question
              // for (const question of questionsList) {
                //   try {
              //     const questionResponse = await fetch('/questions', {
              //       method: 'POST',
              //       headers: {
              //         'Content-Type': 'application/json',
              //       },
              //       body: JSON.stringify({ question_text: question.question }),
              //     })
              //     const questionData = await questionResponse.json()
                  
              //     const answerResponse = await fetch('/answers', {
              //       method: 'POST',
              //       headers: {
              //         'Content-Type': 'application/json',
              //       },
              //       body: JSON.stringify({ answer_text: question.correctAnswer }),
              //     })
              //     const answerData = await answerResponse.json()
                  
              //     const questionAnswerResponse = await fetch('/question_answers', {
              //       method: 'POST',
              //       headers: {
              //         'Content-Type': 'application/json',
              //       },
              //       body: JSON.stringify({ 
              //         question_id: questionData.id,
              //         answer_id: answerData.id,
              //         user_game_id: sessionStorage.getItem('user_game.id'),
              //       }),
              //     })
              //     const questionAnswerData = await questionAnswerResponse.json()
                  
              //     console.log(questionData, answerData, questionAnswerData)
              //   } catch (error) {
              //     alert(error)
          //       }
          //     }
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
        if (answer.toLowerCase() === questions[currentQuestion].answer.answer_text.toLowerCase()) {
          setAnswer("")
          // debugger
          fetch(`/user_games/${currentUser.user_games[currentUser.user_games.length -1].id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( {score: score + 1} )
          })
          .then(response => {
            console.log(response)
            
            if (response.status === 200) {
              response.json().then(data => {
                console.log(data)
                setScore(currentScore => currentScore + 1);
                setCurrentUser(currentUserObj => ({...currentUserObj, user_games: currentUserObj.user_games.map(ug => ug.id === data.id ? data : ug)}))
                setCurrentUserGame(data)
              })
            } else {
              response.json().then(error => alert(error.errors))
            }
          })
          .catch(error => alert(error));
        }
    
        if (currentQuestion < 9) {
          setCurrentQuestion(thisQuestion => thisQuestion + 1);
        } else {
          setShowResults(true);
        }
      };

      if(!currentUserGame){navigate('/welcome')}
      if (questions.length === 0) return <h1>Loading...</h1>
      console.log(questions, currentQuestion)
    return (
        <div>
           <h1>Trivia Game</h1>
           <h2 className='score'>Score: {score}</h2>

          {showResults? (
            <div className="final-results">
               <h2>Final Score</h2>
               <h2>
               {score} out of 10 correct 
               </h2>
             </div>
             ) : (
             <div className="question-card">
               
               <h2>
               Question: {currentQuestion + 1} out of 10
               </h2>
              <h3 className="question-text">{questions[currentQuestion].question.question_text}</h3>
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