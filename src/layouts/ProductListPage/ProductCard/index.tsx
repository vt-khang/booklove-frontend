import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from './type';
import { truncateLongString, numberWithCommas } from './helper';
import Button from '@/components/Button';

function ProductCard({ name, keyword, image, arthur, price }: ProductCardProps) {
  return (
    <Link href={`/products/${keyword}`}>
      <Button type="link">
        <div className="product-card">
          <div>
            <Image
              src={image}
              alt={keyword}
              width={10000}
              height={10000}
              className="product-card-img"
            />
          </div>
          <h2 className="product-card-title">{truncateLongString(name, 38)}</h2>
          <h4 className="product-card-arthur">{arthur}</h4>
          <h3 className="product-card-price">{numberWithCommas(price) + ' ₫'}</h3>
        </div>
      </Button>
    </Link>
  );
}

export default ProductCard;
