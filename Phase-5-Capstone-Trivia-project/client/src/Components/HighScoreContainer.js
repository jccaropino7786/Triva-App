import HighScores from "./HighScores"
import { useEffect, useState } from "react"


function HighScoreContainer() {

    const[highScores, setHighScores] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch("/user_games")
            const highScoreList = await resp.json()
            setHighScores(highScoreList)
          } catch (error) {
            alert(error)
          }
         }
        fetchData()  
      },[])

      const mappedHighScores = highScores.map((highScore) => (
        <HighScores
        key={highScore.id}
        user={highScore.user}
        score={highScore.score}
        ></HighScores>
      ))
  
    return(
        <div className="container1">
            <h1>High Scores</h1>
            <h2 className="h2">USERNAME.........SCORE</h2>
            {mappedHighScores}

        </div>
                
    )
}

export default HighScoreContainer