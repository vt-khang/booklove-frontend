import Link from 'next/link';
import { CategoryItemProps } from './type';
import Button from '@/components/Button';
import ArrowIcon from '@/icons/ArrowIcon';

function CategoryItem({ name, keyword }: CategoryItemProps) {
  return (
    <Link
      href={{ pathname: '/products', query: { genre: keyword } }}
      passHref
    >
      <Button
        type="link"
        className="group category-btn"
      >
        {name}
        <span className="category-icon">
          <ArrowIcon color="#000000" />
        </span>
      </Button>
    </Link>
  );
}

export default CategoryItem;
