import React, { useEffect, useState } from "react";

export const Interval = () => {
  const [count, setCount] = useState(0);
  // const sumar = () => {
  //   setCount(count + 1);
  // };

  // useEffect(() => {
  //   const interval = setInterval(sumar, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [count]);
  const sumar = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(sumar, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
};
