import React from 'react'


const FunctionComponent = () => {

  let inline={
    color:'white'
  }
  
    
  return (
    <div className='comp1'>
        <h1>This is created using functional component</h1>
        <div>This is done using external css</div>
        <div style={inline}>This is done using internal css</div>
    </div>
  )
}


export default FunctionComponent