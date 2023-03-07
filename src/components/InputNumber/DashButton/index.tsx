import classNames from 'classnames';
import { DashButtonProps } from './type';
import Button from '@/components/Button';
import DashIcon from '@/icons/DashIcon';

function DashButton({ number, onChangeNumber, className, ...props }: DashButtonProps) {
  const handleDecrease = () => {
    onChangeNumber(number - 1);
  };

  return (
    <Button
      className={classNames('dash-btn', className)}
      onClick={handleDecrease}
      {...props}
    >
      <span>
        <DashIcon
          size={20}
          color="#adadad"
        />
      </span>
    </Button>
  );
}

export default DashButton;
