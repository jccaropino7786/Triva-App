import { useState } from "react";
import {Form, Button, Label, Input} from "semantic-ui-react"
import { useNavigate } from "react-router-dom";

function UserProfile({currentUser, setCurrentUser}){

    const navigate = useNavigate();
    const [email, setEmail] = useState(currentUser.email)
    const [username, setUsername] = useState(currentUser.username)
    
    

    function validateForm() {
        return email.length > 0 && username.length > 0;
    }

    function onSubmit(e){
        e.preventDefault()
        const user = {
            email: email,
            username: username
        }
        debugger
        fetch(`/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( user )
          })
            .then(response => {
                console.log(response)
              
              if (response.status === 200) {
                response.json().then(data => {
                  console.log(data)
                  setCurrentUser(data)
                })
                .then ( () => navigate("/welcome"))
              } else {
                response.json().then(error => alert(error.errors))
              }
            })
            .catch(error => alert(error));


    }

    const handleDelete = () => {
        // Simple DELETE request with fetch
        fetch(`/users/${currentUser.id}`, { method: 'DELETE' })
        .then(() => setCurrentUser(null))
      }

    return(
        <div>
            
            <div className="SignUp">
                <h2>Edit Profile</h2>
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
            
            <Button block size="lg" type="submit" disabled={!validateForm()}>
            Save Changes
            </Button>
            <Button block size="lg" onClick={handleDelete} >
            Delete User Forever
            </Button>
            
        </Form>
        </div>
        </div>
    )
}

export default UserProfile