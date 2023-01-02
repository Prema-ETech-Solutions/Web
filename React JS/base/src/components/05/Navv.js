import React from "react";
import "../../CSS/RR.css";

import {Link} from "react-router-dom";
function Navv() {
  return (
    <>
      <nav id="nave">    
        <div id="pages">
          <ul id="uli">
            <li className="link-data">
            <Link to="/">Home</Link>
            </li>
            <li className="link-data">
            <Link to="/About">About</Link>
            </li>
            <li className="link-data">
            <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navv;
