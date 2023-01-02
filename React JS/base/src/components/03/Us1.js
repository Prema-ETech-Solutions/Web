import React, { useState } from "react";
import "../../CSS/Us1.css";

function Us1() {
  const [state, setstate] = useState("");
  const [statecolor, setcolor] = useState("Light");

  const changeHandel = (event) => {
    setstate(event.target.value);
  };

  const clickHandle = () => {
    let newText = state.toUpperCase();
    setstate(newText);
  };

  const clickcolor = () => {
    if (statecolor === "Light") {
      setcolor("Dark");
      
      document.title = 'Dark';
    } else {
      setcolor("Light");

      document.title = 'LIGHT';
    }
  };
  return (
    <>
      <div id="outer">
        <textarea
          id="enter"
          cols="30"
          rows="10"
          value={state}
          onChange={changeHandel}
        ></textarea>
        <label className="us-a">{state}</label>
        <button onClick={clickHandle} className="us-a">
          Click ME
        </button>
      </div>
      <div className={statecolor + " color-class"}>
        <button onClick={clickcolor}>Click For {statecolor}</button>
      </div>
    </>
  );
}

export default Us1;
