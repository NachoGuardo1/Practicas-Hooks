import React, { useEffect, useState } from "react";

export const ReactUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("cambiando");
    document.title = `Count : ${count}`;
  }, [count]);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
};
