import classNames from 'classnames';
import { useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { InputPasswordProps } from './type';
import CloseButton from '../InputText/CloseButton';
import EyeOpenButton from './EyeOpenButton';
import EyeCloseButton from './EyeCloseButton';

function InputPassword({
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
}: React.PropsWithChildren<InputPasswordProps>) {
  const {
    register,
    resetField,
    watch,
    formState: { errors },
  } = useFormContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputValue = watch(name, '');
  const { ref, ...rest } = register(name);

  const [showPassword, setShowPassword] = useState(false);

  const classes = classNames(
    'input input-password',
    {
      ['input-error']: errors[name] && !disabled,
      ['input-allow-clear-password']: allowClear,
      ['input-disabled']: disabled,
    },
    className
  );

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

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
            type={showPassword ? 'text' : 'password'}
            name={name}
            autoComplete={autoComplete}
            disabled={disabled}
            required={required}
            ref={(e) => {
              ref(e);
              if (innerRef) innerRef.current = e;
              else inputRef.current = e;
            }}
            className={classes}
            {...props}
          />
          {allowClear && inputValue !== '' && !errors[name] && (
            <CloseButton
              className="mr-6"
              disabled={disabled}
              onClick={handleClearInput}
            />
          )}

          {!showPassword && (
            <EyeCloseButton
              disabled={disabled}
              onClick={handlePassword}
            />
          )}
          {showPassword && (
            <EyeOpenButton
              disabled={disabled}
              onClick={handlePassword}
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

export default InputPassword;
