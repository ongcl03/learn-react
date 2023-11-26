import { useState } from "react";

export const useCounter = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return [count, increaseCounter, decreaseCounter, resetCounter];
};
