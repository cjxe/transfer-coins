import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const variants = {
  primary: 'fill-teal-600 stroke-teal-600 dark:fill-teal-500 dark:stroke-teal-500',
  secondary: 'fill-zinc-500 stroke-zinc-500 dark:fill-zinc-400 dark:stroke-zinc-400',
  error: 'fill-red-600 stroke-red-600 dark:fill-red-500 dark:stroke-red-500',
  success: 'fill-green-600 stroke-green-600 dark:fill-green-500 dark:stroke-green-500',
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
function ButtonWithIcon({ variant, size, Icon, className, ...props }) {
  return (
    <button
      type="button"
      className={classNames(
        'flex items-center justify-center bg-inherit hover:bg-zinc-100 focus:ring-zinc-200 focus:ring-2 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600',
        buttonSizes[size],
        className
      )}
      {...props}
    >
      <Icon className={classNames(variants[variant], svgSizes[size])} />
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
