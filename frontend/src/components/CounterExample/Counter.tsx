import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        aria-label="increment"
      >
        +1
      </button>
    </>
  );
};
