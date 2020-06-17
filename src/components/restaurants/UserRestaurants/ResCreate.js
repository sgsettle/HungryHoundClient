import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../../../helpers/environment'
import PetsIcon from '@material-ui/icons/Pets';
import './ResCreate.css'

const ResCreate = (props) => {
    const [restaurantName, setRestaurantName] = useState('');
    const [address, setAddress] = useState('');
    const [foodType, setFoodType] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/wish/`, {
            method: 'POST',
            body: JSON.stringify({wish: {restaurantName: restaurantName, address: address, foodType: foodType, comment: comment}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setRestaurantName('');
            setAddress('');
            setFoodType('');
            setComment('');
            props.fetchRestaurants();
        })
    }

    return(
        <div id="CreateDiv">
        <Form onSubmit={handleSubmit} id='restaurantForm'>
            <h4 id="createHeader" ><PetsIcon fontSize="small" style={{color: "red"}}/>   Add a Restaurant!   <PetsIcon fontSize="small" style={{color: "red"}}/></h4>
            <FormGroup>
                <Label htmlFor="restaurantName">Restaurant Name:</Label>
                <Input id="createInput" name="restaurantName" value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="address">Address:</Label>
                <Input id="createInput" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="foodType">Type of Food:</Label>
                <Input id="createInput" name="foodType" value={foodType} onChange={(e) => setFoodType(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="comment">Comments:</Label>
                <br />
                <textarea id="createComment" name="comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </FormGroup>
            <button id="CreateButton" type="submit">Submit</button>
        </Form>
        </div>
    )
}

export default ResCreate;