import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckboxProps } from './type';
import CheckIcon from '@/icons/CheckIcon';

function Checkbox({
  name,
  isChecked = false,
  disabled = false,
  onChange,
  className,
  children,
  ...props
}: React.PropsWithChildren<CheckboxProps>) {
  const { register } = useFormContext();
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register(name);

  const [checked, setChecked] = useState(props.checked || isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const classes = classNames(
    'checkbox',
    {
      ['checkbox-disabled']: disabled,
    },
    className
  );

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onChange) onChange?.(event);
    else setChecked(!checked);
  };

  return (
    <label className={classes}>
      <input
        {...rest}
        type="checkbox"
        name={name}
        ref={(e) => {
          ref(e);
          checkboxRef.current = e;
        }}
        className="checkbox-input"
        disabled={disabled}
        checked={checked}
        onChange={handleCheck}
        {...props}
      />

      {children}

      <span
        className={classNames('checkbox-box', {
          ['checkbox-box-disabled']: disabled,
        })}
      >
        <CheckIcon
          size={10}
          color="#ffffff"
          className={classNames('checkbox-mark', {
            ['checkbox-mark-checked']: checked,
            ['checkbox-mark-disabled']: disabled,
          })}
        />
      </span>
    </label>
  );
}

export default Checkbox;
