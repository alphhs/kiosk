import type { SwiperProps } from 'swiper/react';

export const DEFAULT_SWIPER_PROPS_PRODUCTS: SwiperProps = {
  // spaceBetween: 8,
  // slidesPerView: 2,
  breakpointsBase: 'container',
  breakpoints: {
    1536: {
      slidesPerView: 7,
      slidesPerGroup: 7,
      // spaceBetween: 16,
    },
    1280: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      // spaceBetween: 16,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      // spaceBetween: 16,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      // spaceBetween: 8,
    },
    640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      // spaceBetween: 8,
    },
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      // spaceBetween: 8,
    },
  },
};
