import React, { useState } from 'react';

const useForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      name: string;
      value: string;
    };
    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
  };

  return { inputs, handleChange };
};

export default useForm;
