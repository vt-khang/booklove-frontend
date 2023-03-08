import classNames from 'classnames';
import { BreadcrumbProps } from './type';
import { Children, isValidElement, cloneElement } from 'react';

function Breadcrumb({ separator = '/', className, children }: React.PropsWithChildren<BreadcrumbProps>) {
  const length = Children.toArray(children).length;

  return (
    <div className={classNames('breadcrumb', className)}>
      {Children.map(children, (child, index) => {
        return (
          <>
            {isValidElement(child) && cloneElement(child as React.ReactElement<any>)}
            {index !== length - 1 && <span className="breadcrumb-separator">{separator}</span>}
          </>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
