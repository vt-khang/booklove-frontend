import classNames from 'classnames';
import { PlusButtonProps } from './type';
import Button from '@/components/Button';
import PlusIcon from '@/icons/PlusIcon';

function PlusButton({ number, onChangeNumber, className, ...props }: PlusButtonProps) {
  const handleIncrease = () => {
    onChangeNumber(number + 1);
  };

  return (
    <Button
      className={classNames('plus-btn', className)}
      onClick={handleIncrease}
      {...props}
    >
      <span>
        <PlusIcon
          size={20}
          color="#adadad"
        />
      </span>
    </Button>
  );
}

export default PlusButton;
