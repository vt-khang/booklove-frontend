export type Positions = 'bottom' | 'top';
export type CarouselModes = 'default' | 'hover';

export type CarouselProps = {
  position?: Positions;
  autoplay?: boolean | { duration?: number };
  mode?: CarouselModes;
  loop?: boolean;
  hideOffset?: boolean;
  slidesPerView?: number | 'auto';
  slideNextClass?: string;
  slidePrevClass?: string;
  className?: string;
}