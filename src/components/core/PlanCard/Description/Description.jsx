import React from 'react';
import PropTypes from 'prop-types';

function Description({ children }) {
  return (
    <p className="text-center text-lg font-normal text-zinc-500 dark:text-zinc-400">{children}</p>
  );
}

Description.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Description;
