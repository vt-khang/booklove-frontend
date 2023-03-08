import Link from 'next/link';
import { ProductBreadcrumbProps, ProductBreadcrumbItemProps } from './type';
import { HOME_BREADCRUMB } from './constants';
import Button from '@/components/Button';
import Breadcrumb from '@/components/Breadcrumb';
import BreadcrumbItem from '@/components/BreadcrumbItem';
import BreadcrumbSkeleton from '@/skeletons/BreadcrumbSkeleton';

const useProductBreadcrumb = (category?: ProductBreadcrumbItemProps, product?: ProductBreadcrumbItemProps) => {
  let breadcrumbList: ProductBreadcrumbItemProps[] = [];

  breadcrumbList.push({
    name: HOME_BREADCRUMB,
    link: {
      pathname: '/',
    },
  });

  if (category) {
    breadcrumbList.push(category);
  }

  if (product) {
    breadcrumbList.push(product);
  }

  return breadcrumbList;
};

function ProductBreadcrumb({ category, product }: ProductBreadcrumbProps) {
  const breadcrumbList = useProductBreadcrumb(category, product);

  return (
    <>
      {category ? (
        <Breadcrumb>
          {breadcrumbList.map((breadcrumbItem, index) => (
            <BreadcrumbItem key={index}>
              <Link
                href={breadcrumbItem.link}
                passHref
              >
                <Button
                  type="link"
                  className="product-breadcrumb-item"
                >
                  {breadcrumbItem.name}
                </Button>
              </Link>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      ) : (
        <BreadcrumbSkeleton />
      )}
    </>
  );
}

export default ProductBreadcrumb;
