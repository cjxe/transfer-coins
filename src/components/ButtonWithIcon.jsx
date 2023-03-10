import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const variants = {
  primary: 'fill-teal-600 stroke-teal-600',
  secondary: 'fill-gray-500 stroke-gray-500',
};

const svgSizes = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  base: 'w-6 h-6',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const buttonSizes = {
  xs: 'p-1.5 rounded',
  sm: 'p-2 rounded-lg',
  base: 'p-2.5 rounded-lg',
  lg: 'p-3 rounded-lg',
  xl: 'p-2.5 rounded-lg',
};

// Remove SVG's `height`, `width`, `fill`, `stroke` properties
function ButtonWithIcon({ variant, size, Icon }) {
  return (
    <button
      type="button"
      className={clsx(
        'flex items-center justify-center bg-inherit hover:bg-gray-100 active:ring-2 active:ring-gray-200',
        buttonSizes[size]
      )}
    >
      <Icon className={clsx(variants[variant], svgSizes[size])} />
    </button>
  );
}

ButtonWithIcon.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']),
};

ButtonWithIcon.defaultProps = {
  variant: 'primary',
  size: 'base',
};

export default ButtonWithIcon;
