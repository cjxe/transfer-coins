import React from 'react';
import PropTypes from 'prop-types';

function HeadingText({ children }) {
  return (
    <h5 className="text-center font-extrabold leading-tight text-gray-900 xs:text-3xl lg:text-4xl">
      {children}
    </h5>
  );
}

HeadingText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeadingText;
