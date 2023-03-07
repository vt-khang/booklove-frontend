import Link from 'next/link';
import { HOME_TITLE } from '../../constants';
import Button from '@/components/Button';
import HomeIcon from '@/icons/HomeIcon';

function HomeButton() {
  return (
    <Link
      href="/"
      passHref
    >
      <Button
        type="text"
        className="home-btn"
      >
        <span className="home-icon">
          <HomeIcon
            size={20}
            color="#ffffff"
          />
        </span>
        {HOME_TITLE}
      </Button>
    </Link>
  );
}

export default HomeButton;
