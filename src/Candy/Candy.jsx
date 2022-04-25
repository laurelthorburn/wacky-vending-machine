import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Candy.css";

const Candy = () => {
  const [candy, setCandy] = useState(0);

  const handleIncrement = () => {
    let candyTotal = candy;
    setCandy(candyTotal + 1);
  };

  return (
    <div className="Candy">
      total consumed candy: {candy}
      <button className="Candy-more" onClick={handleIncrement}>
        I WANT MORE CANDYYYYY
      </button>
      <button>
        <Link to="/">Gimme more</Link>
      </button>
    </div>
  );
};

export default Candy;
