import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const chipColors = {
  primary: 'text-zinc-900 bg-zinc-200 dark:text-zinc-100 dark:bg-zinc-700',
  red: 'text-red-900 bg-red-200 dark:text-red-100 dark:bg-red-900',
  yellow: 'text-yellow-900 bg-yellow-200 dark:text-yellow-100 dark:bg-yellow-900',
  green: 'text-green-900 bg-green-200 dark:text-green-100 dark:bg-green-900',
};

const chipSizes = {
  sm: 'text-xs py-0.5 px-1.5 gap-1',
  md: 'text-xs py-1.5 px-2 gap-1.5',
  lg: 'text-sm py-1.5 px-2.5 gap-1.5',
};

// icon
const iconSizes = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

function Chip({ color, size, Icon, className, children }) {
  return (
    <div
      className={classnames(
        chipColors[color],
        chipSizes[size],
        'inline-flex items-center rounded-full font-medium',
        className
      )}
    >
      {Icon && (
        <div className={iconSizes[size]}>
          <Icon className="ml-[-0.06rem] h-full w-full" />
        </div>
      )}
      <span>{children}</span>
    </div>
  );
}

Chip.propTypes = {
  color: PropTypes.oneOf(['primary', 'red', 'yellow', 'green']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  Icon: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Chip.defaultProps = {
  color: 'primary',
  size: 'md',
  Icon: null,
  className: '',
};

export default Chip;
