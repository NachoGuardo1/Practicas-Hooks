import React, { useEffect, useRef, useState } from "react";

export const UseRefHook = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  const inputFocus = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);
  return (
    <div>
      <div>Hook Timer {timer}</div>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Clear Interval
      </button>
      <input type="text" ref={inputFocus} />
    </div>
  );
};
