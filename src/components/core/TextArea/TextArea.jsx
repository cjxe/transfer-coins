import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// States
const inputStates = {
  default:
    'border bg-zinc-50 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 dark:focus-within:border-zinc-700 dark:focus-within:ring-zinc-600 text-zinc-900 dark:text-zinc-100 focus-within:border-zinc-400 focus-within:ring-2 focus-within:ring-zinc-200',
  error:
    'border bg-red-50 dark:bg-zinc-800 dark:border-red-600 dark:focus-within:border-red-900 dark:focus-within:ring-red-800 border-red-500 text-red-700 dark:text-red-300 focus-within:ring-2 focus-within:ring-red-200',
  success:
    'border bg-green-50 dark:bg-zinc-800 dark:border-green-600 dark:focus-within:border-green-900 dark:focus-within:ring-green-800 border-green-500 text-green-700 dark:text-green-300 focus-within:ring-2 focus-within:ring-green-200',
};

const placeholderStates = {
  default: 'placeholder-zinc-400 dark:placeholder-zinc-500',
  error: 'placeholder-red-400 dark:placeholder-red-800',
  success: 'placeholder-green-400 dark:placeholder-green-800',
};

const labelStates = {
  default: 'text-zinc-900 dark:text-zinc-100',
  error: 'text-red-600 dark:text-red-400',
  success: 'text-green-600 dark:text-green-400',
};

const helperStates = {
  default: 'text-zinc-500 dark:text-zinc-400',
  error: 'text-red-500 dark:text-red-600',
  success: 'text-green-500 dark:text-green-600',
};

// Sizes
const wrapperSizes = {
  sm: 'px-2.5 py-1.5',
  base: 'px-3 py-2',
  lg: 'px-3.5 py-2.5',
};

const inputSizes = {
  sm: 'text-sm font-normal leading-tight',
  base: 'text-sm font-normal leading-snug',
  lg: 'text-base font-normal leading-noraml',
};

/**
 * More customisable (and bigger) version of the `TextInput` component
 */
function TextArea({ id, state, size, label, placeholder, helperText, rows, cols, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className={classNames(labelStates[state], 'text-sm font-medium')}>
          {label}
        </label>
      )}
      <div
        className={classNames(
          wrapperSizes[size],
          inputStates[state],
          'flex h-full w-full items-center rounded-lg'
        )}
      >
        <textarea
          id={id}
          type="text"
          className={classNames(
            inputSizes[size],
            placeholderStates[state],
            'grow bg-inherit outline-none'
          )}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          {...props}
        />
      </div>
      {helperText && (
        <div className={classNames(helperStates[state], 'text-sm font-normal leading-tight')}>
          <p>{helperText}</p>
        </div>
      )}
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['default', 'error', 'success']),
  size: PropTypes.oneOf(['sm', 'base', 'lg']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  rows: PropTypes.number,
  cols: PropTypes.number,
};

TextArea.defaultProps = {
  state: 'default',
  size: 'base',
  label: '',
  placeholder: '',
  helperText: '',
  rows: 5,
  cols: 20,
};

export default TextArea;
