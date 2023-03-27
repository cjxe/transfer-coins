import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonWithIcon from '@/components/core/Buttons/ButtonWithIcon';

// TODO
// - [ ] add state: disabled

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

const leftIconStates = {
  default: 'fill-zinc-500 stroke-zinc-500 dark:fill-zinc-400 dark:stroke-zinc-400',
  error: 'fill-red-600 stroke-red-600 dark:fill-red-500 dark:stroke-red-500',
  success: 'fill-green-600 stroke-green-600 dark:fill-green-500 dark:stroke-green-500',
};

const buttonStates = {
  default: 'secondary',
  error: 'error',
  success: 'success',
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
  buttonOnClick,
  helperText,
  ...props
}) {
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
          'flex w-full items-center rounded-lg'
        )}
      >
        <div className={classNames(itemSpaces[size], 'flex grow items-center')}>
          {LeftIcon && (
            <LeftIcon className={classNames(leftIconStates[state], leftIconSizes[size])} />
          )}
          <input
            id={id}
            type="text"
            className={classNames(
              inputSizes[size],
              placeholderStates[state],
              'grow bg-inherit outline-none'
            )}
            placeholder={placeholder}
            {...props}
          />
        </div>
        {buttonIcon && (
          <ButtonWithIcon
            variant={buttonStates[state]}
            size={buttonSizes[size]}
            Icon={buttonIcon}
            onClick={buttonOnClick}
          />
        )}
      </div>
      {helperText && (
        <div className={classNames(helperStates[state], 'text-sm font-normal leading-tight')}>
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
  LeftIcon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(['img', 'svg']),
    }),
    PropTypes.func,
  ]),
  placeholder: PropTypes.string,
  buttonIcon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf(['img', 'svg']),
    }),
    PropTypes.func,
  ]),
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

TextInput.defaultProps = {
  state: 'default',
  size: 'base',
  label: '',
  LeftIcon: undefined,
  placeholder: '',
  buttonIcon: undefined,
  helperText: '',
};

export default TextInput;
