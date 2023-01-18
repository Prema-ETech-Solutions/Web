import React, { useState, useEffect } from "react";

function Nine() {
  const Onc = () => {
    setclick(click + 1);
  };
  const [click, setclick] = useState(0);
  useEffect(() => {
      document.title = click ;
  });
  //   },[click]);
  return (
    <>
      <div className="con">
        <label>{click}</label>
        <button onClick={Onc}>Click</button>
      </div>
    </>
  );
}

export default Nine;
