import { CarouselItemProps } from './type';

function CarouselItem({ children }: React.PropsWithChildren<CarouselItemProps>) {
  return <div className="carousel-item">{children}</div>;
}

export default CarouselItem;
