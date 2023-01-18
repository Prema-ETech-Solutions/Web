import React, { createContext } from "react";
import Twelve from "./Twelve";
// 12 and 13 function are used

const Context = createContext();
export const Eleven = () => {
  return (
    <>
      <div className="con">
        <Context.Provider value={"World !"}>
          <Twelve></Twelve>
        </Context.Provider>
      </div>
    </>
  );
};

export default Eleven;
export { Context };
