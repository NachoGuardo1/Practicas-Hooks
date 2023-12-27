import React from "react";
import { UseInput } from "./UseInput";

export const FormHook = () => {
  const [firstName, bindFirstName, resetFirstName] = UseInput("");
  const [secondName, bindSecondName, resetSecondName] = UseInput("");

  const onSubmit = () => {
    alert(`Hello ${firstName}-${secondName}`);
    resetFirstName();
    resetSecondName();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="First" {...bindFirstName} />
        <input type="text" placeholder="Last" {...bindSecondName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
