import React from 'react';
import PropTypes from 'prop-types';
import HeadingText from '@/components/SectionContainer/HeadingText/HeadingText';
import DescriptionText from '@/components/SectionContainer/DescriptionText/DescriptionText';

function SectionContainer({ headingText, descriptionText, sectionId, children }) {
  return (
    <div id={sectionId} className="flex flex-col items-center py-20 px-4 xs:gap-8 lg:gap-16">
      <div className="flex flex-col xs:mt-16 xs:gap-4 lg:mt-0 lg:gap-2">
        <HeadingText>{headingText}</HeadingText>
        <DescriptionText>{descriptionText}</DescriptionText>
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
