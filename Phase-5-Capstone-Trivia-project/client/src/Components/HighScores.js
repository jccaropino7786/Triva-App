import { useNavigate } from "react-router-dom"
import { Card } from "semantic-ui-react"


function HighScores({user, score}) {

    
    return(
        <div className="high_score_div">
         {user.username}.................{score}
            
        </div>
    )
}

export default HighScores