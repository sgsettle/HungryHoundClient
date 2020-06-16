import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import APIURL from '../../helpers/environment';
import eatingDog from '../../assets/dog1.jpeg';
import styled from 'styled-components';
import ResSearch from './DisplayRestaurants/ResSearch';


const ResIndex = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [restaurantToUpdate, setRestaurantToUpdate] = useState({});

    const fetchRestaurants = () => {
        console.log(props);
        fetch(`${APIURL}/wish`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        }).then( (res) => res.json())
        .then((logData) => {
            setRestaurants(logData)
            console.log(logData);
        })
}

const editUpdateRestaurant = (restaurant) => {
    setRestaurantToUpdate(restaurant);
    console.log(restaurant);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false);
}

useEffect(() => {
    fetchRestaurants();
}, [])

const Resize = styled.img`
    width: 35vw;
    height: 40vh;
    display: block;
    margin: 0 auto;
    border-radius: 20%;
`;

    return(
        <div>
            <Resize id="eatingDog" src={eatingDog} alt="dogEating" />
            <Container>
                <Row>
                    <Col md='6'>
                        <ResSearch token={props.token}/>
                    </Col>
                </Row>
                <Row>
                    <Col md='3'>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResIndex;