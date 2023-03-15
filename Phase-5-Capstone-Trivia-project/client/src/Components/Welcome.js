import YourUserGames from "./YourUserGames"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'


function Welcome({currentUser, setCurrentUser, setCurrentUserGame}) {

    // const [userGame, setUserGame] = useState()
    
    //this map doesnt work when I set state on line 34
    const mappedGames = currentUser?.user_games?.map((game) => (
        <YourUserGames
        key={game.id}
        gameID={game.id}
        name={game.name}
        score={game.score}
        setCurrentUser={setCurrentUser}
        ></YourUserGames>
      ))
    
      const navigate = useNavigate()

    const handleClick = ()=>{

        fetch("/user_games", {
            method: 'POST',
            
        })
        .then(response => 
            // console.log(response))
            response.json())
        .then((newData) => {
        // console.log(newData))
        setCurrentUser(currentUser => ({...currentUser, user_games: [...currentUser.user_games, newData] }))
        setCurrentUserGame(newData)
    })

        .then(() => navigate("/trivia_game"))
    }


    return(
        <div>
            <h1>Quiz Show</h1>
                <div>
                    <button className="pinkButton" onClick={handleClick}>
                        Start Trivia Game
                    </button>
                    <h2 className="score2">Your High Scores</h2>
                    {mappedGames} 
                </div>
        </div>
    )
}

export default Welcome