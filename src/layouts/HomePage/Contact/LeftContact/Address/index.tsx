import { cloneElement } from 'react';
import { AddressProps } from './type';
import Button from '@/components/Button';

function Address({ icon, address, href }: AddressProps) {
  return (
    <div className="address">
      <span className="address-icon">
        {cloneElement(icon as React.ReactElement<any>, {
          size: 18,
          color: '#d0312d',
        })}
      </span>
      <Button
        type="link"
        href={href}
        target="_blank"
        className="address-link"
      >
        {address}
      </Button>
    </div>
  );
}

export default Address;
