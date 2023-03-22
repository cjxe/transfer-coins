import React from 'react';
import PropTypes from 'prop-types';

// TODO:
// - [ ] add state: disabled

function Checkbox({ id, labelText, helperText, ...props }) {
  return (
    <div className="flex-start flex gap-2">
      <input
        id={id}
        type="checkbox"
        className="form-checkbox rounded border-gray-300 bg-gray-50 text-teal-600 focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 focus:ring dark:border-gray-700 dark:bg-gray-800 dark:checked:bg-teal-600 dark:focus:ring-teal-800"
        {...props}
      />
      <div className="flex flex-col gap-0.5">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100"
        >
          {labelText}
        </label>
        <p className="text-xs font-normal text-gray-500 dark:text-gray-400">{helperText}</p>
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  helperText: PropTypes.string,
};

Checkbox.defaultProps = {
  labelText: '',
  helperText: '',
};

export default Checkbox;
