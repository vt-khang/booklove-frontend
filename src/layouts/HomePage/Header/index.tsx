import LeftHeader from './LeftHeader';
import MidHeader from './MidHeader';
import RightHeader from './RightHeader';

function Header() {
  return (
    <header className="header">
      <div>
        <LeftHeader />
      </div>
      <div className="header-mid">
        <MidHeader />
      </div>
      <div className="header-right">
        <RightHeader />
      </div>
    </header>
  );
}

export default Header;
