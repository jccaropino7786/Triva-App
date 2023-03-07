import './index.css';
import { Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import LogIn from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [login, setLogin] = useState(true)
  const [errors, setErrors] = useState([])



  if(!currentUser) {
    return login ? <LogIn setLogin={setLogin} setCurrentUser={setCurrentUser} /> : <Signup setLogin={setLogin} setCurrentUser={setCurrentUser} /> 
  }
  return (
    <div>
      <NavBar/>
      <div className="App">
        <Routes>  
          <Route className="login" path="/login" element={ <LogIn setCurrentUser={setCurrentUser} /> }/>
          {/* <Route path="/signup" element={ <SignUp setCurrentUser={setCurrentUser} /> }/> */}
        </Routes>

      </div>
    </div>
  );
}

export default App;
