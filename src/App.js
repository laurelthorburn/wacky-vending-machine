import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import VendingMachine from "./VendingMachine/VendingMachine";
import Pop from "./Pop/Pop";
import Candy from "./Candy/Candy";
import CoughSyrup from "./CoughSyrup/CoughSyrup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<VendingMachine />} />
        <Route exact path="/pop" element={<Pop />} />
        <Route exact path="/candy" element={<Candy />} />
        <Route exact path="/coughsyrup" element={<CoughSyrup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
