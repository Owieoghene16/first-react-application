import { useState } from 'react';

const useBoolean = (initialState = false) => {
  const storage = JSON.parse(sessionStorage.getItem('user'));
  const [toggle, setToggle] = useState(initialState);
  const handleToggle = () => setToggle(!toggle);

  return {
    toggle,
    storage,
    handleToggle,
  };
};

export default useBoolean;
