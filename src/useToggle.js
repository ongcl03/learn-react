import { useState } from "react";

// Custom Hooks (allows encapsulate and reuse logic within functional components in many different places)
export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
};
