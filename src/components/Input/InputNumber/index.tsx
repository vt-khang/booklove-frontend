import classNames from 'classnames';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { InputNumberProps } from './type';
import CloseButton from '../InputText/CloseButton';

import { NUM_REGEX } from './constants';

function InputNumber({
  name,
  label,
  labelClass,
  autoComplete = 'off',
  allowClear = false,
  disabled = false,
  required = false,
  errorClass,
  innerRef,
  className,
  children,
  ...props
}: React.PropsWithChildren<InputNumberProps>) {
  const {
    register,
    resetField,
    watch,
    formState: { errors },
  } = useFormContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputValue = watch(name, '');
  const { ref, ...rest } = register(name);

  const classes = classNames(
    'input',
    {
      ['input-error']: errors[name] && !disabled,
      ['input-allow-clear']: allowClear,
      ['input-disabled']: disabled,
    },
    className
  );

  const handleClearInput = () => {
    resetField(name);
    inputRef.current?.focus();
  };

  return (
    <>
      {label && (
        <label className={classNames('input-label', labelClass)}>
          {label}
          {required && <span className={classNames({ ['input-required']: required })}>*</span>}
        </label>
      )}
      <div className="input-span">
        <span>
          <input
            {...rest}
            name={name}
            autoComplete={autoComplete}
            disabled={disabled}
            required={required}
            ref={(e) => {
              ref(e);
              if (innerRef) innerRef.current = e;
              else inputRef.current = e;
            }}
            value={inputValue.replace(NUM_REGEX, '')}
            className={classes}
            {...props}
          />

          {allowClear && inputValue !== '' && !errors[name] && (
            <CloseButton
              disabled={disabled}
              onClick={handleClearInput}
            />
          )}
          {children}
        </span>

        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p className={classNames('input-error-msg', errorClass)}>{message}</p>}
        />
      </div>
    </>
  );
}

export default InputNumber;
