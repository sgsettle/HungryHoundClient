import React from 'react';
import './Footer.css';
import PetsIcon from '@material-ui/icons/Pets';

const Footer = () => {
    return (
        <div className="footer">
            <h5><PetsIcon fontSize="small" style={{color: "red"}}/>   Hungry Hound 2020 ©</h5>
        </div>
    )
}

export default Footer;