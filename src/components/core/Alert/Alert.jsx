import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  HiExclamationCircle,
  HiExclamation,
  HiInformationCircle,
  HiCheckCircle,
} from 'react-icons/hi';
import AlertTitle from './AlertTitle/AlertTitle';

const severityStyles = {
  error: 'text-red-900 bg-red-100 dark:text-red-100 dark:bg-red-900',
  warning: 'text-yellow-900 bg-yellow-100 dark:text-yellow-100 dark:bg-yellow-900',
  info: 'text-teal-900 bg-teal-100 dark:text-teal-100 dark:bg-teal-900',
  success: 'text-green-900 bg-green-100 dark:text-green-100 dark:bg-green-900',
};

const severityIcons = {
  error: <HiExclamationCircle className="h-5 w-5" />,
  warning: <HiExclamation className="h-5 w-5" />,
  info: <HiInformationCircle className="h-5 w-5" />,
  success: <HiCheckCircle className="h-5 w-5" />,
};

function Alert({ severity, CustomIcon, className, children }) {
  const Icon = (CustomIcon && <CustomIcon className="h-5 w-5" />) || severityIcons[severity];

  return (
    <div
      className={classNames(
        severityStyles[severity],
        'flex flex-row justify-start gap-3 rounded p-3 font-normal',
        className
      )}
      role="alert"
    >
      <div className="mt-[0.13rem]">{Icon}</div>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

Alert.propTypes = {
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  CustomIcon: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  severity: 'info',
  CustomIcon: null,
  className: '',
};

Alert.Title = AlertTitle;

export default Alert;
