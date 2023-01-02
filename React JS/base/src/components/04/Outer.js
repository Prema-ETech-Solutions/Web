import React, { useState } from "react";
import "../../CSS/Outer.css";
import ONE from "./one";
import Two from "./two";
function Outer() {
  const [state, setstate] = useState("NO CLICK");

  function click_change(data) {
    setstate(data);
    document.title = data;
    setTimeout(() => {
      setstate(null);
    }, 5000);
  }
  return (
    <>
      <section id="Outer">
        <div id="button-outer">
          <button onClick={() => click_change("Outer")}>OUTER</button>
        </div>
        <div id="outer-in">
          <ONE changef={click_change} st={state} />
          <Two changef={click_change} st={state}  />
        </div>
        <div id="bottom">
          <h1>{state}</h1>
        </div>
      </section>
    </>
  );
}

export default Outer;
