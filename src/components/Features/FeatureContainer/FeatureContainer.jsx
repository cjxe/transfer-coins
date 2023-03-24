import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeadingText from '@/components/Features/FeatureContainer/HeadingText/HeadingText';
import DescriptionText from '@/components/Features/FeatureContainer/DescriptionText/DescriptionText';

function FeatureContainer({ headingText, descriptionText, icons, iconGap, Illustration, id }) {
  return (
    <div id={id} className="flex items-center justify-center xs:px-8 xs:py-10 lg:px-4 lg:py-20">
      <div className="flex max-w-5xl items-center justify-center xs:flex-col xs:gap-12 lg:flex-row xl:gap-20 2xl:gap-40">
        <div className="xs:order-2 lg:order-1">
          {Illustration && <Illustration className="h-full w-full" />}
        </div>
        <div className="flex flex-col gap-9 xs:order-1 md:max-w-2xl lg:order-2 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <div className="flex flex-col gap-6">
            <HeadingText>{headingText}</HeadingText>
            <DescriptionText>{descriptionText}</DescriptionText>
          </div>
          <div
            className={classNames(
              iconGap,
              'flex flex-row flex-wrap pl-1 xs:justify-center lg:justify-start'
            )}
          >
            {icons &&
              icons.map((Icon) => {
                return <Icon className="h-6 w-6 cursor-pointer" key={Icon.name} />;
                // TODO
                // - [ ] add tooltip when hovered
                // - [ ] add href
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

FeatureContainer.propTypes = {
  id: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  descriptionText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  iconGap: PropTypes.string,
};

FeatureContainer.defaultProps = {
  iconGap: 'gap-6',
};

export default FeatureContainer;
