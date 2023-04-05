import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * This component divides content both horizontally and vertically.
 * When `orientation="vertical"`, the `height` style needs to be given if parent component's `height` is not defined.
 */
function Divider({ orientation, className }) {
  return (
    <div
      className={classNames(
        orientation === 'horizontal'
          ? 'h-[1px] grow'
          : 'min-h-full w-[1px] border-l border-zinc-200 dark:border-zinc-700',
        'bg-zinc-200 dark:bg-zinc-700',
        className
      )}
    />
  );
}

Divider.propType = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
};

Divider.defaultProps = {
  orientation: 'horizontal',
  className: '',
};

export default Divider;
