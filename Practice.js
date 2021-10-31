import React from 'react'
import {increment,decrement,Reset,asysinc,fetchUser,fetchError,fetchSuccess} from '../Redux/Count/Practice/PracticeAction'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react'

export function Practice(props){
  
  const state = useSelector(state => state.Counterp.count)
  const {name}=props
  const[votes,setVotes]=useState(0)
    const  dispatch = useDispatch()
   
    const handleIncrement=()=>{
      dispatch(increment())
      setVotes(votes+1)
    }
    const handleDecremenet=()=>{
      dispatch(decrement())
      setVotes(votes-1)
    }
    const handleReset=()=>{
      dispatch(Reset())
      setVotes(0)
      
    }

  return(
    <div>
      <h1>totalcount:{state}</h1>
     <h1> {name}</h1>
     <h3>{votes}</h3>
      <button onClick={handleIncrement}>increment</button>
       <button onClick={handleDecremenet}>increment</button>
       <button onClick={handleReset}>Reset</button>
       <button onClick={()=>dispatch(asysinc())}>increase 5</button>
       <button onClick={()=>dispatch(fetchUser())}>api</button>
       <button onClick={()=>dispatch(fetchError())}>api</button>
       <button onClick={()=>dispatch(fetchSuccess())}>api</button>

    </div>
  )
}