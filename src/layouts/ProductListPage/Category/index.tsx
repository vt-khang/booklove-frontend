import Link from 'next/link';
import { useFetchCategories } from '@/pages/api/useFetchCategories';
import { CategoryProps } from './type';
import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/CarouselItem';
import Button from '@/components/Button';
import CategorySkeleton from '@/skeletons/CategorySkeleton';

function Category() {
  const { data: categories } = useFetchCategories();

  return (
    <div className="category">
      {categories ? (
        <Carousel
          hideOffset
          className="category-list"
          slidePrevClass="category-prev-btn"
          slideNextClass="category-next-btn"
        >
          <CarouselItem>
            <div className="category-item">
              {categories.slice(0, 6).map((category: CategoryProps, index: number) => (
                <Link
                  key={index}
                  href={{ pathname: '/products', query: { genre: category.keyword } }}
                  passHref
                >
                  <Button
                    type="link"
                    className="category-item-btn"
                  >
                    {category.name}
                  </Button>
                </Link>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="category-item">
              {categories.slice(6, 12).map((category: CategoryProps, index: number) => (
                <Link
                  key={index}
                  href={{ pathname: '/products', query: { genre: category.keyword } }}
                  passHref
                >
                  <Button
                    type="link"
                    className="category-item-btn"
                  >
                    {category.name}
                  </Button>
                </Link>
              ))}
            </div>
          </CarouselItem>
        </Carousel>
      ) : (
        <CategorySkeleton />
      )}
    </div>
  );
}

export default Category;
