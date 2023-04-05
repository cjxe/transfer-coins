import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function AvatarImage({ src, alt, className, ...props }) {
  const [imageSuccessfullyLoaded, setImageSuccessfullyLoaded] = useState(true);

  return (
    <div>
      {imageSuccessfullyLoaded && (
        <Image
          src={src}
          alt={alt}
          placeholder="empty"
          onError={() => {
            setImageSuccessfullyLoaded(false);
          }}
          fill
          {...props}
        />
      )}
    </div>
  );
}

AvatarImage.propTypes = {
  /**
   * The source URL of the image.
   */
  src: PropTypes.string.isRequired,
  /**
   * Alternative text for the image (for accessibility)
   */
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

AvatarImage.defaultProps = {
  className: '',
};

export default AvatarImage;
