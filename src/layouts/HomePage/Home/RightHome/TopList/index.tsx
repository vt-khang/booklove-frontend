import Link from 'next/link';
import { useFetchTopProducts } from '@/pages/api/useFetchTopProducts';
import { ProductProps } from '../../../../ProductListPage/Menu/RightMenu/type';
import { EDITOR_CHOICE, VIEW_MORE } from '../../constants';
import Button from '@/components/Button';
import ProductCard from '@/layouts/ProductListPage/ProductCard';
import TopListSkeleton from '@/skeletons/TopListSkeleton';

function TopList() {
  const { data: choiceProducts } = useFetchTopProducts();

  return (
    <div className="product-top-list">
      {choiceProducts ? (
        <>
          <h2 className="product-top-list-title">{EDITOR_CHOICE}</h2>

          <div className="product-top-list-product-card">
            {choiceProducts.map((product: ProductProps, index: number) => (
              <ProductCard
                key={index}
                name={product.name}
                keyword={product.keyword}
                image={product.image}
                arthur={product.arthur}
                price={product.price}
              />
            ))}
          </div>

          <div className="view-more">
            <Link href="/products">
              <Button
                type="link"
                className="view-more-btn"
              >
                {VIEW_MORE}
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <TopListSkeleton />
      )}
    </div>
  );
}

export default TopList;
