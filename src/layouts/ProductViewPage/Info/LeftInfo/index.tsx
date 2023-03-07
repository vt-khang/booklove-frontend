import Image from 'next/image';
import { ImageInfoProps } from './type';

function LeftInfo({ image, alt }: ImageInfoProps) {
  return (
    <div className="left-info-section">
      <Image
        src={image}
        alt={alt}
        width={10000}
        height={10000}
        className="image-info"
      />
    </div>
  );
}

export default LeftInfo;
