import React, { useMemo, useState } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCount(count + 1);
    console.log("render");
  };
  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
    console.log("renderTwo");
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return count % 2 == 0;
  }, [count]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count one: {count}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <button onClick={incrementTwo}>Count two: {countTwo}</button>
    </div>
  );
};
