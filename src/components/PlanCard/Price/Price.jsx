import React from 'react';
import PropTypes from 'prop-types';

function Price({ children }) {
  return (
    <h4 className="text-center text-5xl font-extrabold leading-none text-gray-900 dark:text-gray-100">
      {children}
    </h4>
  );
}

Price.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Price;
