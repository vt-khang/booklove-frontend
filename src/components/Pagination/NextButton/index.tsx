import classNames from 'classnames';
import { NextButtonProps } from './type';
import ArrowIcon from '@/icons/ArrowIcon';
import Button from '@/components/Button';

function NextButton({ page, className, ...props }: NextButtonProps) {
  const handleNextPage = () => {
    const nextPage = page.current === page.total - 1 ? 0 : page.current + 1;
    page.onChangePage(nextPage);
  };

  return (
    <Button
      type="text"
      className={classNames('next-btn', className)}
      onClick={handleNextPage}
      {...props}
    >
      <span>
        <ArrowIcon
          color="#000000"
          className={className}
        />
      </span>
    </Button>
  );
}

export default NextButton;
