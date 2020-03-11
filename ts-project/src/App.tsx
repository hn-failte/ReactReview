import React, { useState } from 'react';
import './App.css';
import Test from "./Test";
function App() {
  let [show, setShow] = useState(true);
  const handleUnmount = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      {show ? <Test /> : <></>}
      <button onClick={handleUnmount}>dodo</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;
