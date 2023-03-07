import classNames from 'classnames';
import { useState, useEffect, useRef, Children, isValidElement, cloneElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckAllStates, CheckedProps, CheckboxGroupProps } from './type';
import CheckIcon from '@/icons/CheckIcon';
import SquareIcon from '@/icons/SquareIcon';

function CheckboxGroup({
  name,
  label,
  isChecked = false,
  disabled = false,
  onChange,
  className,
  children,
  ...props
}: React.PropsWithChildren<CheckboxGroupProps>) {
  const { register } = useFormContext();
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register(name);

  const checkedAllState: CheckAllStates = !isChecked ? 'none' : isChecked ? 'all' : 'partial';
  const [checked, setChecked] = useState<CheckAllStates>(checkedAllState);
  const [isCheckedList, setIsCheckedList] = useState<CheckedProps[]>(
    Children.toArray(children).map((child) => {
      if (isValidElement(child)) {
        const childData = { name: child.props.name, isChecked: child.props.checked || false };
        return childData;
      }
      return { name: 'null', isChecked: false };
    })
  );

  useEffect(() => {
    if (isCheckedList?.every((value) => value.isChecked === true)) {
      setChecked('all');
    } else if (isCheckedList?.every((value) => value.isChecked === false)) {
      setChecked('none');
    } else {
      setChecked('partial');
    }
  }, [isCheckedList]);

  const classes = classNames(
    'checkbox',
    {
      ['checkbox-disabled']: disabled,
    },
    className
  );

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onChange) onChange?.(event);
    else {
      let newCheckedList = isCheckedList?.slice(0);
      newCheckedList?.forEach((check) => (check.isChecked = event.target.checked));
      setIsCheckedList(newCheckedList);
    }
  };

  const handleCheckEachChild = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newCheckedList = isCheckedList?.slice(0);
    newCheckedList?.forEach((check) => {
      if (check.name === event.currentTarget.name) {
        check.isChecked = event.currentTarget.checked;
      }
    });
    setIsCheckedList(newCheckedList);
  };

  return (
    <label className={classes}>
      <input
        {...rest}
        name={name}
        type="checkbox"
        ref={(e) => {
          ref(e);
          checkboxRef.current = e;
        }}
        className="checkbox-input"
        disabled={disabled}
        checked={checked === 'all' ? true : checked === 'none' ? false : true}
        onChange={handleCheckAll}
        {...props}
      />

      {label}

      <span
        className={classNames('checkbox-box', {
          ['checkbox-box-disabled']: disabled,
        })}
      >
        <CheckIcon
          size={10}
          color="#ffffff"
          className={classNames('checkbox-mark', {
            ['checkbox-mark-checked']: checked === 'all',
            ['checkbox-mark-disabled']: disabled,
          })}
        />

        <SquareIcon
          size={6}
          color="#ffffff"
          className={classNames('checkbox-square', {
            ['checkbox-square-checked']: checked === 'partial',
            ['checkbox-square-disabled']: disabled,
          })}
        />
      </span>

      <div className="ml-3">
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(
              child as React.ReactElement<any>,
              {
                name: isCheckedList[index].name,
                isChecked: isCheckedList[index].isChecked,
                onChange: handleCheckEachChild,
              },
              child.props.children
            );
          }
        })}
      </div>
    </label>
  );
}

export default CheckboxGroup;
