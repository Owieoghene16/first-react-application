/* eslint-disable no-param-reassign */
import { useState } from 'react';

const useToggleVisibility = () => {
  const [passwordIcon, setpasswordIcon] = useState(false);

  const handleToggle = (password, passwordagain) => {
    if (password.current.type === 'password') {
      password.current.type = 'text';
      passwordagain.current.type = 'text';
      setpasswordIcon(true);
    } else {
      password.current.type = 'password';
      passwordagain.current.type = 'password';
      setpasswordIcon(false);
    }
  };

  return {
    passwordIcon,
    handleToggle,
  };
};

export default useToggleVisibility;
