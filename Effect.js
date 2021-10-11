import {useState,useEffect}from 'react'


const Effect=() => {
    const[state,setState]=useState({
        count:0,
        count1:0
        

    })
     useEffect(()=>{
       
        console.log("effect rendered")
    })

    const Increment=()=>{
        setState({...state,count:state.count+1})

    }
    const Decrement=()=>{
        setState({...state,count:state.count-1})

    }
    return(
        <div>
            <h1>{state.count}</h1>
            <button type="text" onClick={Increment}>Increment</button>
            <button type="text" onClick={Decrement}>Decrement</button>


        </div>
    )


}

export default Effect;