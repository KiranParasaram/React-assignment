import React,{Component} from 'react';


export class ClassComponent extends Component{

  
    render(){

        let inline={
            color:'white'
        }
         
        
    
        return(
            <div className='comp2'>
            <h1>This is created using class component</h1>
            <div>This is done using external css</div>
            <div style={inline}>This is done using internal css</div>
        </div>
        )
    }
}


export default ClassComponent