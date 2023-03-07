import classNames from 'classnames';
import { useState, useRef } from 'react';
import { InputNumberProps } from './type';
import Input from '../Input';
import PlusButton from './PlusButton';
import DashButton from './DashButton';

function InputNumber({ value, disabled, minValue = 0, maxValue = 1e9, className, ...props }: InputNumberProps) {
  const [defaultValue, setDefaultValue] = useState<number>(value || 0);
  const dashDisabled: boolean = disabled || defaultValue === minValue;
  const plusDisabled: boolean = disabled || defaultValue === maxValue;
  const inputNumberRef = useRef<HTMLInputElement | null>(null);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === '') setDefaultValue(minValue);
    else if (event.currentTarget.value > maxValue) setDefaultValue(maxValue);
    else setDefaultValue(parseInt(event.currentTarget.value));
  };

  const handleNumber = (s: number) => {
    setDefaultValue(s);
    inputNumberRef.current?.focus();
  };

  return (
    <div className="input-number">
      <span>
        <DashButton
          number={defaultValue}
          onChangeNumber={handleNumber}
          disabled={dashDisabled}
          className={classNames({ ['dash-btn-disabled']: dashDisabled })}
        />
      </span>

      <Input
        type="number"
        value={defaultValue}
        disabled={disabled}
        onChange={handleChangeValue}
        innerRef={inputNumberRef}
        className={className}
        {...props}
      />

      <span>
        <PlusButton
          number={defaultValue}
          onChangeNumber={handleNumber}
          disabled={plusDisabled}
          className={classNames({ ['plus-btn-disabled']: plusDisabled })}
        />
      </span>
    </div>
  );
}

export default InputNumber;
