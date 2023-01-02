import React from "react";

import "../../CSS/Outer.css";
function two(props) {
  return (
    <>
      <div id="two">
        <div>
          <button onClick={() => props.changef("Inner Right")}>Click</button>
        </div>
        <div>
          <h1>{props.st}</h1>
        </div>
      </div>
    </>
  );
}

export default two;
