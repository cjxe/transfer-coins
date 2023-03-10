import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ButtonWithIcon from './ButtonWithIcon';

// TODO extra colours (success, error, disabled)
// TODO: add buttonIcon and LeftIcon to propTypes
// const state = {
//   success: 'border bg-green-50 border-green-500 text-green-700',
// };

const wrapperSizes = {
  sm: 'h-9 pl-2.5 pr-1',
  base: 'h-10 pl-3 pr-1.5',
  lg: 'h-12 pl-4 pr-2.5',
};

const itemSpaces = {
  sm: 'space-x-2.5',
  base: 'space-x-3',
  lg: 'space-x-4',
};

const inputSizes = {
  sm: 'text-sm font-normal',
  base: 'text-sm font-normal',
  lg: 'text-base font-normal',
};

function TextInput({ id, size, label, LeftIcon, placeholder, buttonIcon, helperText }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <div
        className={clsx(
          wrapperSizes[size],
          'inline-block flex w-min items-center rounded-lg border border-gray-300 bg-gray-50 focus-within:border-teal-600'
        )}
      >
        <div className={clsx(itemSpaces[size], 'flex items-center')}>
          {LeftIcon && (
            <div className="h-4 w-4 fill-gray-500 stroke-gray-500">
              <LeftIcon />
            </div>
          )}
          <input
            id={id}
            type="text"
            className={clsx(inputSizes[size], 'bg-inherit outline-none')}
            placeholder={placeholder}
          />
          {buttonIcon && <ButtonWithIcon variant="secondary" size="xs" Icon={buttonIcon} />}
        </div>
      </div>
      {helperText && (
        <div className="text-sm font-normal leading-tight text-gray-500">
          <p>{helperText}</p>
        </div>
      )}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'base', 'lg']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
};

TextInput.defaultProps = {
  size: 'base',
  label: 'First name',
  placeholder: 'Enter your first name',
  helperText: "We'll never share your details. See our Privacy Policy.",
};

export default TextInput;
