import React from 'react'
import propTypes from "prop-types"
import "../../CSS/propesTest1.css"


function propesTest1(props) {
    return (
        <>
            
            <div className='data-show'>
                <p>{props.data}</p>
            </div>
        
        </>
    )
    
    
}

propesTest1.propTypes = {
    data:propTypes.string
}

propesTest1.defaultProps =
{
    data :"OLD"
}

export default propesTest1
