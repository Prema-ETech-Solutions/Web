import React from "react";
import "../../CSS/Outer.css";
function one(props) {
  return (
    <>
          <div id="one">
              <div><h1>{props.st}</h1></div>
              <div>
                  <button onClick={() => props.changef("Inner Left")}>Click</button>
              </div>
      </div>
    </>
  );
}

export default one;
