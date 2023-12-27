import React from "react";
import { UseHookCounter } from "./UseHookCounter";

export const UseCounter = () => {
  const [count, incrementValue, decrementValue, reset] = UseHookCounter(10, 5);
  return (
    <div>
      <p>Count {count}</p>
      <button onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
