import { CartButtonProps } from './type';
import Button from '@/components/Button';
import CartIcon from '@/icons/CartIcon';

function CartButton({ numOrders = 0 }: CartButtonProps) {
  return (
    <Button type="link">
      <span>
        <CartIcon
          size={27}
          color="#ffffff"
        />
      </span>
      <span className="cart-num-orders">{numOrders}</span>
    </Button>
  );
}

export default CartButton;
