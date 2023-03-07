import classNames from 'classnames';
import { CloseButtonProps } from './type';
import Button from '@/components/Button';
import CloseIcon from '@/icons/CloseIcon';

function CloseButton({ className, ...props }: CloseButtonProps) {
  return (
    <Button
      type="text"
      className={classNames('close-btn', className)}
      {...props}
    >
      <span>
        <CloseIcon color="#adadad" />
      </span>
    </Button>
  );
}

export default CloseButton;
