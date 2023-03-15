import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = () =>
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setUser(user))
      } 
      else {
        res.json().then(error => alert(error.errors))
      }
    })
    if (!user)
    {fetchData() } 
  },[user])

  const logout = () => {
        
    fetch('/logout', { method: 'DELETE' })
        .then(() => setUser(null))
}


  const oauth = (userObject) => {
    fetch("/oauth", {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(userObject)
     })
     .then(res => {
        if(res.status === 201){
            res.json().then(setUser)
            .then(()=>navigate("/welcome"))
        } 
         else {
          res.json().then(error => alert(error.errors))
        }
    })   
  }

 

  return (
    <UserContext.Provider value={{ user, setUser, oauth, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
