import HomeButton from './HomeButton';
import CartButton from './CartButton';

function RightHeader() {
  return (
    <>
      <div className="header-link">
        <HomeButton />
      </div>
      <div className="cart-btn">{/* <CartButton /> */}</div>
    </>
  );
}

export default RightHeader;
