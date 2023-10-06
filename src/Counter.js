import React, { useState } from 'react';

export default function Counter() {
    
  let [num,setNum] =useState(0);
  const increment =()=>{
    setNum(num++);
  }
  const decrement =()=>{
    setNum(num--);
  }
    return (
        <>
        <button onClick={increment}>+</button>
        <div>{num}</div>
        <button onClick={decrement}>-</button>
        </>
  )
}
