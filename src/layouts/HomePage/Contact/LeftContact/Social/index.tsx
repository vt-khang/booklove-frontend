import { cloneElement } from 'react';
import { SocialProps } from './type';
import Button from '@/components/Button';

function Social({ icon, href }: SocialProps) {
  return (
    <Button
      type="link"
      href={href}
      target="_blank"
      className="social-icon"
    >
      <span>
        {cloneElement(icon as React.ReactElement<any>, {
          size: 40,
          color: '#d0312d',
        })}
      </span>
    </Button>
  );
}

export default Social;
