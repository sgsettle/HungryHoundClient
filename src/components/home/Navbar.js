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

const Sitebar = (props) => {
console.log(props)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    
    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/"><img style={{height: '60px', width: '200px'}} id="logo" src={logo} alt="HHLogo" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;