import cn from 'classnames';
import { ReactNode, useCallback, useRef } from 'react';
// import type SwiperInstance from 'swiper';
import {
  A11y,
  Autoplay,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from 'swiper/modules';
import { Swiper, SwiperProps, SwiperRef, SwiperSlide, type SwiperSlideProps } from 'swiper/react';

import { NavigiationButtons } from './navigation-buttons';
import { navigationClasses } from './navigation-classes';

export function SwiperWithRenderedItems({
  renderedItems = [],
  swiperProps = {},
  swiperSlideProps = {},
}: SwiperWithRenderedItemsProps) {
  const sliderRef = useRef<SwiperRef>(null);
  const { wrapperClass, ...rest } = swiperProps;
  const { className: slideClassName, ...restSlideProps } = swiperSlideProps;

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  if (renderedItems.length === 0) return null;
  // const prevRef = useRef<HTMLDivElement>(null);
  // const nextRef = useRef<HTMLDivElement>(null);

  const gridColsNotInitialized = Object.entries(swiperProps.breakpoints || {}).reduce(
    (acc, [key, value]) => (value ? `${acc} ${getClassNames(key, Math.floor(parseInt(`${value.slidesPerView}`, 10)))}` : acc),
    '',
  );
  const gridRowsNotInitialized = getGridRowsNotInitialized(swiperProps.grid?.rows);

  // const onBeforeInit = (Swiper: any): void => {
  //   if (typeof Swiper.params.navigation !== 'boolean') {
  //     const navigation = Swiper.params.navigation;re
  //     navigation.prevEl = prevRef.current;
  //     navigation.nextEl = nextRef.current;
  //   }
  // };
  return (
    <div className="relative">
      <Swiper
        ref={sliderRef}
        modules={[
          Navigation,
          Autoplay,
          Pagination,
          A11y,
          Scrollbar,
          Grid,
          EffectCards,
          EffectCoverflow,
          EffectCreative,
          EffectCube,
          EffectFade,
          EffectFlip,
          FreeMode,
          Mousewheel,
          Thumbs,
        ]}
        // onSwiper={(swiper) => swiper.slidesPerViewDynamic()}
        wrapperClass={cn(
          'group-[&:not(.swiper-initialized)]:grid',
          'group-[&:not(.swiper-initialized)]:overflow-hidden',
          gridRowsNotInitialized,
          gridColsNotInitialized,
          wrapperClass,
        )}
        // watchSlidesProgress={true}
        className={cn('group @container', navigationClasses)}
        // navigation={{
        //   prevEl: prevRef.current ? prevRef.current : undefined,
        //   nextEl: nextRef.current ? nextRef.current : undefined,
        // }}
        // onBeforeInit={onBeforeInit}
        {...rest}
        navigation={false} // түр зүүр
        speed={800}
        // navigation={
        //   navigationOutside && swiperProps?.navigation
        //     ? {
        //         prevEl: '.swiper-btn-prev',
        //         nextEl: '.swiper-btn-next',
        //       }
        //     : swiperProps?.navigation
        // }
      >
        {renderedItems.map((renderedItem, idx) => (
          <SwiperSlide key={idx} {...restSlideProps} className={cn('!h-auto', slideClassName)}>
            {renderedItem}
          </SwiperSlide>
        ))}

        {/*<div ref={prevRef} className="absolute left-[40px] top-4">*/}
        {/*  Prev*/}
        {/*</div>*/}
        {/*<div ref={nextRef}>Next</div>*/}
      </Swiper>
      {swiperProps?.navigation && <NavigiationButtons handlePrev={handlePrev} handleNext={handleNext} />}
    </div>
  );
}

function getGridRowsNotInitialized(rows?: number): string {
  switch (rows) {
    case 2:
      return 'group-[&:not(.swiper-initialized)]:gap-2 group-[&:not(.swiper-initialized)]:grid-rows-[1fr,1fr,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] group-[&:not(.swiper-initialized)]:-mb-60';
    case 3:
      return 'group-[&:not(.swiper-initialized)]:gap-2 group-[&:not(.swiper-initialized)]:grid-rows-[1fr,1fr,1fr,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] group-[&:not(.swiper-initialized)]:-mb-60';
    default:
      return 'group-[&:not(.swiper-initialized)]:gap-x-2 group-[&:not(.swiper-initialized)]:grid-rows-[1fr,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]';
  }
}

function getClassNames(key: string, value?: number | string): string {
  switch (`${key}:${value}`) {
    case '640:1':
      return 'group-[&:not(.swiper-initialized)]:grid-cols-1';
    case '640:2':
      return 'group-[&:not(.swiper-initialized)]:grid-cols-2';
    case '640:3':
      return 'group-[&:not(.swiper-initialized)]:grid-cols-3';
    case '640:4':
      return 'group-[&:not(.swiper-initialized)]:grid-cols-4';
    case '640:5':
      return 'group-[&:not(.swiper-initialized)]:grid-cols-5';
    case '640:6':
      return 'group-[&:not(.swiper-initialized)]:grid-cols-6';
    case '640:7':
      return 'group-[&:not(.swiper-initialized)]:grid-cols-7';
    case '640:8':
      return 'group-[&:not(.swiper-initialized)]:grid-cols-8';
    case '768:1':
      return 'group-[&:not(.swiper-initialized)]:@3xl:grid-cols-1';
    case '768:2':
      return 'group-[&:not(.swiper-initialized)]:@3xl:grid-cols-2';
    case '768:3':
      return 'group-[&:not(.swiper-initialized)]:@3xl:grid-cols-3';
    case '768:4':
      return 'group-[&:not(.swiper-initialized)]:@3xl:grid-cols-4';
    case '768:5':
      return 'group-[&:not(.swiper-initialized)]:@3xl:grid-cols-5';
    case '768:6':
      return 'group-[&:not(.swiper-initialized)]:@3xl:grid-cols-6';
    case '768:7':
      return 'group-[&:not(.swiper-initialized)]:@3xl:grid-cols-7';
    case '768:8':
      return 'group-[&:not(.swiper-initialized)]:@3xl:grid-cols-8';
    case '1024:1':
      return 'group-[&:not(.swiper-initialized)]:@5xl:grid-cols-1';
    case '1024:2':
      return 'group-[&:not(.swiper-initialized)]:@5xl:grid-cols-2';
    case '1024:3':
      return 'group-[&:not(.swiper-initialized)]:@5xl:grid-cols-3';
    case '1024:4':
      return 'group-[&:not(.swiper-initialized)]:@5xl:grid-cols-4';
    case '1024:5':
      return 'group-[&:not(.swiper-initialized)]:@5xl:grid-cols-5';
    case '1024:6':
      return 'group-[&:not(.swiper-initialized)]:@5xl:grid-cols-6';
    case '1024:7':
      return 'group-[&:not(.swiper-initialized)]:@5xl:grid-cols-7';
    case '1024:8':
      return 'group-[&:not(.swiper-initialized)]:@5xl:grid-cols-8';
    case '1280:1':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-1';
    case '1280:2':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-2';
    case '1280:3':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-3';
    case '1280:4':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-4';
    case '1280:5':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-5';
    case '1280:6':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-6';
    case '1280:7':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-7';
    case '1280:8':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-8';
    case '1536:1':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-1';
    case '1536:2':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-2';
    case '1536:3':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-3';
    case '1536:4':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-4';
    case '1536:5':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-5';
    case '1536:6':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-6';
    case '1536:7':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-7';
    case '1536:8':
      return 'group-[&:not(.swiper-initialized)]:@7xl:grid-cols-8';
    default:
      return '';
  }
}

export type SwiperWithRenderedItemsProps = {
  renderedItems: Array<ReactNode>;
  swiperProps?: SwiperProps;
  swiperSlideProps?: SwiperSlideProps;
  className?: string;
};
