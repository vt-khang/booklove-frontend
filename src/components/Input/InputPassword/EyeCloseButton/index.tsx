import classNames from 'classnames';
import { EyeCloseButtonProps } from './type';
import Button from '@/components/Button';
import EyeCloseIcon from '@/icons/EyeCloseIcon';

function EyeCloseButton({ className, ...props }: EyeCloseButtonProps) {
  return (
    <Button
      type="text"
      className={classNames('eye-close-btn group', className)}
      {...props}
    >
      <span>
        <EyeCloseIcon color="#adadad" />
      </span>
    </Button>
  );
}

export default EyeCloseButton;
