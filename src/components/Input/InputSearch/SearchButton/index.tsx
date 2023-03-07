import classNames from 'classnames';
import { SearchButtonProps } from './type';
import Button from '@/components/Button';
import SearchIcon from '@/icons/SearchIcon';

function SearchButton({ className, ...props }: SearchButtonProps) {
  return (
    <Button
      type="text"
      htmlType="submit"
      className={classNames('search-btn', className)}
      {...props}
    >
      <span>
        <SearchIcon color="#212529" />
      </span>
    </Button>
  );
}

export default SearchButton;
