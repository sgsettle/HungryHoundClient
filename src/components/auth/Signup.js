import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './Signup.css';
import APIURL from '../../helpers/environment';
import PetsIcon from '@material-ui/icons/Pets';


const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    console.log(firstName, lastName, username, password);
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {
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
                    <Label htmlFor="firstName"><PetsIcon fontSize="small" style={{color: "red"}}/>   First Name</Label>
                    <br />
                    <input onChange={(e) => setFirstName(e.target.value)} placeholder={firstName === '' ? "First name is required" : null} name="firstName" value={firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName"><PetsIcon fontSize="small" style={{color: "red"}}/>   Last Name</Label>
                    <br />
                    <input onChange={(e) => setLastName(e.target.value)} placeholder={lastName === '' ? "Last name is required" : null} name="lastName" value={lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username"><PetsIcon fontSize="small" style={{color: "red"}}/>   Username</Label>
                    <br />
                    <input onChange={(e) => setUsername(e.target.value)} placeholder={username === '' ? "Username is required" : null} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password"><PetsIcon fontSize="small" style={{color: "red"}}/>   Password</Label>
                    <br />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={password === '' ? "Password is required" : null} name="password" value={password}/>
                </FormGroup>
                <button id="signinButton" style={{alignItems: 'center'}} type="submit">Create Account</button>
            </Form>
        </div>
    )
}

export default Signup;