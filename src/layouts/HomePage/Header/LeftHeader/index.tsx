import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

function LeftHeader() {
  return (
    <Link href="/">
      <Image
        src="/static/logo.png"
        alt="logo"
        width={140}
        height={100}
      />
    </Link>
  );
}

export default LeftHeader;
