import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Form, Button, Container} from 'reactstrap';
import APIURL from '../../../helpers/environment';
import PetsIcon from '@material-ui/icons/Pets';
import './ResSearch.css';

const ResSearch  = (props) => {

    const [restaurants, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const fetchResults = () => {
        fetch(`${APIURL}/log`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        }).then( (res) => res.json())
        .then((logData) => {
            setRestaurants(logData.log);
            console.log(logData.log);
        })
    }
    
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        fetchResults();
        let name = searchTerm;
        let filtered = restaurants.filter(result => {
            if(result.restaurantName.toLowerCase().includes(name.toLowerCase())){
                return result;
            } else if (result.foodType.toLowerCase().includes(name.toLowerCase())){
                return result;
            }
        })
        setSearchResults(filtered)
    }, [searchTerm]);

    return (
        <div id="SearchArea">
            <h4><PetsIcon fontSize="small" style={{color: "red"}}/>  Search Dog-Friendly Restaurants  <PetsIcon fontSize="small" style={{color: "red"}}/></h4>
            <Form>
            {/* <i class="fas fa-search" aria-hidden="true"></i> */}
            <input 
            id="SearchBar"
            type="text" 
            placeholder="Search by Restaurant Name or Food Type"
            value={searchTerm}
            onChange={handleChange} />
            <Container id="searchContainer">
                {searchResults.map(item => (
                <ul style={{textAlign: "left"}} >
                    <li style={{listStyleType: "none"}}><PetsIcon fontSize="small" style={{color: "red"}}/>  {item.restaurantName}</li>
                    <li className="liResults" style={{listStyleType: "none"}}>{item.address}</li>
                    <li className="liResults" style={{listStyleType: "none"}}>{item.foodType}</li>
                </ul> 
                ))}
            </Container>
            </Form>
        </div>
    )
}

export default ResSearch;