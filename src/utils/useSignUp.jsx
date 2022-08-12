/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../app';

const useSignUp = () => {
  const redirect = useNavigate();
  const [form, setForm] = useState({});
  const [error, setError] = useState('');

  // onChange function
  const handleFormValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Register function
  const registerUser = async () => {
    try {
      const res = await Api.post('/signup', {
        userName: form.username,
        email: form.email,
        password: form.password,
        reEnterPassword: form.passwordAgain,
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
    handleFormValue,
    registerUser,
  ];
};

export default useSignUp;
