import React from "react";
import { Link } from "react-router-dom";
import Nyquil from '../media/nyquil.png';
import './CoughSyrup.css'

const CoughSyrup = () => {
    return ( 
        <div className="CoughSyrup">
        I got the shakes, 
        Nyquil Shakes
        <img src={Nyquil} alt="Nyquil Cough Syrup" className="CoughSyrup-shake" />
        <button>
        <Link to="/">Gimme more</Link>
      </button>
        </div>
     );
}
 
export default CoughSyrup;