import { useSelector,useDispatch } from 'react-redux';
import {increment, decrement,reset,incrementByAmount} from './counterSlice'
import React, { useState } from 'react'

const Counter = () => {
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch();
  const [IncrementAmount, setIncrementAmount] = useState(0)
  const addValue = Number(IncrementAmount) || 0;
  const resetAll = ()=>{
    setIncrementAmount(0)
    dispatch(reset())
  }

  


  return (
    <div>
      <h1>{count}</h1>
      <div className="">
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <br />
        <input 
          type="text" 
          value={IncrementAmount}
          onChange={(e)=>setIncrementAmount(e.target.value)}
        />
        <br />
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>add value {addValue}</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  )
}
export default Counter