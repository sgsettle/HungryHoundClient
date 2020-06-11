import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';
import dogPic from '../../assets/dog3.jpeg';

const Auth = (props) => {

    const [signup, setSignup] = useState(false);

    const handleView = () => {
        if(signup){
            return (
                <Signup updateToken={props.updateToken} />
            )
        } else {
            return (
                <Login updateToken={props.updateToken} />
            )
        }
    }

    const toggleView = (event) => {
        event.preventDefault();

        setSignup(!signup)
    }

    const switcher = () => {
        return signup ? <p>Already a user? <a href="" onClick={toggleView}>Login</a></p> : <p>New user? <a href="" onClick={toggleView}>Signup</a></p>
    }

    return (
        <div>
        
        
        <Container className="auth-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Row>
                <Col md={5}>
                <img style={{position: 'relative', display: 'inline-flex', borderRadius: '30%', height: '400px', width: '100%'}} id="dogPic" src={dogPic} alt="dog" />
                </Col>
                <br />
                <Col md={7}>
                    {handleView()}
                    <br />
                    {switcher()}
                    {/* <Button onClick={toggleView}>Login/Signup</Button> */}
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Auth; 