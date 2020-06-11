import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './Signup.css';

const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    console.log(firstName, lastName, username, password);
        event.preventDefault();
        fetch("http://localhost:3000/user/signup", {
            method: 'POST',
            body: JSON.stringify({user:{firstName: firstName, lastName: lastName, userName: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div className="signupDiv">
            <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Oswald', color: 'red'}}>Sign Up</h1>
            <br />
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} placeholder={firstName === '' ? "First name is required" : null} name="firstName" value={firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} placeholder={lastName === '' ? "Last name is required" : null} name="lastName" value={lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} placeholder={username === '' ? "Username is required" : null} name="username" value={username}/>
                    {/* {username === '' ? "Username is required" : null} */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={password === '' ? "Password is required" : null} name="password" value={password}/>
                </FormGroup>
                <Button style={{alignItems: 'center'}} type="submit">Create Account</Button>
            </Form>
        </div>
    )
}

export default Signup;