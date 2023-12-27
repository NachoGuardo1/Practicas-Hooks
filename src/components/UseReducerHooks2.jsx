import React, { useReducer } from "react";
const initialValue = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

export const UseReducerHooks2 = () => {
  //complex state and action
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <div>
        <div>Count - {count.firstCounter}</div>
        <div>Second Count - {count.secondCounter}</div>

        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement 5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Second
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement Second
        </button>
      </div>
    </div>
  );
};
