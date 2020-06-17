import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';
import dogPic from '../../assets/dog3.jpeg';


const Auth = (props) => {

    const [signup, setSignup] = useState(true);

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
        return signup ? <p style={{fontFamily: 'Oswald', fontSize: '20px', justifyContent: "center", textAlign: "center"}} >Already a user? <a href="" onClick={toggleView}>Login</a></p> : <p style={{fontFamily: 'Oswald', fontSize: '20px', justifyContent: "center", textAlign: "center"}}>New user? <a href="" onClick={toggleView}>Signup</a></p>
    }

    return (
        <div className="authDiv">
        <img id="dogPic" src={dogPic} alt="dog" />
        <Container className="auth-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        
        <br />
            <Row>
                <br />
                <Col md={12}>
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