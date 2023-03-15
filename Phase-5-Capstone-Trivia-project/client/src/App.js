import './index.css';
import { Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import LogIn from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import UserProfile from './Components/UserProfile';
import HighScoreContainer from './Components/HighScoreContainer';
import TriviaGame from './Components/TriviaGame';
import { useState, useContext } from 'react';
import { UserContext } from "../src/context/UserContext";


function App() {
  // const [currentUser, setCurrentUser] = useState(null)
  const [login, setLogin] = useState(false)
  const [currentUserGame, setCurrentUserGame] = useState(null)

  const {user} = useContext(UserContext)
  // const [errors, setErrors] = useState([])

  

  if(!user) {
    return login ? <LogIn setLogin={setLogin} 
    // errors={errors} setErrors={setErrors} 
     /> : <Signup setLogin={setLogin}  /> 
  }
  return (
    <div>
      <NavBar />
      <div className="App">
        <Routes>  
          <Route className="welcome" path="/welcome" element={ <Welcome   setCurrentUserGame={setCurrentUserGame}/> } />
          <Route className="profile" path="/profile" element={ <UserProfile  /> } />
          <Route className="high_score" path="/high_scores" element={ <HighScoreContainer/> } />
          <Route className="trivia_game" path="/trivia_game" element={ <TriviaGame setCurrentUserGame={setCurrentUserGame} currentUserGame={currentUserGame} /> } />
          {/* <Route className="login" path="/login" element={ <LogIn setCurrentUser={setCurrentUser} /> }/>
          <Route path="/signup" element={ <Signup setCurrentUser={setCurrentUser} /> }/> */}
        </Routes>

      </div>
    </div>
  );
}

export default App;
