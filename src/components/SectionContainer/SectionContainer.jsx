import React from 'react';
import PropTypes from 'prop-types';
import HeadingText from '@/components/SectionContainer/HeadingText/HeadingText';
import DescriptionText from '@/components/SectionContainer/DescriptionText/DescriptionText';

function SectionContainer({ headingText, descriptionText, sectionId, children }) {
  return (
    <div id={sectionId} className="flex flex-col items-center gap-16 py-20 px-4">
      <div className="flex flex-col gap-2 xs:mt-16 lg:mt-0">
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
