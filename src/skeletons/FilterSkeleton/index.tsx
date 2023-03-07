import Skeleton from 'react-loading-skeleton';

function FilterSkeleton() {
  return (
    <>
      <Skeleton className="filter-skeleton-title" />

      <Skeleton className="filter-skeleton-sub-title" />

      {[...Array(2)].map((_, index) => (
        <Skeleton
          key={index}
          className="filter-skeleton-item"
        />
      ))}

      <Skeleton className="filter-skeleton-sub-title" />

      {[...Array(10)].map((_, index) => (
        <Skeleton
          key={index}
          className="filter-skeleton-item"
        />
      ))}
    </>
  );
}

export default FilterSkeleton;
