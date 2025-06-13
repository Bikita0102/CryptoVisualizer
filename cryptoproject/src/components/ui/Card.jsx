import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`card ${className}`} style={{ padding: '1rem', borderRadius: '8px' }}>
      {children}
    </div>
  );
};

export default Card;
