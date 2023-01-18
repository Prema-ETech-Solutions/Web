import React from "react";
// Logic
function Six() {
  const [value, setvalue] = React.useState("");
  const [labl, setlabl] = React.useState("");
  const Sub = () => {
    var string = value;
    var sy = false,
      num = false,
      st = false;
    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
        num = true;
      } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        st = true;
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        st = true;
      } else {
        sy = true;
      }
    }
    if (sy === false && num === true && st === true) {
      setlabl("Number and String ");
    } else if (sy === false && num === false && st === true) {
      setlabl("String");
    } else if (sy === false && num === true && st === false) {
      setlabl("Number");
    } else {
        if (value.length <= 0) { 
            setlabl("No Data");

        }
        else { 
            setlabl("Mix");

        }
    }
  };
  return (
    <>
      <div className="con">
        <input
          type="text"
          id="name"
          name="lname"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        ></input>
        <button onClick={Sub}>Submit </button>
        <label id="lab">{labl}</label>
      </div>
    </>
  );
}

export default Six;
