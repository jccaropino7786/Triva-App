import { useState, useContext } from "react";
import {Form, Button, Label, Input} from "semantic-ui-react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LogIn({setLogin}){

    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const {setUser} = useContext(UserContext)

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch('/login',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => 
              { setUser(user)
                navigate("/welcome")
            })
        } 
        else {
          res.json().then(error => alert(error.errors))
        }
    })
    
}

return (
    <div className="SignUp">
      
      <h2>Login</h2>
      <Form onSubmit={onSubmit}>
      <Form.Group size="large" id="username">
          <Label>Username</Label>
          <Input
            name="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="large" id="password">
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button size="large" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        
      </Form>
      <Button onClick={()=>{setLogin(current => !current)}}> Dont Have an Account? Sign Up </Button>

    </div>

  );

}

export default LogIn