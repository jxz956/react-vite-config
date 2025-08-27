// src/components/CustomButton.jsx
import React from 'react';

const CustomButton = ({ label, onClick, style, children }) => {

  return (
    <button onClick={onClick} style={{ padding: '10px 20px', ...style }}>
      {label}
      {children && <span style={{ marginLeft: '8px' }}>{children}</span>}
    </button>
  );
};

export default CustomButton;
