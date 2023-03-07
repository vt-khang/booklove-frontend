import classNames from 'classnames';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { InputTextareaProps } from './type';
import CloseButton from '../InputText/CloseButton';

import { DEFAULT_COLS, DEFAULT_ROWS } from './constants';

function InputTextarea({
  name,
  label,
  labelClass,
  allowClear = false,
  disabled = false,
  required = false,
  autoSize = true,
  maxLength,
  showCount = false,
  errorClass,
  innerRef,
  className,
  children,
  ...props
}: React.PropsWithChildren<InputTextareaProps>) {
  const {
    register,
    resetField,
    watch,
    formState: { errors },
  } = useFormContext();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const inputValue = watch(name, '');
  const { ref, ...rest } = register(name);

  const classes = classNames(
    'input',
    {
      ['input-error']: errors[name] && !disabled,
      ['input-no-resize']: !autoSize,
      ['input-allow-clear-textarea']: allowClear,
      ['input-disabled-textarea']: disabled,
    },
    className
  );

  const handleClearInput = () => {
    resetField(name);
    textareaRef.current?.focus();
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
          <textarea
            {...rest}
            name={name}
            disabled={disabled}
            required={required}
            ref={(e) => {
              ref(e);
              if (innerRef) innerRef.current = e;
              else textareaRef.current = e;
            }}
            maxLength={maxLength}
            cols={typeof autoSize === 'object' ? autoSize?.cols : DEFAULT_COLS}
            rows={typeof autoSize === 'object' ? autoSize?.rows : DEFAULT_ROWS}
            className={classes}
            {...props}
          />

          {allowClear && inputValue !== '' && !errors[name] && (
            <CloseButton
              disabled={disabled}
              onClick={handleClearInput}
              className="close-btn-textarea"
            />
          )}

          {showCount && maxLength && !disabled && (
            <p className="input-count">
              {inputValue.length} / {maxLength}
            </p>
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

export default InputTextarea;
