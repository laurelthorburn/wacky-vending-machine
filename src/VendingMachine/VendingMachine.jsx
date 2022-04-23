import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="Vending">
      <div className="Vending-Btns">
        <button>
          <Link to="pop">Pop</Link>
        </button>
        <button>
          <Link to="candy">Candy</Link>
        </button>
        <button>
          <Link to="coughsyrup">CoughSyrup</Link>
        </button>
      </div>
    </div>
  );
};

export default VendingMachine;
