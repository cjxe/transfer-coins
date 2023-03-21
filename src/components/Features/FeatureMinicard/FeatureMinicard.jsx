import React from 'react';
import PropTypes from 'prop-types';
import { HiChevronRight } from 'react-icons/hi';

function FeatureMinicard({ headingText, descriptionText, Icon, scrollToId }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="h-16 w-16">
        <Icon className="h-full w-full fill-teal-600 dark:fill-teal-500" />
      </div>
      <div className="flex max-w-sm flex-col gap-2">
        <h6 className="text-center text-xl font-bold leading-tight text-gray-900 dark:text-gray-100">
          {headingText}
        </h6>
        <span className="text-center text-base font-medium text-gray-500 dark:text-gray-400">
          {descriptionText}
        </span>
      </div>
      <div className="lg:pt-5">
        <a
          href={`#${scrollToId}`}
          className="flex flex-row items-center gap-1 text-base font-semibold text-teal-600 decoration-2 underline-offset-2 hover:underline dark:text-teal-500"
        >
          Learn more
          <div className="h-5 w-5 pt-0.5">
            <HiChevronRight className="drak:fill-teal-500 h-full w-full fill-teal-600" />
          </div>
        </a>
      </div>
    </div>
  );
}

FeatureMinicard.propTypes = {
  headingText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  Icon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(['img', 'svg']),
    }),
    PropTypes.func,
  ]).isRequired,
};

FeatureMinicard.defaultProps = {};

export default FeatureMinicard;
