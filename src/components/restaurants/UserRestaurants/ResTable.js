import React from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../../helpers/environment';
import './ResTable.css';

import PetsIcon from '@material-ui/icons/Pets';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ResTable = (props) => {
    const deleteRestaurant = (restaurant) => {
        fetch(`${APIURL}/wish/${restaurant.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchRestaurants())
    }

    const restaurantMapper = () => {
        return props.restaurants.wish.map((restaurant, index) => {
            return(
                <tr key={index}>
                    {/* <th scope="row">{restaurant.id}</th> */}
                    <td>{restaurant.restaurantName}</td>
                    <td>{restaurant.address}</td>
                    <td>{restaurant.foodType}</td>
                    <td>{restaurant.comment}</td>
                    <td>
                        <EditIcon style={{color: "grey"}} onClick={() => {props.editUpdateRestaurant(restaurant); props.updateOn()}} />
                        <DeleteForeverIcon style={{color: "red"}} onClick={() => {deleteRestaurant(restaurant)}} />
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h4><PetsIcon fontSize="small" style={{color: "red"}}/>   Your Restaurants:</h4>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>Restaurant Name</th>
                    <th>Address</th>
                    <th>Food Type</th>
                    <th>Comment</th>
                    <th>Update/Delete</th>
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