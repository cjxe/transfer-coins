import React from 'react';
import PropTypes from 'prop-types';
import HeadingText from '@/components/core/SectionContainer/HeadingText/HeadingText';
import DescriptionText from '@/components/core/SectionContainer/DescriptionText/DescriptionText';

function SectionContainer({ headingText, descriptionText, sectionId, children }) {
  return (
    <div
      id={sectionId}
      className="flex flex-col items-center py-20 xs:gap-8 xs:px-8 lg:gap-16 lg:px-4"
    >
      <div className="flex flex-col xs:gap-4 lg:gap-2">
        <HeadingText>{headingText}</HeadingText>
        <DescriptionText>{descriptionText}</DescriptionText>
      </div>
      {children}
    </div>
  );
}

SectionContainer.propTypes = {
  headingText: PropTypes.string.isRequired,
  descriptionText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sectionId: PropTypes.string.isRequired,
};

SectionContainer.defaultProps = {
  descriptionText: '',
};

export default SectionContainer;
