import React from 'react';
import PropTypes from 'prop-types';

function HeroDescriptionText({ children }) {
  return (
    <p className="xs:text-md font-normal text-zinc-500 dark:text-zinc-400 xs:w-[18rem] xs:text-center lg:w-full lg:text-left lg:text-xl">
      {children}
    </p>
  );
}

HeroDescriptionText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default HeroDescriptionText;
