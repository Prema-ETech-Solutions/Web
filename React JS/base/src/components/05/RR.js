import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navv from "./Navv";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import {} from 'react-router-dom';
// import { Routes ,Routes } from 'react-router-dom';

import "../../CSS/RR.css";
function RR() {
  return (
    <Router>
      <Navv></Navv>
      {/* <div id="outer-div"> */}
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route>
        <Route path={"/About"} element={<About />}></Route>
        <Route path={"/Contact"} element={<Contact/>}></Route>
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default RR;
