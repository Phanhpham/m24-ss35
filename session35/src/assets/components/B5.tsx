

import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
 
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="nhap noi dung..."
      />

  );
};

export default Form;
