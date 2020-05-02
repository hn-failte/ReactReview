import React, { useState, useEffect } from "react";

interface AObj {
  a: string;
}

export default () => {
  const obj: AObj = {
    a: ""
  };
  const func = a => {
    return a * a;
  };
  let name = "moduleA";
  const [a, setA] = useState(1);
  useEffect(() => {
    setA(func(a));
  }, [a]);
  obj.a = "1";
  return (
    <div>
      {name}
      {a}
    </div>
  );
};
