import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function AvatarFallback({ children, className }) {
  return (
    <div
      className={classNames(
        'text-lg font-medium text-neutral-600 dark:text-neutral-200',
        className
      )}
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
