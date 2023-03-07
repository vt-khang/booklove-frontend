import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PaginationProps } from './type';
import Button from '../Button';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import { initialArray } from './helpers';

function Pagination({ total, pageSize, hideOnSinglePage = false, href, className }: PaginationProps) {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(Number(router.query.page) || 0);
  if (!pageSize) pageSize = total;

  const page = {
    current: currentPage,
    total: total,
    min:
      pageSize >= total
        ? 1
        : currentPage <= pageSize / 2
        ? 1
        : currentPage >= total - pageSize / 2
        ? total - pageSize + 1
        : currentPage - Math.floor(pageSize / 2) + 1,
    max:
      pageSize >= total
        ? total
        : currentPage <= pageSize / 2
        ? pageSize
        : currentPage >= total - pageSize / 2
        ? total
        : currentPage + Math.floor(pageSize / 2) + 1,
    onChangePage: (p: number) => setCurrentPage(p),
  };

  const handleChangePage = (indexPage: number) => {
    if (href) {
      router.push({
        pathname: href,
        query: {
          ...router.query,
          page: indexPage + page.min - 1,
        },
      });
    }
    setCurrentPage(indexPage + page.min - 1);
  };

  return (
    <>
      {!(total === 1 && hideOnSinglePage) && (
        <ul className="page-wrapper">
          {pageSize < total && (
            <li className="page-btn">
              <PrevButton
                page={page}
                className="page-btn-inside"
              />
            </li>
          )}

          {initialArray(page.min, page.max).map((value, index) => (
            <li
              key={index}
              className={classNames(
                'page-item',
                {
                  ['page-item-active']: index === currentPage - page.min + 1,
                },
                className
              )}
            >
              <Button
                type="link"
                className={classNames('page', {
                  ['page-active']: index === currentPage - page.min + 1,
                })}
                onClick={() => handleChangePage(index)}
              >
                {value}
              </Button>
            </li>
          ))}

          {pageSize < total && (
            <li className="page-btn">
              <NextButton
                page={page}
                className="page-btn-inside"
              />
            </li>
          )}
        </ul>
      )}
    </>
  );
}

export default Pagination;
