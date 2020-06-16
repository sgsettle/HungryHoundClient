import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../../../helpers/environment'

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
        <>
        <Form onSubmit={handleSubmit} id='restaurantForm'>
            <h4>Add a Restaurant!</h4>
            <FormGroup>
                <Label htmlFor="restaurantName">Restaurant Name:</Label>
                <Input name="restaurantName" value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="address">Address:</Label>
                <Input name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="foodType">Type of Food:</Label>
                <Input name="foodType" value={foodType} onChange={(e) => setFoodType(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="comment">Comments:</Label>
                <Input name="comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        </>
    )
}

export default ResCreate;