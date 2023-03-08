import { useState } from "react";
import {Form, Button, Label, Input} from "semantic-ui-react"
import { useNavigate } from "react-router-dom";

function UserProfile(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function onSubmit(e){
        e.preventDefault()
        const user = {
            email,
            username,
            password
        }

    }

    return(
        <div>
            <div className="SignUp">
            <Form onSubmit={onSubmit}>
            <Form.Group size="lg" id="email">
            <Label>Email</Label>
            <Input
                autoFocus
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" id="username">
            <Label>Username</Label>
            <Input
                name="username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" id="password">
            <Label>Password</Label>
            <Input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
            Save Changes
            </Button>
            <Button block size="lg" type="submit" >
            Delete User Forever
            </Button>
            
        </Form>
        </div>
        </div>
    )
}

export default UserProfile