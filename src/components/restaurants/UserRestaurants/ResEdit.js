import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../../helpers/environment';
import './ResEdit.css';
import PetsIcon from '@material-ui/icons/Pets';

const ResEdit = (props) => {
    const [editRestaurantName, setEditRestaurantName] = useState(props.restaurantToUpdate.restaurantName);
    const [editAddress, setEditAddress] = useState(props.restaurantToUpdate.address);
    const [editFoodType, setEditFoodType] = useState(props.restaurantToUpdate.foodType);
    const [editComment, setEditComment] = useState(props.restaurantToUpdate.comment);
    
    const restaurantUpdate = (event, restaurant) => {
        event.preventDefault();
        fetch(`${APIURL}/wish/${props.restaurantToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({wish: {restaurantName: editRestaurantName, address: editAddress, foodType: editFoodType, comment: editComment}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            console.log(res);
            props.fetchRestaurants();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader id="editHeader" ><PetsIcon fontSize="small" style={{color: "red"}}/>   Edit Your Restaurant   <PetsIcon fontSize="small" style={{color: "red"}}/></ModalHeader>
            <ModalBody>
                <Form onSubmit={restaurantUpdate}>
                    <FormGroup>
                        <Label id="editLabel" htmlFor="restaurantName">Restaurant Name:</Label>
                        <Input name="restaurantName" value={editRestaurantName} onChange={(e) => setEditRestaurantName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                    <Label id="editLabel" htmlFor="address">Address:</Label>
                        <Input name="address" value={editAddress} onChange={(e) => setEditAddress(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                    <Label id="editLabel" htmlFor="foodType">Type of Food:</Label>
                        <Input name="foodType" value={editFoodType} onChange={(e) => setEditFoodType(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                    <Label id="editLabel" htmlFor="comment">Comments:</Label>
                        <textarea class="form-control" id="editComment" name="comment" value={editComment} onChange={(e) => setEditComment(e.target.value)} />
                    </FormGroup>
                    <Button id="editButton" type="submit">Update Your Restaurant!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ResEdit;