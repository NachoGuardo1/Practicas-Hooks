import React, { createContext } from "react";
import { ComponentC } from "./ComponentC";

export const UserContext = createContext();
export const ChannelContext = createContext();

export const UserContextA = () => {
  return (
    <div>
      <UserContext.Provider value={"Nacho"}>
        <ChannelContext.Provider value={"Guardo"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};
