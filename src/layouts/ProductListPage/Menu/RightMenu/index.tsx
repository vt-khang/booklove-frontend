import { useFetchProducts } from '@/pages/api/useFetchProducts';
import { useContext } from 'react';
import { ProductProps } from './type';
import { ITEM_PER_PAGE, EMPTY_PRODUCT } from './constants';
import QueryContext from '@/contexts/QueryContext';
import Search from './Search';
import Sort from './Sort';
import Pagination from '@/components/Pagination';
import ProductCard from '../../ProductCard';
import ProductSkeleton from '@/skeletons/ProductSkeleton';

function RightMenu() {
  const query = useContext(QueryContext);

  const { data: products } = useFetchProducts({
    page: query.page,
    q: query.q,
    lang: query.lang,
    genre: query.genre,
    sort: query.sort,
  });

  return (
    <div className="right-menu-section">
      {products ? (
        <>
          <Search num={products.total} />

          <div className="sort">
            <Sort type={query.sort} />
          </div>

          <div className="product-list-pagination">
            {products.data.length === 0 && <h2 className="product-list-pagination-empty">{EMPTY_PRODUCT}</h2>}

            <div className="product-list-product-card">
              {products.data.map((product: ProductProps, index: number) => (
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

            <div className="product-pagination">
              <Pagination
                total={Math.ceil(products.total / ITEM_PER_PAGE)}
                pageSize={5}
                hideOnSinglePage
                className="product-pagination-item"
                href="/products"
              />
            </div>
          </div>
        </>
      ) : (
        <ProductSkeleton />
      )}
    </div>
  );
}

export default RightMenu;
