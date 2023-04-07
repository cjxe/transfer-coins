import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function AlertTitle({ className, children }) {
  return (
    <span className={classNames('mb-[-0.5rem] text-lg font-semibold leading-snug', className)}>
      {children}
    </span>
  );
}

AlertTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AlertTitle;
