import classNames from 'classnames';
import { PrevButtonProps } from './type';
import ArrowIcon from '@/icons/ArrowIcon';
import Button from '@/components/Button';

function PrevButton({ page, className, ...props }: PrevButtonProps) {
  const handlePrevPage = () => {
    const prevPage = page.current === 0 ? page.total - 1 : page.current - 1;
    page.onChangePage(prevPage);
  };

  return (
    <Button
      type="text"
      className={classNames('prev-btn', className)}
      onClick={handlePrevPage}
      {...props}
    >
      <span>
        <ArrowIcon
          color="#000000"
          className={classNames('rotate-180', className)}
        />
      </span>
    </Button>
  );
}

export default PrevButton;
