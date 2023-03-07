import Skeleton from 'react-loading-skeleton';

function TextInfoSkeleton() {
  return (
    <div>
      <Skeleton className="text-info-skeleton-title" />

      <Skeleton className="text-info-skeleton-sub-title" />
      <Skeleton className="text-info-skeleton-sub-title" />
      <Skeleton className="text-info-skeleton-sub-title" />

      <Skeleton className="text-info-skeleton-price" />

      <div className="text-info-skeleton-genre">
        <Skeleton className="text-info-skeleton-genre-btn" />
        <Skeleton className="text-info-skeleton-genre-btn" />
        <Skeleton className="text-info-skeleton-genre-btn" />
      </div>

      <Skeleton className="text-info-skeleton-other-1" />
      <Skeleton className="text-info-skeleton-other-2" />
      <Skeleton className="text-info-skeleton-other-3" />
    </div>
  );
}

export default TextInfoSkeleton;
