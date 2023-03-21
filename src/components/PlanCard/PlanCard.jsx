import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Name from './Name/Name';
import Description from './Description/Description';
import Price from './Price/Price';
import RecurrenceInterval from './RecurrenceInterval/RecurrenceInterval';
import Feature from './Feature/Feature';

/**
 * The cards for each price/plan
 */
function PlanCard({ isRainbow, children }) {
  return (
    <div
      className={clsx(
        'flex max-w-sm flex-col rounded-lg p-1',
        isRainbow
          ? 'bg-gradient-to-br from-cyan-400 via-yellow-400 to-red-400 shadow-2xl dark:from-cyan-600 dark:via-yellow-600 dark:to-red-600'
          : 'border border-gray-200 bg-white shadow-md dark:border-gray-600 dark:bg-gray-800'
      )}
    >
      <div
        className={clsx(
          'flex h-full w-full flex-col xs:gap-10 lg:justify-between lg:gap-0',
          isRainbow
            ? 'rounded bg-white bg-opacity-80 p-[1.75rem] dark:bg-gray-800 dark:bg-opacity-80'
            : 'p-7'
        )}
      >
        {children}
      </div>
    </div>
  );
}

PlanCard.propTypes = {
  children: PropTypes.func.isRequired,
  isRainbow: PropTypes.bool,
};

PlanCard.defaultProps = {
  isRainbow: false,
};

PlanCard.Name = Name;
PlanCard.Description = Description;
PlanCard.Price = Price;
PlanCard.RecurrenceInterval = RecurrenceInterval;
PlanCard.Feature = Feature;

export default PlanCard;
