import React, { useContext } from "react";
import { ChannelContext, UserContext } from "./UseContext";

export const ComponentC = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <p>
        {user}-{channel}
      </p>
    </div>
  );
};
