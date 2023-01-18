import React, { useState } from "react";
//  How to Toggle
function Two() {
  const [user, setuser] = useState("Hello World !");
  var on = () => {
      if (user === "Hello World !") {
          setuser("By World");
        }
        else { 
            
            setuser("Hello World !");
      }
  };
  return (
    <>
      <div className="con">
        <h1 className="cen">{user}</h1>
        <button onClick={on} className="cen">
          Click
        </button>
      </div>
    </>
  );
}

export default Two;
