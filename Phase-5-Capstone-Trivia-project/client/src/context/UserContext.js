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
      // else {
      //   const error = res.json().then(error = setError(error))
      // }
    })
    if (!user)
    {fetchData() } 
  },[user])

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
        //   else{
        //     res.json().then( errors => setErrors(errors))
        // }
    })   
  }





  return (
    <UserContext.Provider value={{ user, setUser, oauth }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
