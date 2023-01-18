import React from "react";

function Ten() {
    const [windowsize, setwindowsize] = React.useState(window.screen.width)
    React.useEffect(() => {
        window.addEventListener("resize", () => { setwindowsize(window.innerWidth) });
        return () => { 
            window.removeEventListener("resize", () => { setwindowsize(window.innerWidth) });
        }
    })
  return (
    <>
          <div className="con">
              <label >{ windowsize}</label>
      </div>
    </>
  );
}

export default Ten;
