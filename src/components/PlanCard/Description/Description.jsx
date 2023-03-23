import React from 'react';
import PropTypes from 'prop-types';

function Description({ children }) {
  return (
    <p className="text-center text-lg font-normal text-gray-500 dark:text-gray-400">{children}</p>
  );
}

Description.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Description;
