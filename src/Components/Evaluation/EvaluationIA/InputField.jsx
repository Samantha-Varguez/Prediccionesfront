// InputField.js
import React from 'react';
import './InputField.css';

const InputField = ({ label, description, value, onChange }) => {
  return (
    <div className="input__container">
      <label className="input__label">{label}</label>
      <input
        type="text"
        className="input"
        value={value}
        onChange={onChange}
      />
      <div className="input__description">{description}</div>
    </div>
  );
};

export default InputField;
