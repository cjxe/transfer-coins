import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const variants = {
  primary:
    'text-white bg-teal-700 hover:bg-teal-800 focus:ring focus:ring-teal-200 dark:bg-teal-800 dark:hover:bg-teal-700 dark:focus:ring-teal-900',
  secondary:
    'bg-white text-zinc-800 inner-border dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:focus:ring-zinc-600 dark:focus:ring-opacity-40 dark:text-white dark:inner-border-0 inner-border-zinc-200 hover:bg-zinc-100 focus:ring focus:ring-zinc-100 focus:ring-opacity-70',
  green:
    'text-white bg-green-700 hover:bg-green-800 focus:ring focus:ring-green-200 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-900',
  red: 'text-white bg-red-700 hover:bg-red-800 focus:ring focus:ring-red-200 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-900',
  yellow:
    'text-white bg-yellow-600 hover:bg-yellow-700 focus:ring focus:ring-yellow-400 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:ring-yellow-900',
  gradientRainbow:
    'text-white shadow-md bg-gradient-to-tl dark:to-yellow-500 dark:via-pink-600 dark:from-blue-500 to-yellow-400 transition-all motion-safe:focus:transition-none via-pink-500 from-blue-500 duration-200 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring focus:ring-violet-400 dark:focus:ring-violet-700 focus:ring-opacity-40 dark:focus:ring-opacity-80',
  gradientTeal:
    'text-white bg-gradient-to-r to-teal-500 from-teal-700 dark:to-teal-600 dark:from-teal-800 transition-all motion-safe:focus:transition-none duration-200 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800',
  google: 'text-white bg-[#4284F4] hover:bg-[#3271DC] focus:ring focus:ring-blue-200',
  twitter: 'text-white bg-[#1DA1F2] hover:bg-[#0682CE] focus:ring focus:ring-blue-300',
  twitch: 'text-white bg-[#6441A5] hover:bg-[#592BB0] focus:ring focus:ring-purple-200',
};

// sizes
const textSizes = {
  xs: 'text-xs px-3 py-2',
  sm: 'text-sm px-3 py-2',
  base: 'text-sm px-5 py-2.5',
  lg: 'text-base px-5 py-3',
  xl: 'text-base px-6 py-3.5',
};

const iconSizes = {
  xs: 'w-4 h-4',
  sm: 'w-4 h-4',
  base: 'w-5 h-5',
  lg: 'w-5 h-5',
  xl: 'w-5 h-5',
};

/**
 * Primary UI component for user interaction
 */
function Button({ variant, size, LeftIcon, children, RightIcon, className, ...props }) {
  return (
    <button
      type="button"
      className={classNames(
        'select-none rounded-lg font-semibold',
        variants[variant],
        textSizes[size],
        className
      )}
      {...props}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        {LeftIcon && (
          <div className={iconSizes[size]}>
            <LeftIcon className="h-full w-full bg-transparent fill-white stroke-white" />
          </div>
        )}
        <div>{children}</div>
        {RightIcon && (
          <div className={iconSizes[size]}>
            <RightIcon className="h-full w-full bg-transparent fill-white stroke-white" />
          </div>
        )}
      </div>
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'green',
    'red',
    'yellow',
    'gradientTeal',
    'gradientRainbow',
    'google',
    'twitter',
    'twitch',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']),
  /**
   * Button's text content
   */
  LeftIcon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(['img', 'svg']),
    }),
    PropTypes.func,
  ]),
  children: PropTypes.string.isRequired,
  RightIcon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(['img', 'svg']),
    }),
    PropTypes.func,
  ]),
};

Button.defaultProps = {
  variant: 'primary',
  size: 'base',
  LeftIcon: undefined,
  RightIcon: undefined,
};

export default Button;