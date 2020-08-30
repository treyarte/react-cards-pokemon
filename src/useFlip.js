import { useState } from 'react';

const useFlip = (initialState = false) => {
  const [flip, setFlip] = useState(initialState);

  const toggleFlip = () => {
    setFlip((f) => !f);
  };

  return [flip, toggleFlip];
};

export default useFlip;
