import React from "react";
import { Link } from "react-router-dom";
import './Pop.css';

const Pop = () => {
  return (
    <div className="Pop">
      Future Pop
      <button>
        <Link to="/">Gimme more</Link>
      </button>
    </div>
  );
};

export default Pop;
