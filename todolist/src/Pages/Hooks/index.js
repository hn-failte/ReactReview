import React, { useState } from "react";
import Child from "./Child";

export default () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);
  return (
    <div>
      <a
        onClick={() => {
          setState(state + 1);
          setState2(state2 + 1);
        }}
      >
        change
      </a>
      <Child state={state} state2={state2}></Child>
    </div>
  );
};
