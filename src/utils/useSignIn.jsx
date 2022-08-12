/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../app';

const useSignIn = () => {
  const redirect = useNavigate();
  const [form, setForm] = useState({});
  const [error, setError] = useState('');
  const [passwordicon, setPasswordIcon] = useState(false);

  const formInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // login field
  const switchField = (input) => {
    if (input.current.type === 'password') {
      input.current.type = 'text';
      setPasswordIcon(true);
    } else {
      input.current.type = 'password';
      setPasswordIcon(false);
    }
  };

  const logIn = async () => {
    try {
      const res = await Api.post('/signin', {
        email: form.email,
        password: form.password,
      });
      sessionStorage.setItem('user', JSON.stringify(res.data));
      setError('');
      redirect('/home');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return [
    error,
    passwordicon,
    switchField,
    formInput,
    logIn,
  ];
};

export default useSignIn;
