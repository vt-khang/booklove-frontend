import { useFetchProductByKeyword } from '@/pages/api/useFetchProductByKeyword';
import { useContext } from 'react';
import { ProductBreadcrumbItemProps } from '@/layouts/ProductListPage/ProductBreadcrumb/type';
import { Helmet } from 'react-helmet';
import ProductContext from '@/contexts/ProductContext';
import ProductBreadcrumb from '@/layouts/ProductListPage/ProductBreadcrumb';
import LeftInfo from './LeftInfo';
import RightInfo from './RightInfo';
import BottomInfo from './BottomInfo';
import ImageInfoSkeleton from '@/skeletons/ImageInfoSkeleton';
import TextInfoSkeleton from '@/skeletons/TextInfoSkeleton';
import DetailInfoSkeleton from '@/skeletons/DetailInfoSkeleton';

function Info() {
  const keyword = useContext(ProductContext);
  const { data: product } = useFetchProductByKeyword(keyword);

  let category: ProductBreadcrumbItemProps | undefined = undefined;
  if (product) {
    category = {
      name: product.genres[0].name,
      link: {
        pathname: '/products',
        query: { genre: product.genres[0].keyword },
      },
    };
  }

  let productData: ProductBreadcrumbItemProps | undefined = undefined;
  if (product) {
    productData = {
      name: product.name,
      link: {
        pathname: `/products/${product.keyword}`,
      },
    };
  }

  return (
    <main>
      <div className="main">
        <div className="info">
          {product ? (
            <>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>

              <div className="top-menu">
                <ProductBreadcrumb
                  category={category}
                  product={productData}
                />
              </div>

              <div className="left-info">
                <LeftInfo
                  image={product.image}
                  alt={product.keyword}
                />
              </div>
              <div className="right-info">
                <RightInfo
                  name={product.name}
                  arthur={product.arthur}
                  price={product.price}
                  href="/products"
                  language={product.language}
                  genres={product.genres}
                />
              </div>
              <div className="bottom-info">
                <BottomInfo description={product.description} />
              </div>
            </>
          ) : (
            <>
              <div className="left-info">
                <div className="left-info-section">
                  <ImageInfoSkeleton />
                </div>
              </div>
              <div className="right-info">
                <div className="right-info-section">
                  <TextInfoSkeleton />
                </div>
              </div>
              <div className="bottom-info">
                <div className="bottom-info-section">
                  <DetailInfoSkeleton />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Info;
