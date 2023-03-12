import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ButtonWithIcon from '../Button/ButtonWithIcon';

// TODO
// - [ ] add buttonIcon and LeftIcon to propTypes
// - [ ] add state: disabled

// States
const inputStates = {
  default:
    'border bg-gray-50 border-gray-300 text-gray-900 focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200',
  error:
    'border bg-red-50 border-red-500 text-red-700 focus-within:ring-2 focus-within:ring-red-200',
  success:
    'border bg-green-50 border-green-500 text-green-700 focus-within:ring-2 focus-within:ring-green-200',
};

const leftIconStates = {
  default: 'fill-gray-500 stroke-gray-500',
  error: 'fill-red-600 stroke-red-600',
  success: 'fill-green-600 stroke-green-600',
};

const buttonStates = {
  default: 'secondary',
  error: 'error',
  success: 'success',
};

const labelStates = {
  default: 'text-gray-900',
  error: 'text-red-600',
  success: 'text-green-600',
};

const helperStates = {
  default: 'text-gray-500',
  error: 'text-red-600',
  success: 'text-green-600',
};

// Sizes
const wrapperSizes = {
  sm: 'h-9 pl-2.5 pr-1',
  base: 'h-10 pl-3 pr-1.5',
  lg: 'h-12 pl-3.5 pr-1.5',
};

const itemSpaces = {
  sm: 'space-x-2.5',
  base: 'space-x-3',
  lg: 'space-x-3.5',
};

const inputSizes = {
  sm: 'text-sm font-normal',
  base: 'text-sm font-normal',
  lg: 'text-base font-normal',
};

const leftIconSizes = {
  sm: 'h-4 w-4',
  base: 'h-4 w-4',
  lg: 'h-5 w-5',
};

const buttonSizes = {
  sm: 'xs',
  base: 'xs',
  lg: 'sm',
};

function TextInput({
  id,
  state,
  size,
  label,
  LeftIcon,
  placeholder,
  buttonIcon,
  helperText,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className={clsx(labelStates[state], 'text-sm font-medium')}>
          {label}
        </label>
      )}
      <div
        className={clsx(
          wrapperSizes[size],
          inputStates[state],
          'flex w-full items-center rounded-lg'
        )}
      >
        <div className={clsx(itemSpaces[size], 'flex grow items-center')}>
          {LeftIcon && <LeftIcon className={clsx(leftIconStates[state], leftIconSizes[size])} />}
          <input
            id={id}
            type="text"
            className={clsx(inputSizes[size], 'grow bg-inherit outline-none')}
            placeholder={placeholder}
            {...props}
          />
        </div>
        {buttonIcon && (
          <ButtonWithIcon
            variant={buttonStates[state]}
            size={buttonSizes[size]}
            Icon={buttonIcon}
          />
        )}
      </div>
      {helperText && (
        <div className={clsx(helperStates[state], 'text-sm font-normal leading-tight')}>
          <p>{helperText}</p>
        </div>
      )}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['default', 'error', 'success']),
  size: PropTypes.oneOf(['sm', 'base', 'lg']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
};

TextInput.defaultProps = {
  state: 'default',
  size: 'base',
  label: '',
  placeholder: '',
  helperText: '',
};

export default TextInput;
