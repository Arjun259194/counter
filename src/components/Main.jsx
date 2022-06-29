import React, { useState } from "react";
import "./Main.css";

export default function Main() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <main>
      <h1>{count}</h1>
      <div>
        <button onClick={increaseCount}>Count</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </main>
  );
}
