import React, { useState } from "react";

export const UseHookCounter = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount);
  const incrementValue = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrementValue = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(initialCount);
  };

  return [count, incrementValue, decrementValue, reset];
};
