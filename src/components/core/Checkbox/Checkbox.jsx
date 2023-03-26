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
        className="form-checkbox rounded border-zinc-300 bg-zinc-50 text-teal-600 focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 focus:ring dark:border-zinc-700 dark:bg-zinc-800 dark:checked:bg-teal-600 dark:focus:ring-teal-800"
        {...props}
      />
      <div className="flex flex-col gap-0.5">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100"
        >
          {labelText}
        </label>
        <p className="text-xs font-normal text-zinc-500 dark:text-zinc-400">{helperText}</p>
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Checkbox.defaultProps = {
  labelText: '',
  helperText: '',
};

export default Checkbox;
