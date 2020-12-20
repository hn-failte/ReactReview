import React from "react";
import Else from "./Else";

export default props => {
  const { state, state2 } = props;
  const states = { state, state2 };
  const click = () => {
    return states;
  };
  return (
    <div>
      <div>{state}</div>
      <div>{state2}</div>
      <Else getStates={click}></Else>
    </div>
  );
};
