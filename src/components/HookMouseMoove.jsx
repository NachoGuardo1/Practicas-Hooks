import React, { useEffect, useState } from "react";

export const HookMouseMoove = () => {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const logMousePosition = (e) => {
    console.log("MouseEvent");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Effect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      HookMouseMoove : X = {x} ----- Y = {y}
    </div>
  );
};
