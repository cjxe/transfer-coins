import React from 'react';
import PropTypes from 'prop-types';

function Name({ children }) {
  return (
    <h5 className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">
      {children}
    </h5>
  );
}
Name.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Name;