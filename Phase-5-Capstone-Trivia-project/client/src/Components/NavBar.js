import { Link } from "react-router-dom";

function NavBar({currentUser, setCurrentUser}){

    const logout = () => {
        
        fetch('/logout', { method: 'DELETE' })
            .then(() => setCurrentUser(null))
    }

    return(
            <div id = "links">
            <ul className="nav" >
                <li><Link to="">High Scores</Link></li>
                <li><Link to="">New Game</Link></li>
                <li><Link to="">Profile</Link></li>

                {/* { currentUser ? (<li onClick={logout}> Logout {currentUser.email} </li>) : (
                    <>
                    <Link to="/login">Login</Link><br/>
                    </>
                    )} */}

            </ul>
        </div>
    )
}

export default NavBar