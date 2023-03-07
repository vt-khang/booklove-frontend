import { useFetchCarouselPromotions } from '@/pages/api/useFetchCarouselPromotions';
import { CarouselPromotionProps } from './type';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/CarouselItem';
import CarouselPromotionSkeleton from '@/skeletons/CarouselPromotionSkeleton';

function CarouselPromotion() {
  const { data: images } = useFetchCarouselPromotions();

  return (
    <>
      {images ? (
        <Carousel
          autoplay={{ duration: 10000 }}
          loop
          className="carousel-promotion"
        >
          {images.map((image: CarouselPromotionProps, index: number) => (
            <CarouselItem key={index}>
              <Image
                src={image.url}
                alt={image.name}
                width={10000}
                height={10000}
                className="carousel-promotion-img"
              />
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        <CarouselPromotionSkeleton />
      )}
    </>
  );
}

export default CarouselPromotion;
