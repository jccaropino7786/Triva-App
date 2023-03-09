
function HighScores({user, score}) {

    
    return(
        <div className="high_score_div">
         {user.username}.................{score}
            
        </div>
    )
}

export default HighScores