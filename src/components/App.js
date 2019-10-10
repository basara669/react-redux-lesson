import * as React from "react";
const { useState, useEffect } = React;

export const UseEffectSample1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [count]);

  return (
    <p>
      time: <b>{count}</b>
    </p>
  );
};
