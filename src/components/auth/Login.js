import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Login.css';
import APIURL from '../../helpers/environment';
import PetsIcon from '@material-ui/icons/Pets';


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        console.log(username, password);
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
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
        <div className="loginDiv">
            <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Oswald', color: 'red'}}>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username"><PetsIcon fontSize="small" style={{color: "red"}}/>   Username</Label>
                    <br />
                    <input onChange={(e) => setUsername(e.target.value)} placeholder={username === '' ? "Username is required" : null} name="username" pattern="[a-zA-Z0-9].{4,}" required value={username} title="Username must be at least 4 characters and contain at least 1 number" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password"><PetsIcon fontSize="small" style={{color: "red"}}/>   Password</Label>
                    <br />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={password === '' ? "Password is required" : null} name="password" pattern="[a-zA-Z0-9].{5,}" required value={password} title="Password must be at least 5 characters and contain at least 1 number" />
                </FormGroup>
                <button id="loginButton" type="submit">Login</button>
            </Form>
        </div>
    )
}

export default Login;