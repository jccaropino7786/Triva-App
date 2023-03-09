import { useNavigate } from "react-router-dom"


function Welcome() {

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate("/new-game")
    }

    return(
        <div>
            <h1>Quiz Show</h1>
                <div>
                    <button className="pinkButton" onClick={handleClick}>
                        Start Trivia Game
                    </button>
                </div>
        </div>
    )
}

export default Welcome