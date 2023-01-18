import React from 'react'
// use state  array
function Three() {
    var systemdata = [
        { id: "0", cpu: "I5", ram: "4GB" },
        { id: "1", cpu: "I7", ram: "8GB" },
        { id: "2", cpu: "I9", ram: "16GB" },
    ]
    const [PC, setPC] = React.useState(systemdata)
    const change = () =>
    { 
        setPC([]);
    }
  return (
      <>
          <div className='con'>
              {PC.map((cp) => { 
                  return <h4 className='cen' key={cp.id}>Cpu -{cp.cpu} & Ram -{cp.ram}</h4>
              }) 
              }
              <button onClick={change} className="cen"> Click Button</button>
          </div>    
      </>
  )
}

export default Three