import React, { useCallback, useState } from "react";
import UseCallbackTitle from "./UseCallbackTitle";
import UseCallbackCount from "./UseCallbackCount";
import UseCallbackButton from "./UseCallbackButton";

export const UseCallbackParent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(1000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 2000);
  }, [salary]);

  return (
    <div>
      <UseCallbackTitle />
      <UseCallbackCount text="Age" count={age} />
      <UseCallbackButton handleClick={incrementAge}>
        Increment Age
      </UseCallbackButton>
      <UseCallbackCount text="Salary" count={salary} />
      <UseCallbackButton handleClick={incrementSalary}>
        Increment Salary
      </UseCallbackButton>
    </div>
  );
};
