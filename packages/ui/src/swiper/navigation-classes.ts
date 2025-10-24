import cn from 'classnames';

export const navigationClasses = cn(
  '[&>.swiper-button-next]:w-10 [&>.swiper-button-prev]:w-10',
  '[&>.swiper-button-next]:h-10 [&>.swiper-button-prev]:h-10',
  '[&>.swiper-button-next]:rounded-full [&>.swiper-button-prev]:rounded-full',
  '[&>.swiper-button-next]:bg-primary [&>.swiper-button-prev]:bg-primary',
  'hover:[&>.swiper-button-next]:bg-primary-focus hover:[&>.swiper-button-prev]:bg-primary-focus',
  'active:[&>.swiper-button-next]:ring-4 active:[&>.swiper-button-prev]:ring-4',
  'active:[&>.swiper-button-next]:ring-primary active:[&>.swiper-button-prev]:ring-primary',
  '[&>.swiper-button-next]:text-white [&>.swiper-button-prev]:text-white',
  '[&>.swiper-button-next:after]:text-lg [&>.swiper-button-prev:after]:text-lg',
);
