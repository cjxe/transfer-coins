import React from 'react';
import PropTypes from 'prop-types';

function DescriptionText({ children }) {
  return (
    <p className="text-center font-normal text-zinc-500 dark:text-zinc-400 xs:text-base lg:text-lg">
      {children}
    </p>
  );
}

DescriptionText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default DescriptionText;
