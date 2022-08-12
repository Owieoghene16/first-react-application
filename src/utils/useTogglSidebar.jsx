import { useState } from 'react';

const useBoolean = (initialState = false) => {
  const storage = JSON.parse(sessionStorage.getItem('user'));
  const [open, setOpen] = useState(initialState);
  const handleToggle = () => setOpen(!open);

  return [
    open,
    storage,
    {
      setToggle: handleToggle,
    },
  ];
};

export default useBoolean;
