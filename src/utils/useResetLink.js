/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { Api } from '../app';

const useResetLink = () => {
  const [form, setForm] = useState({});
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(true);

  const formInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetLink = async () => {
    try {
      const res = await Api.patch('/forgot-password', {
        email: form.email,
      });
      setLoading(false);
      setResult(res.data.message);
    } catch (err) {
      setResult(err.response.data.message);
    }
  };

  return {
    result,
    loading,
    formInput,
    resetLink,
  };
};

export default useResetLink;
