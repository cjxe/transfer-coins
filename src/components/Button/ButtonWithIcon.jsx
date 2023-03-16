import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const variants = {
  primary: 'fill-teal-600 stroke-teal-600',
  secondary: 'fill-gray-500 stroke-gray-500',
  error: 'fill-red-600 stroke-red-600',
  success: 'fill-green-600 stroke-green-600',
};

const svgSizes = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  base: 'w-6 h-6',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const buttonSizes = {
  xs: 'p-1.5 rounded',
  sm: 'p-2 rounded-lg',
  base: 'p-2 rounded-lg',
  lg: 'p-2.5 rounded-lg',
  xl: 'p-2.5 rounded-lg',
};

// Remove SVG's `height`, `width`, `fill`, `stroke` properties
function ButtonWithIcon({ variant, size, Icon, ...props }) {
  return (
    <button
      type="button"
      className={clsx(
        'flex items-center justify-center bg-inherit hover:bg-gray-100 focus:ring-2 focus:ring-gray-200',
        buttonSizes[size]
      )}
      {...props}
    >
      <Icon className={clsx(variants[variant], svgSizes[size])} />
    </button>
  );
}

ButtonWithIcon.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'error', 'success']),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']),
  Icon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(['img', 'svg']),
    }),
    PropTypes.func,
  ]).isRequired,
};

ButtonWithIcon.defaultProps = {
  variant: 'primary',
  size: 'base',
};

export default ButtonWithIcon;
