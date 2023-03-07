import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SortProps } from './type';
import { SORT_TITLE } from '../constants';
import Button from '@/components/Button';

const sortList = [
  {
    keyword: 'new',
    name: 'Mới nhất',
  },
  {
    keyword: 'asc',
    name: 'Giá tăng dần',
  },
  {
    keyword: 'desc',
    name: 'Giá giảm dần',
  },
];

function Sort({ type = 'new' }: SortProps) {
  const router = useRouter();

  return (
    <>
      <span className="sort-title">{SORT_TITLE + ':'}</span>
      <div className="sort-list">
        {sortList.map((sortItem, index) => (
          <Link
            key={index}
            href={{ pathname: '/products', query: { ...router.query, sort: sortItem.keyword } }}
            passHref
          >
            <Button
              type="link"
              className={classNames('sort-item', {
                ['sort-item-active']: sortItem.keyword === type,
              })}
            >
              {sortItem.name}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Sort;
