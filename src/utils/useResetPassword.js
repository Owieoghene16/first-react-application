/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../app';

const useResetPassword = () => {
  const { email, accessToken } = useParams();
  const [form, setForm] = useState({});
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(true);

  const formInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetPassword = async () => {
    try {
      const res = await Api.patch(`/reset-password/${email}/${accessToken}`, {
        newPassword: form.password,
        confirmPassword: form.confirmPassword,
      });
      setResult(res.data.message);
      setLoading(false);
    } catch (err) {
      setResult(err.response.data.message);
    }
  };

  return {
    result,
    loading,
    formInput,
    resetPassword,
  };
};

export default useResetPassword;
