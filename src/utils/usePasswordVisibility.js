/* eslint-disable no-param-reassign */
import { useState } from 'react';

const useToggleVisibility = () => {
  const [passwordIcon, setpasswordIcon] = useState(false);

  const switchToggle = (password, confirmpassword) => {
    if (password.current.type === 'password') {
      password.current.type = 'text';
      confirmpassword.current.type = 'text';
      setpasswordIcon(true);
    } else {
      password.current.type = 'password';
      confirmpassword.current.type = 'password';
      setpasswordIcon(false);
    }
  };

  return {
    passwordIcon,
    switchToggle,
  };
};

export default useToggleVisibility;
