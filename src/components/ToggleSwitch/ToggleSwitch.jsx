import React from 'react';
import PropTypes from 'prop-types';

// TODO
// - [ ] add disabled:
// - [ ] add sizes (sm, base, lg)

function ToggleSwitch({ id, labelText, helperText, ...props }) {
  return (
    <label className="flex-start relative flex cursor-pointer gap-2">
      <input type="checkbox" value="" className="peer sr-only" {...props} />
      <div className="peer h-6 w-11 shrink-0 rounded-full border bg-gray-50 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:border-teal-600 peer-checked:bg-teal-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-teal-200 peer-focus:ring-4 dark:border-gray-700 dark:bg-gray-800 dark:peer-focus:ring-teal-800" />
      <div className="flex flex-col gap-0.5">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100"
        >
          {labelText}
        </label>
        <p className="text-xs font-normal text-gray-500 dark:text-gray-400">{helperText}</p>{' '}
      </div>
    </label>
  );
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

ToggleSwitch.defaultProps = {
  labelText: '',
  helperText: '',
};

export default ToggleSwitch;
