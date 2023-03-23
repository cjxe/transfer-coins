import React from 'react';
import PropTypes from 'prop-types';
import { HiX, HiCheck } from 'react-icons/hi';

function Feature({ isIncluded, children }) {
  let featureIcon;
  if (isIncluded) {
    featureIcon = <HiCheck className="h-full w-full fill-green-500 stroke-green-500" />;
  } else {
    featureIcon = <HiX className="h-full w-full fill-red-400 stroke-red-400" />;
  }
  return (
    <li className="flex flex-row items-center gap-4">
      <div className="h-5 w-5 shrink-0">{featureIcon}</div>
      <p className="text-base font-normal text-gray-900 dark:text-gray-100">{children}</p>
    </li>
  );
}

Feature.propTypes = {
  isIncluded: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Feature;
