import React from 'react'
import "../../CSS/propesTest.css"
function propesTest(props) {
    return (
        <>
            
            <div className='data-show'>
                <p>{props.data[0]} {""} {props.data[1]} </p>
            </div>
        
        </>
  )
}

export default propesTest