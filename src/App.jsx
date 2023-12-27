import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReactUseEffect } from "./components/ReactUseEffect";
import { HookMouseMoove } from "./components/HookMouseMoove";
import { CleanUpUseEffect } from "./components/CleanUpUseEffect";
import { Interval } from "./components/Interval";
import { DataFetching } from "./components/DataFetching";
import { ComponentC } from "./components/ComponentC";
import { UseReducerHooks } from "./components/UseReducerHooks";
import { UseReducerHooks2 } from "./components/UseReducerHooks2";
import { UseReducerHooks3 } from "./components/UseReducerHooks3";
import { FetchingUseReducer } from "./components/FetchingUseReducer";
import { UseCallbackParent } from "./components/UseCallbackParent";
import { UseMemo } from "./components/UseMemo";
import { UseRefHook } from "./components/useRefHook";
import { FormHook } from "./components/FormHook";
import { UseCounter } from "./components/UseCounter";

function App() {
  return (
    <>
      {/* <ReactUseEffect /> */}
      {/* <HookMouseMoove /> */}
      {/* <CleanUpUseEffect /> */}
      {/* <Interval /> */}
      {/* <DataFetching /> */}
      {/* <ComponentC /> */}
      {/* <UseReducerHooks3 /> */}
      {/* <FetchingUseReducer /> */}
      {/* <UseCallbackParent /> */}
      {/* <UseMemo /> */}
      {/* <UseRefHook /> */}
      {/* <FormHook /> */}
      <UseCounter />
    </>
  );
}

export default App;
