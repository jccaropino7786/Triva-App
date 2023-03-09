import { Link } from "react-router-dom";

function NavBar({currentUser, setCurrentUser}){

    const logout = () => {
        
        fetch('/logout', { method: 'DELETE' })
            .then(() => setCurrentUser(null))
    }

    return(
            <div id = "links">
            <ul className="nav" >
                <li><Link to="/high_scores">High Scores</Link></li>
                <li><Link to="/welcome">New Game</Link></li>
                <li><Link to="/profile">Profile</Link></li>

                { currentUser ? (<li onClick={logout}> Logout User {currentUser.username} </li>) : (
                    <>
                    <Link to="/login">Login</Link><br/>
                    </>
                    )}

            </ul>
        </div>
    )
}

export default NavBar