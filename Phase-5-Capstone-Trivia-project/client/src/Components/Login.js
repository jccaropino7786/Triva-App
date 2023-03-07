import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function LogIn({setCurrentUser, setLogin}){

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    function onSubmit(e){
        e.preventDefault()
        const user = {
            email,
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
              { setCurrentUser(user)
                navigate("/projects")})
        } 
        //   else{
        //     res.json().then( errors => setErrors(errors))
        // }
    })
    
}

return (
    <div className="SignUp">
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
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