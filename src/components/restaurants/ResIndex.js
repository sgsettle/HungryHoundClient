import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import APIURL from '../../helpers/environment';

const ResIndex = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [restaurantToUpdate, setRestaurantToUpdate] = useState({});
    const fetchRestaurants = () => {
        console.log(props);
        fetch(`${APIURL}/log`, {
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

    return(
        <Container>

        </Container>
    )
}

export default ResIndex;