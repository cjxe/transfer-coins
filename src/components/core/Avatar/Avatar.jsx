import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AvatarImage from './AvatarImage/AvatarImage';
import AvatarFallback from './AvatarFallback/AvatarFallback';

/**
 * The `<Avatar>` components is used to display a user's profile picture. If `<Avatar.Image>` fails to load, `<Avatar>` falls back to `<Avatar.Fallback>` .
 */
function Avatar({ className, children }) {
  return (
    <div
      className={classNames(
        'relative flex items-center justify-center overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-600',
        className
      )}
    >
      {children}
    </div>
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Avatar.defaultProps = {
  className: 'w-12 h-12',
  children: null,
};

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

export default Avatar;
