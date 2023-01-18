
import React, {useState} from 'react';
// Usestate hooks 
var apx = 0;
function One() {
    const [user, setuser] = useState("Value - "+apx);
    var on = () => { 
      setuser('Value - '+apx++);
    }
    return (
  
      <>
        <div className='con'>
          <h1 className='cen'>{user}</h1>
          <button onClick={on} className='cen' >Click</button>
        </div>
      </>
    );
}

export default One