import React from "react";
import { Link } from "react-router-dom";
import './Pop.css';
import Cola from '../media/cola.png';
import Lime from '../media/lime.png';
import Orange from '../media/orange.png';

const Pop = () => {
  return (
    <div className="Pop">
        <div className="Pop-imgs">
        <img src={Cola} alt="cola pop" className="Pop-img" />
        <img src={Lime} alt="lime pop" className="Pop-img" />
        <img src={Orange} alt="orange pop" className="Pop-img" />
        </div>
      <button>
        <Link to="/">Gimme more</Link>
      </button>
    </div>
  );
};

export default Pop;
