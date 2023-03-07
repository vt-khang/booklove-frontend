import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/CarouselItem';

export default function CarouselTest() {
  return (
    <>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Carousel>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-100">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-200">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-300">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-100">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-200">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-green">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-yellow">7</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Carousel loop>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-100">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-200">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-300">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-100">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-200">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-green">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-yellow">7</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Carousel mode="hover">
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-100">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-200">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-300">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-100">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-200">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-green">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-yellow">7</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Carousel position="top">
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-100">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-200">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-300">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-100">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-200">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-green">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-yellow">7</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Carousel autoplay={{ duration: 2000 }}>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-100">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-200">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-300">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-100">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-200">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-green">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-yellow">7</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Carousel hideOffset>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-100">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-200">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-300">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-100">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-200">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-green">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-yellow">7</div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="mx-10 my-10 flex items-center gap-5">
        <Carousel slidesPerView={5}>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-100">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-200">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-red-300">3</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-100">4</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-blue-200">5</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-green">6</div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full flex items-center justify-center bg-yellow">7</div>
          </CarouselItem>
        </Carousel>
      </div>
    </>
  );
}
