import classNames from 'classnames';
import { EyeOpenButtonProps } from './type';
import Button from '@/components/Button';
import EyeOpenIcon from '@/icons/EyeOpenIcon';

function EyeOpenButton({ className, ...props }: EyeOpenButtonProps) {
  return (
    <Button
      type="text"
      className={classNames('eye-open-btn group', className)}
      {...props}
    >
      <span>
        <EyeOpenIcon color="#adadad" />
      </span>
    </Button>
  );
}

export default EyeOpenButton;
