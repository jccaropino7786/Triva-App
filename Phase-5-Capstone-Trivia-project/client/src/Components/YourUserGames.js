import { useContext } from "react"
import { UserContext } from "../context/UserContext"


function YourUserGames({ score, gameID}) {

    const {setUser} = useContext(UserContext)

    const handleDelete = () => {
        fetch(`/user_games/${gameID}`, { method: 'DELETE' })
        .then(() => setUser())
                // console.log(current => current.map(game => game.id !== gameID))))
    }
    
    return(
        <div className="player_score_div">
        Trivia.....{score} points...
        <button>Try Again</button>...
         <button onClick={handleDelete} >Delete Game</button> 
            
        </div>
    )
}

export default YourUserGames