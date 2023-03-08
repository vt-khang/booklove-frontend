import classNames from 'classnames';
import { useState, useEffect, useRef, Children } from 'react';
import { CarouselProps } from './type';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

function Carousel({
  position = 'bottom',
  autoplay = false,
  mode = 'default',
  loop = false,
  hideOffset = false,
  slidesPerView = 'auto',
  slidePrevClass,
  slideNextClass,
  className,
  children,
}: React.PropsWithChildren<CarouselProps>) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoplayDuration: boolean | number = typeof autoplay === 'boolean' ? autoplay : autoplay?.duration || true;

  const slide = {
    current: currentSlide,
    total: Children.toArray(children).length,
    perView: slidesPerView === 'auto' ? Children.toArray(children).length : slidesPerView,
    onChangeSlide: (s: number) => setCurrentSlide(s),
  };

  useEffect(() => {
    let delayTimer: number | null = null;

    if (typeof autoplayDuration === 'number') {
      delayTimer = window.setTimeout(() => {
        delayTimer = null;
        setCurrentSlide(currentSlide === slide.total - 1 ? 0 : currentSlide + 1);
      }, autoplayDuration);
    }

    function cleanUpTimer() {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    }

    return cleanUpTimer;
  });

  const width = {
    carousel: carouselRef.current?.getBoundingClientRect().width || 0,
    dot: slide.perView * 8 + (slide.perView - 1) * 6,
    dotLeft:
      slide.current < slide.perView / 2
        ? 0
        : slide.current > slide.total - slide.perView / 2 - 1
        ? (slide.total - 2 * Math.floor(slide.perView / 2) - 1) * 14
        : (slide.current - Math.floor(slide.perView / 2)) * 14,
  };

  const handleDotClasses = (index: number) =>
    classNames('dot', {
      'dot-active': index === currentSlide,
    });

  return (
    <div
      className={classNames('group carousel', className)}
      ref={carouselRef}
    >
      <div
        className="carousel-list"
        style={{ left: -1 * width.carousel * slide.current }}
      >
        {children}
      </div>

      <div className={classNames({ [`carousel-${mode}`]: mode !== 'default' })}>
        {!(!loop && slide.current === 0) && (
          <div className="carousel-prev-btn">
            <PrevButton
              slide={slide}
              className={slidePrevClass}
            />
          </div>
        )}
        {!(!loop && slide.current === slide.total - 1) && (
          <div className="carousel-next-btn">
            <NextButton
              slide={slide}
              className={slideNextClass}
            />
          </div>
        )}

        {!hideOffset && (
          <div
            className={classNames('carousel-dot', { [`carousel-dot-${position}`]: position })}
            style={{ width: width.dot }}
          >
            <div
              className="carousel-dot-list"
              style={{ left: -1 * width.dotLeft }}
            >
              {[...Array(slide.total)].map((_, index) => (
                <span
                  className={handleDotClasses(index)}
                  key={index}
                ></span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
