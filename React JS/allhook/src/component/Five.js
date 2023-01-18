import React from "react";

// Remove single element
function Five() {
  var systemdata = [
    { id: "0", cpu: "I5", ram: "4GB" },
    { id: "1", cpu: "I7", ram: "8GB" },
    { id: "2", cpu: "I9", ram: "16GB" },
  ];
  const [PC, setPC] = React.useState(systemdata);
  const remove = (id) => {
    const newpc = PC.filter((element) => {

      return element.id !== id;
    });
    setPC(newpc);
    // setPC([]);
  };
  return (
    <>
      <div className="con">
        {PC.map((cp) => {
          return (
            <h4 className="cen" key={cp.id}>
              Cpu -{cp.cpu} & Ram -{cp.ram}
              <button className="m-y" onClick={() => remove(cp.id)}>Remove</button>
            </h4>
          );
        })}
      </div>
    </>
  );
}

export default Five;
