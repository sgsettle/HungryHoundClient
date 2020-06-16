import React from 'react';
import {Table, Button} from 'reactstrap';

const ResTable = (props) => {
    const deleteRestaurant = (restaurant) => {
        fetch(`${APIURL}/log/${restaurant.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchRestaurants())
    }

    const restaurantMapper = () => {
        return props.restaurants.log.map((restaurant, index) => {
            return(
                <tr key={index}>
                    {/* <th scope="row">{restaurant.id}</th> */}
                    <td>{restaurant.restaurantName}</td>
                    <td>{restaurant.address}</td>
                    <td>{restaurant.foodType}</td>
                    <td>{restaurant.comment}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateRestaurant(restaurant); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteRestaurant(restaurant)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Your Restaurants:</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>Restaurant Name</th>
                    <th>Address</th>
                    <th>Food Type</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {props.restaurants.wish ? restaurantMapper() : null}
            </tbody>
        </Table>
        </>
    )
}

export default ResTable;