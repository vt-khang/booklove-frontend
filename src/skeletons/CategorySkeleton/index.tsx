import Skeleton from 'react-loading-skeleton';

function CategorySkeleton() {
  return (
    <div className="category-skeleton">
      {[...Array(6)].map((_, index) => (
        <Skeleton
          key={index}
          className="category-skeleton-btn"
        />
      ))}
    </div>
  );
}

export default CategorySkeleton;
