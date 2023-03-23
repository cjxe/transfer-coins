import React from 'react';
import PropTypes from 'prop-types';
import HeroHeadingText from '@/components/Hero/HeroHeadingText/HeroHeadingText';
import HeroDescriptionText from '@/components/Hero/HeroDescriptionText/HeroDescriptionText';

function Hero({ children }) {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-5xl flex-row px-4 xs:justify-center xs:pb-24 xs:pt-36 lg:justify-between lg:py-20">
        {children}
      </div>
    </div>
  );
}

Hero.Heading = HeroHeadingText;
Hero.Description = HeroDescriptionText;

Hero.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default Hero;
