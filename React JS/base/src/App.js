import React from "react";
import "./CSS/App.css";
import Bar from "./components/01/navBar";
import Propes from "./components/02/propesTest";
import Propes1 from "./components/02/propesTest1";
import As from "./components/03/us";
import As1 from "./components/03/Us1";
import Outer from "./components/04/Outer";
import RR from "./components/05/RR";
function App() {
  return (
    <>
      {/* ONE */}
      <Bar />
      {/* Two */}
      <Propes data={["A", "B"]} />
      <Propes1 data={"Hello"} />
      <Propes1 />
      {/* Three */}
      <As />
      <As1 />
      {/* Four */}
      <Outer />
      {/* Five */}
      <RR />

      {/* Six */}
      
    </>
  );
}

export default App;
