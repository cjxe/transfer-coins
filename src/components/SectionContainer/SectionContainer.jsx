import React from 'react';
import PropTypes from 'prop-types';

function SectionContainer({ headingText, descriptionText, sectionId, children }) {
  return (
    <div id={sectionId} className="flex flex-col items-center gap-16 py-20">
      <div className="flex flex-col gap-2">
        <h className="text-center font-extrabold leading-tight text-gray-900 xs:text-3xl lg:text-4xl">
          {headingText}
        </h>
        <p className="text-center font-normal text-gray-500 xs:text-base lg:text-lg">
          {descriptionText}
        </p>
      </div>
      {children}
    </div>
  );
}

SectionContainer.propTypes = {
  headingText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string,
  sectionId: PropTypes.string.isRequired,
};

SectionContainer.defaultProps = {
  descriptionText: '',
};

export default SectionContainer;
