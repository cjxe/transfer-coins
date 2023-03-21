import React from 'react';
import PropTypes from 'prop-types';

function RecurrenceInterval({ children }) {
  return <p className="text-lg font-medium text-gray-500 dark:text-gray-400">{children}</p>;
}

RecurrenceInterval.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RecurrenceInterval;
