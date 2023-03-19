import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const variants = {
  primary:
    'text-white bg-teal-700 hover:bg-teal-800 focus:ring focus:ring-teal-200 dark:bg-teal-800 dark:hover:bg-teal-700 dark:focus:ring-teal-900',
  secondary:
    'bg-white text-gray-800 inner-border inner-border-gray-200 hover:bg-gray-100 focus:ring focus:ring-gray-300',
  green:
    'text-white bg-green-700 hover:bg-green-800 focus:ring focus:ring-green-200 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-900',
  red: 'text-white bg-red-700 hover:bg-red-800 focus:ring focus:ring-red-200 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-900',
  yellow:
    'text-white bg-yellow-600 hover:bg-yellow-700 focus:ring focus:ring-yellow-400 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:ring-yellow-900',
  gradientRainbow:
    'text-white shadow-md bg-gradient-to-tl dark:to-yellow-500 dark:via-pink-600 dark:from-blue-500 to-yellow-400 transition-all motion-safe:focus:transition-none via-pink-500 from-blue-500 duration-200 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring focus:ring-violet-400',
  gradientTeal:
    'text-white bg-gradient-to-r to-teal-500 from-teal-700 dark:to-teal-600 dark:from-teal-800 transition-all motion-safe:focus:transition-none duration-200 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring focus:ring-teal-200',
};

const sizes = {
  xs: 'text-xs px-3 py-2',
  sm: 'text-sm px-3 py-2',
  base: 'text-sm px-5 py-2.5',
  lg: 'text-base px-5 py-3',
  xl: 'text-base px-6 py-3.5',
};

/**
 * Primary UI component for user interaction
 */
function Button({ variant, size, children, ...props }) {
  return (
    <button
      type="button"
      className={clsx('select-none rounded-lg font-semibold', variants[variant], sizes[size])}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'green',
    'red',
    'yellow',
    'gradientTeal',
    'gradientRainbow',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']),
  /**
   * Button content
   */
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'base',
};

export default Button;
