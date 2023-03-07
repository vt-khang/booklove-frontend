import Skeleton from 'react-loading-skeleton';

function TopListSkeleton() {
  return (
    <>
      <Skeleton className="top-list-skeleton-title" />
      <div className="top-list-skeleton-list">
        {[...Array(8)].map((_, index) => (
          <div key={index}>
            <Skeleton className="top-list-skeleton-card" />
          </div>
        ))}
      </div>
      <Skeleton className="top-list-skeleton-btn" />
    </>
  );
}

export default TopListSkeleton;
