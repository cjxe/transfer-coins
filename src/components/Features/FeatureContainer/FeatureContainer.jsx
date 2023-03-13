import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import HeadingText from '@/components/Utils/Text/HeadingText/HeadingText';
import DescriptionText from '@/components/Utils/Text/DescriptionText/DescriptionText';

function FeatureContainer({ headingText, descriptionText, icons, iconGap, Illustration }) {
  return (
    <div className="flex items-center justify-center xs:flex-col xs:flex-col xs:gap-12 xs:gap-10 xs:py-10 xs:py-10 lg:flex-row lg:py-20 xl:gap-20 2xl:gap-40">
      <div className="xs:order-2 xs:order-2 lg:order-1">
        {Illustration && <Illustration className="h-full w-full" />}
      </div>
      <div className="flex flex-col gap-9 xs:order-1 xs:order-1 xs:max-w-sm xs:max-w-xl md:max-w-2xl lg:order-2 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <div className="flex flex-col gap-6">
          <HeadingText>{headingText}</HeadingText>
          <DescriptionText>{descriptionText}</DescriptionText>
        </div>
        <div className={clsx(iconGap, 'flex flex-row pl-1 xs:justify-center lg:justify-start')}>
          {icons &&
            icons.map((Icon) => {
              return <Icon className="h-6 w-6 cursor-pointer" />;
              // TODO
              // - [ ] add tooltip when hovered
              // - [ ] add href
            })}
        </div>
      </div>
    </div>
  );
}

FeatureContainer.propTypes = {
  headingText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  iconGap: PropTypes.string,
};

FeatureContainer.defaultProps = {
  iconGap: 'gap-6',
};

export default FeatureContainer;
