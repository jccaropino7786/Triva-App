import { useState } from "react";
import {Form, Button, Label, Input} from "semantic-ui-react"
import { useNavigate } from "react-router-dom";

function Signup({setCurrentUser, setLogin}){

    // const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function onSubmit(e){
        e.preventDefault()
    //     const user = {
    //         email,
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
    <div> 
        <div className="SignUp">
        <h1>Sign Up</h1>
        <Form onSubmit={onSubmit}>
            <Form.Group size="lg" controlId="email">
            <Label>Email</Label>
            <Input
                autoFocus
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
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
            Sign Up!!
            </Button>
            
        </Form>
        <Button onClick={()=>{setLogin(current => !current)}}> Already have an account? Login </Button>
        </div>
    </div>

  );

}

export default Signup