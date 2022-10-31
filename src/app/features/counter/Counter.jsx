import { useSelector,useDispatch } from 'react-redux';
import {increment, decrement,reset,incrementByAmount} from './counterSlice'
import React, { useState } from 'react'

const Counter = () => {
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch();
  const [IncrementAmount, setIncrementAmount] = useState(0)
  const addValue = Number(IncrementAmount) || 0;

  


  return (
    <div>
      <h1>{count}</h1>
      <div className="">
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <button onClick={()=>dispatch(incrementByAmount(2))}>Increment by 2</button>
      </div>
    </div>
  )
}
export default Counter