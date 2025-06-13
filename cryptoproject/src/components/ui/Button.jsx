import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`btn ${className}`}
      style={{ padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
