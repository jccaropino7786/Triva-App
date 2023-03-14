import { useNavigate } from "react-router-dom"


function Welcome({currentUser}) {

    const navigate = useNavigate()

    

    const handleClick = ()=>{

        const newGame = {
            user_id: currentUser.id,
            game_id: "4",
            score: 0
        };
        
        fetch("/user_games", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newGame),
        })
        .then(response => 
            response.json())

        navigate("/trivia_game", {replace:true})
    }

    return(
        <div>
            <h1>Quiz Show</h1>
                <div>
                    <button className="pinkButton" onClick={handleClick}>
                        Start Trivia Game
                    </button>
                    <h2 className="score2">Your High Scores</h2>
                </div>
        </div>
    )
}

export default Welcome