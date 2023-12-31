import React from "react";
import "../CSS/Counter.css"
import { useState , useEffect } from "react";
const Counter = () => {
    useEffect(()=>{
        document.title = `Counter`
    })
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="container">

        <h1 className="number">{count}</h1>
        <div className="btn">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
