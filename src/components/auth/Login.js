import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Login.css';


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user: {userName: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return (
        <div>
            <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Oswald', color: 'red'}}>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} placeholder={username === '' ? "Username is required" : null} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={password === '' ? "Password is required" : null} name="password" value={password}/>
                </FormGroup>
                <Button style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;