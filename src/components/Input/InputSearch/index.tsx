import classNames from 'classnames';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { InputSearchProps } from './type';
import CloseButton from '../InputText/CloseButton';
import SearchButton from './SearchButton';

function InputSearch({
  name,
  label,
  labelClass,
  autoComplete = 'off',
  allowClear = false,
  disabled = false,
  required = false,
  searchClass,
  errorClass,
  innerRef,
  className,
  children,
  ...props
}: React.PropsWithChildren<InputSearchProps>) {
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
    'input input-search',
    {
      ['input-error']: errors[name] && !disabled,
      ['input-allow-clear-search']: allowClear,
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

          <SearchButton
            className={searchClass}
            disabled={disabled}
          />

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

export default InputSearch;
