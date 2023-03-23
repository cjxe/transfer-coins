import React from 'react';
import PropTypes from 'prop-types';

function DescriptionText({ children }) {
  return (
    <p className="text-left font-normal text-gray-500 dark:text-gray-400 xs:text-base lg:text-lg">
      {children}
    </p>
  );
}

DescriptionText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default DescriptionText;
