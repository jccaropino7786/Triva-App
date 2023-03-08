import './index.css';
import { Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import LogIn from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import UserProfile from './Components/UserProfile';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [login, setLogin] = useState(true)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const fetchData = () =>
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      } 
      // else {
      //   const error = res.json().then(error = setError(error))
      // }
    })
    if (!currentUser)
    {fetchData() } 
  },[currentUser])
  

  if(!currentUser) {
    return login ? <LogIn setLogin={setLogin} setCurrentUser={setCurrentUser} /> : <Signup setLogin={setLogin} setCurrentUser={setCurrentUser} /> 
  }
  return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div className="App">
        <Routes>  
          <Route className="welcome" path="/welcome" element={ <Welcome/> } />
          <Route className="profile" path="/profile" element={ <UserProfile currentUser={currentUser} setCurrentUser={setCurrentUser}/> } />
          {/* <Route className="login" path="/login" element={ <LogIn setCurrentUser={setCurrentUser} /> }/>
          <Route path="/signup" element={ <Signup setCurrentUser={setCurrentUser} /> }/> */}
        </Routes>

      </div>
    </div>
  );
}

export default App;
