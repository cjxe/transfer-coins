import React from 'react';
import PropTypes from 'prop-types';

function DescriptionText({ children }) {
  return (
    <span className="text-center font-normal text-zinc-500 dark:text-zinc-400 xs:text-base lg:text-lg">
      {children}
    </span>
  );
}

DescriptionText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]).isRequired,
};

export default DescriptionText;
