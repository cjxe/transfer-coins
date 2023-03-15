import React from 'react';
import clsx from 'clsx';

const variants = {
  primary: 'text-white bg-teal-700 hover:bg-teal-800 focus:ring focus:ring-teal-200',
  secondary:
    'bg-white text-gray-800 border border-gray-200 hover:bg-gray-100 focus:ring focus:ring-gray-300',
  green: 'text-white bg-green-700 hover:bg-green-800 focus:ring focus:ring-green-200',
  red: 'text-white bg-red-700 hover:bg-red-800 focus:ring focus:ring-red-200',
  yellow: 'text-white bg-yellow-600 hover:bg-yellow-700 focus:ring focus:ring-yellow-400',
  // TODO: rainbow
  // TODO: primaryGradient
};

const sizes = {
  xs: 'text-xs px-3 py-2',
  sm: 'text-sm px-3 py-2',
  base: 'text-sm px-5 py-2.5',
  lg: 'text-base px-5 py-3',
  xl: 'text-base px-6 px-3.5',
};

function Button({ variant, size, children, ...props }) {
  return (
    <button
      type="button"
      className={clsx('font-semibold', 'rounded-lg', variants[variant], sizes[size])}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
