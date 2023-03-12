import React from 'react';
import PropTypes from 'prop-types';

function SectionContainer({ headingText, descriptionText }) {
  return (
    <div className="flex flex-col items-center gap-60 py-20">
      <div className="flex flex-col items-center gap-2">
        <h className="text-4xl font-extrabold leading-tight text-gray-900">{headingText}</h>
        <p className="text-lg font-normal text-gray-500">{descriptionText}</p>
      </div>
    </div>
  );
}

SectionContainer.propTypes = {
  headingText: PropTypes.string,
  descriptionText: PropTypes.string,
};

SectionContainer.defaultProps = {
  headingText: '',
  descriptionText: '',
};

export default SectionContainer;
