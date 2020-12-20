import React from "react";

export default props => {
  const { getStates } = props;
  return <div>{Object.values(getStates())}</div>;
};
