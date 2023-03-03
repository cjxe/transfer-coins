import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TestSVG from '../assets/icons/test.svg';

const variants = {
  primary: 'fill-teal-600 stroke-teal-600',
  secondary: 'fill-gray-500 stroke-gray-500',
};

const sizesSVG = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  base: 'w-6 h-6',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const sizesButton = {
  xs: 'p-1.5 rounded',
  sm: 'p-2 rounded-lg',
  base: 'p-2.5 rounded-lg',
  lg: 'p-3 rounded-lg',
  xl: 'p-2.5 rounded-lg',
};

function ButtonIcon({ variant, size }) {
  return (
    <button
      type="button"
      className={clsx(
        'bg-white hover:bg-gray-100 flex justify-center items-center active:ring-2 active:ring-gray-200',
        sizesButton[size]
      )}
    >
      <TestSVG className={clsx(variants[variant], sizesSVG[size])} />
    </button>
  );
}

ButtonIcon.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']),
};

ButtonIcon.defaultProps = {
  variant: 'primary',
  size: 'base',
};

export default ButtonIcon;
