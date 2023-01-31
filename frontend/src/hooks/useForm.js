import { useState } from 'react';

// хук управления формой
export default function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
