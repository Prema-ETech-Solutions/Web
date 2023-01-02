// import React,{ useState } from 'react'
import React, { useState } from 'react';
function Us()
{

    const [count, setCount] = useState(1);
    // const [count, setCount] = useState(1);
    const inp = () =>
    {
        
        setCount(count + 1);

    }
    return (
        <>
            <div>
            <h1 id='hed' onClick={inp}>{count}</h1>
            </div>
        </>
  )
}

export default Us