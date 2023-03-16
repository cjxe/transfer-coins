import React from 'react';
import PropTypes from 'prop-types';

function DescriptionText({ children }) {
  return (
    <p className="text-center font-normal text-gray-500 xs:text-base lg:text-lg">{children}</p>
  );
}

DescriptionText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DescriptionText;
