import Skeleton from 'react-loading-skeleton';

function BreadcrumbSkeleton() {
  return (
    <div className="breadcrumb-skeleton">
      <Skeleton className="breadcrumb-skeleton-item" />
      <Skeleton className="breadcrumb-skeleton-item" />
      <Skeleton className="breadcrumb-skeleton-item" />
    </div>
  );
}

export default BreadcrumbSkeleton;
