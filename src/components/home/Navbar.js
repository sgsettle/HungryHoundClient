import React, {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Collapse,
    Button,
    Nav,
  } from "reactstrap";
  import logo from '../../assets/HungryHoundLogo.png';
  import './Navbar.css';


const Sitebar = (props) => {
console.log(props)

const [logout, setLogout] = useState(true);

    // const logoutView = () => {
    //     if(logout){
    //         return (
                
    //         )
    //     } else {
    //         return (
    //             <button id="logoutButton" onClick={props.clickLogout}>Logout</button>
    //         )
    //     }
    // }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    
    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/"><img style={{height: '70px', width: '220px'}} id="logo" src={logo} alt="HHLogo" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {/* {logoutView()} */}
                        <button id="logoutButton" onClick={props.clickLogout}>Logout</button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;