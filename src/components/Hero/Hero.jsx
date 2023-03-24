import React from 'react';
import PropTypes from 'prop-types';
import HeroHeadingText from '@/components/Hero/HeroHeadingText/HeroHeadingText';
import HeroDescriptionText from '@/components/Hero/HeroDescriptionText/HeroDescriptionText';

function Hero({ children }) {
  return (
    <div className="flex justify-center" id="hero">
      <div className="flex max-w-5xl flex-row px-4 xs:h-screen xs:items-center xs:justify-center xs:pt-12 lg:h-full lg:justify-between lg:py-20">
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
