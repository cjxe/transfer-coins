import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { computePosition } from '@floating-ui/core';

// Source: https://www.youtube.com/watch?v=kfjVorSv_rI
function Tooltip({ content }) {
  const referenceRef = React.createRef();
  const floatingRef = React.createRef();

  useEffect(async () => {
    const position = await computePosition(referenceRef.value, floatingRef.value, {
      placement: 'bottom',
    });
    console.log(position);
  });

  return (
    <div
      ref={floatingRef}
      className="absolute top-0 left-0 z-50 inline-block cursor-default rounded bg-gray-800 px-3 py-1.5 text-sm font-medium text-white"
    >
      {content}
    </div>
  );
}

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {};

export default Tooltip;
