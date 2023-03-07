import { useFetchProductByKeyword } from '@/pages/api/useFetchProductByKeyword';
import { useContext } from 'react';
import ProductContext from '@/contexts/ProductContext';
import LeftInfo from './LeftInfo';
import RightInfo from './RightInfo';
import BottomInfo from './BottomInfo';
import ImageInfoSkeleton from '@/skeletons/ImageInfoSkeleton';
import TextInfoSkeleton from '@/skeletons/TextInfoSkeleton';
import DetailInfoSkeleton from '@/skeletons/DetailInfoSkeleton';

function Info() {
  const keyword = useContext(ProductContext);
  const { data: product } = useFetchProductByKeyword(keyword);

  return (
    <main>
      <div className="main">
        <div className="info">
          {product ? (
            <>
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
              <div className="bottom-info-section">
                <DetailInfoSkeleton />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Info;