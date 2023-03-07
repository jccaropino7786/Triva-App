import './index.css';
import { Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import LogIn from './Components/Login';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
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
