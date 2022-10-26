import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () =>{
    return(
        <Tilt className="Tilt ml4 br2 shadow-2" style={{ height: '140px', width: '140px' }} scale='1.2' >
            <div className="Tilt-inner pa3">
                <img style={{paddingTop: '5px'}} src={brain} alt="Brain"/>
            </div>
        </Tilt>
    )
}

export default Logo;