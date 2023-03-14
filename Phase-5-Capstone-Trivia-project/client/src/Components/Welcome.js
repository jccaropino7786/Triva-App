import { useNavigate } from "react-router-dom"


function Welcome() {

    const navigate = useNavigate()

    

    const handleClick = ()=>{
        navigate("/trivia_game")
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