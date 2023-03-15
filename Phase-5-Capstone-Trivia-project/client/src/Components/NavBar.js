import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function NavBar(){

    const {user, logout} = useContext(UserContext)

    
    return(
            <div id = "links">
            <ul className="nav" >
                <li><Link to="/high_scores">High Scores</Link></li>
                <li><Link to="/welcome">New Game</Link></li>
                <li><Link to="/profile">Profile</Link></li>

                { user ? (<li onClick={logout}> Logout User {user.username} </li>) : (
                    <>
                    <Link to="/login">Login</Link><br/>
                    </>
                    )}

            </ul>
        </div>
    )
}

export default NavBar