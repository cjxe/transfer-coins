import React from 'react';
import PropTypes from 'prop-types';

function RecurrenceInterval({ children }) {
  return <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">{children}</p>;
}

RecurrenceInterval.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RecurrenceInterval;
