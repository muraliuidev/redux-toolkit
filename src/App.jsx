import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByValue } from "./features/counter/counterSlice";

function App() {
  // const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0)
  const count = useSelector((state)=> state.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch(increment())
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    dispatch(decrement())
  };
  const handleReset = () => {
    dispatch(reset())
  };
  const handleIncrementByValue = () => {
    dispatch(incrementByValue(amount))
  }
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <div >
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> - </button>
        <button onClick={handleReset}>reset</button>
        <input 
          type="number"
          value={amount}
          onChange={(e)=> setAmount(e.target.value)}
        />
        <button onClick={handleIncrementByValue}>Increment By Value</button>
      </div>
    </div>
  );
}

export default App;
