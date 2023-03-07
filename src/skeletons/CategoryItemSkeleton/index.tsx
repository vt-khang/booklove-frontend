import Skeleton from 'react-loading-skeleton';

function CategoryItemSkeleton() {
  return (
    <div className="category-item-skeleton">
      <Skeleton className="category-item-skeleton-title" />
      <div className="grid gap-[12px]">
        {[...Array(12)].map((_, index) => (
          <Skeleton
            key={index}
            className="category-item-skeleton-sub"
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryItemSkeleton;
