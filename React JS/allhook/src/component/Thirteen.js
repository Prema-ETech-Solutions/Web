import React from 'react'
import { Context } from './Eleven'
const Thirteen = () => {
    const context = React.useContext(Context)
    return (
      <>
            <h1>Hello {context }</h1>
      
      </>
  )
}

export default Thirteen