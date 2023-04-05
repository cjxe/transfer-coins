import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function AvatarFallback({ className, children, ...props }) {
  return (
    <div
      className={classNames('text-lg font-medium text-zinc-600 dark:text-zinc-200', className)}
      {...props}
    >
      {children}
    </div>
  );
}

AvatarFallback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

AvatarFallback.defaultProps = {
  children: null,
  className: '',
};

export default AvatarFallback;
