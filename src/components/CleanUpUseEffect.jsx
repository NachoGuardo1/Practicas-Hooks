import React, { useEffect, useState } from "react";
import { HookMouseMoove } from "./HookMouseMoove";

export const CleanUpUseEffect = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Display mouse event</button>
      {display && <HookMouseMoove />}
    </div>
  );
};
