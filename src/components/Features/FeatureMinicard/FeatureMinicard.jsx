import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function FeatureMinicard({ headingText, descriptionText, icons, iconGap }) {
  return (
    // add illustrations
    <div className="flex flex-col items-center gap-60 py-20">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-6">
          <h className="text-4xl font-extrabold leading-tight text-gray-900">{headingText}</h>
          <p className="text-lg font-medium text-gray-500">{descriptionText}</p>
        </div>
        {/* <Icon /> */}
        <div className={clsx(iconGap, 'flex flex-row pl-1')}>
          {icons.map((Icon) => {
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

FeatureMinicard.propTypes = {
  headingText: PropTypes.string,
  descriptionText: PropTypes.string,
  iconGap: PropTypes.string,
};

FeatureMinicard.defaultProps = {
  headingText: '',
  descriptionText: '',
  iconGap: 'gap-6',
};

export default FeatureMinicard;
