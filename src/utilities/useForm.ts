import React, { useState } from 'react';

interface FormState {
  first_name?: string;
  last_name?: string;
  email?: string;
  clinic_name?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
}

const useForm = () => {
  const [inputs, setInputs] = useState<FormState>({});

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
