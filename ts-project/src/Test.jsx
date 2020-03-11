import React, { useState, useEffect } from "react";

let timer = null;

export default () => {
  let [str, setStr] = useState(0);
  let [str2, setStr2] = useState(1);
  useEffect(() => {
    // 这种方式会在每次渲染后执行
    // timer = setInterval(() => {
    //   setStr(str + 1);
      console.log(str, str2);
    // }, 3000);
  }, [str, str2]);
  return <div>{str}</div>;
};
