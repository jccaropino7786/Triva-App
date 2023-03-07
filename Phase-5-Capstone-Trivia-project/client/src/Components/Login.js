import { useState } from "react";
import {Form, Button, Label, Input} from "semantic-ui-react"
import { useNavigate } from "react-router-dom";

function LogIn({setCurrentUser, setLogin}){

    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function onSubmit(e){
        e.preventDefault()
    //     const user = {
    //         username,
    //         password
    //     }
    //     fetch('/login',{
    //         method: "POST",
    //         headers:{'Content-Type': 'application/json'},
    //         body:JSON.stringify(user)
    // })
    // .then(res => {
    //     if(res.ok){
    //         res.json().then(user => 
    //           { setCurrentUser(user)
    //             // navigate("")
    //         })
    //     } 
    //     //   else{
    //     //     res.json().then( errors => setErrors(errors))
    //     // }
    // })
    
}

return (
    <div className="SignUp">
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
      <Form.Group size="lg" controlId="username">
          <Label>Username</Label>
          <Input
            name="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        
      </Form>
      <Button onClick={()=>{setLogin(current => !current)}}> Dont Have an Account? Sign Up </Button>
    </div>

  );

}

export default LogIn