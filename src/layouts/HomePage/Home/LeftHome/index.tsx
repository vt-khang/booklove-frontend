import { useFetchCategories } from '@/pages/api/useFetchCategories';
import { CategoryProps } from './type';
import { CATEGORY_TITLE } from '../constants';
import CategoryItem from './CategoryItem';
import CategoryItemSkeleton from '@/skeletons/CategoryItemSkeleton';

function Category() {
  const { data: categories } = useFetchCategories();

  return (
    <>
      {categories ? (
        <>
          <h2 className="category-title">{CATEGORY_TITLE}</h2>
          {categories.map((category: CategoryProps, index: number) => (
            <CategoryItem
              key={index}
              name={category.name}
              keyword={category.keyword}
            />
          ))}
        </>
      ) : (
        <CategoryItemSkeleton />
      )}
    </>
  );
}

function LeftHome() {
  return (
    <div className="left-home-section">
      <Category />
    </div>
  );
}

export default LeftHome;
