import React from 'react';
import PropTypes from 'prop-types';

function HeroHeadingText({ children }) {
  return (
    <h1 className="font-black leading-tight text-black dark:text-zinc-100 xs:w-[18rem] xs:text-center xs:text-4xl lg:w-full lg:text-left lg:text-6xl">
      {children}
    </h1>
  );
}

HeroHeadingText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default HeroHeadingText;
