import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CgSpinner } from 'react-icons/cg';
import { BsDot } from 'react-icons/bs';

const variants = {
  spinner: <CgSpinner className="h-10 w-10 animate-spin" />,
  'three-dots': (
    <div className="flex flex-row">
      <BsDot className="-mx-3.5 -my-3.5 h-10 w-10 animate-blink" />
      <BsDot className="-mx-3.5 -my-3.5 h-10 w-10 animate-blink animation-delay-300" />
      <BsDot className="-mx-3.5 -my-3.5 h-10 w-10 animate-blink animation-delay-600" />
    </div>
  ),
};

/**
 * Indicates that a React component is loading. Also known as the "spinner" or "progress indicator"
 */
function Loading({ variant, className }) {
  return (
    <div
      className={classNames(
        'flex h-full w-full flex-col items-center justify-center text-teal-600 dark:text-teal-500',
        className
      )}
    >
      {variants[variant]}
    </div>
  );
}

Loading.propType = {
  variant: PropTypes.oneOf(['spinner', 'three-dots']),
};

Loading.defaultProps = {
  variant: 'spinner',
};

export default Loading;
