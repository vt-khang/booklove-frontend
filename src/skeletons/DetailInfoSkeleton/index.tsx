import Skeleton from 'react-loading-skeleton';

function DetailInfoSkeleton() {
  return (
    <div className="detail-info-skeleton">
      <Skeleton className="detail-info-skeleton-1" />
      <Skeleton className="detail-info-skeleton-2" />
      <Skeleton className="detail-info-skeleton-2" />
      <Skeleton className="detail-info-skeleton-4" />
      <Skeleton className="detail-info-skeleton-3" />
      <Skeleton className="detail-info-skeleton-3" />
    </div>
  );
}

export default DetailInfoSkeleton;
