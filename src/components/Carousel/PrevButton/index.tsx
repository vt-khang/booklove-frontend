import classNames from 'classnames';
import { PrevButtonProps } from './type';
import ArrowIcon from '@/icons/ArrowIcon';
import Button from '@/components/Button';

function PrevButton({ slide, className, ...props }: PrevButtonProps) {
  const handlePrevSlide = () => {
    const prevSlide = slide.current === 0 ? slide.total - 1 : slide.current - 1;
    slide.onChangeSlide(prevSlide);
  };

  return (
    <Button
      type="text"
      className="prev-btn"
      onClick={handlePrevSlide}
      {...props}
    >
      <span>
        <ArrowIcon
          color="#ffffff"
          size={32}
          className={classNames('rotate-180', className)}
        />
      </span>
    </Button>
  );
}

export default PrevButton;
