import { NextButtonProps } from './type';
import ArrowIcon from '@/icons/ArrowIcon';
import Button from '@/components/Button';

function NextButton({ slide, className, ...props }: NextButtonProps) {
  const handleNextSlide = () => {
    const nextSlide = slide.current === slide.total - 1 ? 0 : slide.current + 1;
    slide.onChangeSlide(nextSlide);
  };

  return (
    <Button
      type="text"
      className="next-btn"
      onClick={handleNextSlide}
      {...props}
    >
      <span>
        <ArrowIcon
          color="#ffffff"
          size={32}
          className={className}
        />
      </span>
    </Button>
  );
}

export default NextButton;
