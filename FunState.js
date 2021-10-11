import { useState } from 'react'


function FunState(){
    const[state,setState]=useState({
        count:0,
        count1:0
    })
   const handleIncrement1=()=>{
        setState({...state, count:state.count+1})
    }
   const handleIncrement2=()=>{
        setState({...state, count1:state.count1+1})
    }
   const handleDecrement1=()=>{
        setState({...state, count:state.count-1})
    }
   const handleDecrement2=()=>{
        setState({...state, count1:state.count1-1})
    }
    return(
        <div>
            {state.count}
            <button type="text" onClick={handleIncrement1}>increment1</button>
            <button type="text" onClick={handleDecrement1}>decrement1</button>
            {state.count1}
            <button type="text" onClick={handleIncrement2}>increment2</button>
            <button type="text" onClick={handleDecrement2}>decrement2</button>
        </div>
    )








}
export default FunState;