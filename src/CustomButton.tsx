// src/components/CustomButton.tsx
import React, { CSSProperties, ReactNode } from 'react';

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  style?: CSSProperties;
  children?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, style, children }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', ...style }}>
      {label}
      {children && <span style={{ marginLeft: '8px' }}>{children}</span>}
    </button>
  );
};

export default CustomButton;
