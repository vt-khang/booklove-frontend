import { BreadcrumbItemProps } from './type';

function BreadcrumbItem({ children }: React.PropsWithChildren<BreadcrumbItemProps>) {
  return <div className="breadcrumb-item">{children}</div>;
}

export default BreadcrumbItem;
