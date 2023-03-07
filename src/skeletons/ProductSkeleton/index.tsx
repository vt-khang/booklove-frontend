import Skeleton from 'react-loading-skeleton';

function ProductSkeleton() {
  return (
    <>
      <Skeleton className="product-skeleton-title" />
      <Skeleton className="product-skeleton-sub-title" />
      <div className="product-skeleton-list">
        {[...Array(8)].map((_, index) => (
          <div key={index}>
            <Skeleton className="product-skeleton-card" />
          </div>
        ))}
      </div>
      <Skeleton className="product-skeleton-pagination" />
    </>
  );
}

export default ProductSkeleton;
