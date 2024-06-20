import React from 'react';

export function Button({
  label,
  onClick,
  disabled = false,
  className = '',
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {label}
    </button>
  );
}
