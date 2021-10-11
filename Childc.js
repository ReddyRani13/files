import React from 'react'



function Childc(props){
   const  onTrigger=(event)=>{
        props.handleClick(event.target.myName.value)
        event.preventDefault();
    
   }
    return(
        <div>
            <form onSubmit={onTrigger}>

            <input type="text" name="myName" placeholder="Enter your name"/>
            <input type="submit" value="Submit"/>
         <h1> {props.name}</h1>
           <button type="submit" onClick={props.handleClick}>clickme</button>
           </form>

        </div>
    )
    }


export default Childc;