import { useState, Children, isValidElement, cloneElement } from 'react';
import { CheckedProps } from '../CheckboxGroup/type';
import { RadioGroupProps } from './type';

function RadioGroup({ className, children }: React.PropsWithChildren<RadioGroupProps>) {
  const [isCheckedList, setIsCheckedList] = useState<CheckedProps[]>(
    Children.toArray(children).map((child) => {
      if (isValidElement(child)) {
        const childData = { name: child.props.name, isChecked: child.props.checked || false };
        return childData;
      }
      return { name: 'null', isChecked: false };
    })
  );

  const handleCheckEachChild = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newCheckedList = isCheckedList?.slice(0);
    newCheckedList?.forEach((check) => {
      if (check.name === event.currentTarget.name) {
        check.isChecked = event.currentTarget.checked;
      } else {
        check.isChecked = false;
      }
    });
    setIsCheckedList(newCheckedList);
  };

  return (
    <div className={className}>
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
  );
}

export default RadioGroup;
