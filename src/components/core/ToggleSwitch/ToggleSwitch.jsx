/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ToggleSwitch({ id, labelText, helperText, disabled, ...props }) {
  return (
    <div className={disabled ? 'cursor-not-allowed' : ''}>
      <label
        className={classNames(
          disabled ? 'pointer-events-none  opacity-40' : '',
          'flex-start relative flex cursor-pointer gap-2'
        )}
      >
        <input type="checkbox" value="" className="peer sr-only" {...props} />
        <div className="peer h-6 w-11 shrink-0 rounded-full border bg-zinc-50 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] peer-checked:border-teal-600 peer-checked:bg-teal-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-teal-200 peer-focus:ring-4 dark:border-zinc-700 dark:bg-zinc-800 dark:peer-focus:ring-teal-800" />
        <div className="flex flex-col gap-0.5">
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100"
          >
            {labelText}
          </label>
          <p className="text-xs font-normal text-zinc-500 dark:text-zinc-400">{helperText}</p>{' '}
        </div>
      </label>
    </div>
  );
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  labelText: '',
  helperText: '',
  disabled: false,
};

export default ToggleSwitch;
