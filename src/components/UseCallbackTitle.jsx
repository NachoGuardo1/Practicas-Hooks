import React from "react";

function UseCallbackTitle() {
  console.log("Rendering UCTITLE");
  return <div>UseCallbackTitle</div>;
}

export default React.memo(UseCallbackTitle);
