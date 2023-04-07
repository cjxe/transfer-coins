import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ToastContext } from './ToastContext/ToastContext';

const locationClasses = {
  'top-left': 'top-3 left-3 mr-3 mb-3',
  'top-right': 'top-3 right-3 ml-3 mb-3',
  'bottom-left': 'bottom-3 left-3 mr-3 mt-3',
  'bottom-right': 'bottom-3 right-3 ml-3 mt-3',
};

/**
 * This component is used to display a toast message.
 * A toast message can be anything from a simple notification to a more complex component like a custom `<Alert>`.
 */
function Toast({ location, autoHide, duration, ToastChildren, children }) {
  const [isHidden, setIsHidden] = useState(true);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (autoHide) {
      const timeout = setTimeout(() => {
        setIsHidden(true);
      }, duration);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isHidden]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ToastContext.Provider value={[isHidden, setIsHidden]}>
      {children}
      <div
        className={classNames(
          'fixed transition-opacity duration-200 shadow-lg',
          locationClasses[location],
          isHidden ? '-z-50 animate-fade-out opacity-0' : 'z-50 animate-fade-in opacity-100'
        )}
      >
        {ToastChildren}
      </div>
    </ToastContext.Provider>
  );
}

Toast.propTypes = {
  location: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']).isRequired,
  autoHide: PropTypes.bool,
  // PropTypes number or string
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
};

Toast.defaultProps = {
  autoHide: false,
  duration: 3000,
};

export default Toast;
