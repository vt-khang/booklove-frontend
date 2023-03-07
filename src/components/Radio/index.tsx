import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { RadioProps } from './type';
import CircleIcon from '@/icons/CircleIcon';

function Radio({
  name,
  value,
  isChecked = false,
  disabled = false,
  onChange,
  className,
  children,
  ...props
}: React.PropsWithChildren<RadioProps>) {
  const { register } = useFormContext();
  const radioRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register(name);

  const [checked, setChecked] = useState(props.checked || isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const classes = classNames(
    'radio',
    {
      ['radio-disabled']: disabled,
    },
    className
  );

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onChange) onChange?.(event);
    else setChecked(true);
  };

  return (
    <label className={classes}>
      <input
        {...rest}
        type="radio"
        name={name}
        value={value}
        ref={(e) => {
          ref(e);
          radioRef.current = e;
        }}
        className="radio-input"
        checked={checked}
        disabled={disabled}
        onChange={handleCheck}
        {...props}
      />

      {children}

      <span
        className={classNames('radio-box', {
          ['radio-box-disabled']: disabled,
        })}
      >
        <CircleIcon
          size={6}
          color="#ffffff"
          className={classNames('radio-circle', {
            ['radio-circle-checked']: checked,
            ['radio-circle-disabled']: disabled,
          })}
        />
      </span>
    </label>
  );
}

export default Radio;
