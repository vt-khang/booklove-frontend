import { useFetchCategoryByKeyword } from '@/pages/api/useFetchCategoryByKeyword';
import { useRouter } from 'next/router';
import { QueryProvider } from '@/contexts/QueryContext';
import { ProductBreadcrumbItemProps } from '../ProductBreadcrumb/type';
import ProductBreadcrumb from '../ProductBreadcrumb';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

function Menu() {
  const router = useRouter();
  const query = router.query;

  const { data: categoryData } = useFetchCategoryByKeyword(query.genre);

  let category: ProductBreadcrumbItemProps | undefined = undefined;
  if (categoryData) {
    category = {
      name: categoryData.name,
      link: {
        pathname: '/products',
        query: { genre: categoryData.keyword },
      },
    };
  }

  return (
    <main>
      <div className="main">
        {query && (
          <>
            <div className="menu">
              <div className="top-menu">
                <ProductBreadcrumb category={category} />
              </div>
              <div className="left-menu">
                <LeftMenu />
              </div>
              <div className="right-menu">
                <QueryProvider value={query}>
                  <RightMenu />
                </QueryProvider>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Menu;
