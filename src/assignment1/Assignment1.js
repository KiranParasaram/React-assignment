import React from 'react'
import FunctionComponent from './FunctionComponent'
import ClassComponent from './ClassComponent'
import Nocomponent from './Nocomponent'


class Assignment1 extends React.Component{
   
  state={
       function:false,
       class:false
  }

  clickhandle=()=>{
    this.setState({
      function:!this.state.function
     
    })
  }

  clickhandleclass=()=>{
    this.setState({
      class:!this.state.class
    })
  }

  render(){

    return (
      <div>

      <h1>styling using function and class component</h1>
      <button className='button1' onClick={ this.clickhandle }>To see styling in functional component</button>
      <button className='button2' onClick={ this.clickhandleclass }>To see styling in class cocmponent</button>

      {this.state.function && <FunctionComponent/> }
      {this.state.class && <ClassComponent/> }

    
      </div>
 )
  }
}


export default Assignment1