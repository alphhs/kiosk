import type { SwiperProps } from 'swiper/react';
import type { AutoplayOptions, CreativeEffectOptions, PaginationOptions } from 'swiper/types';

import { DEFAULT_SWIPER_PROPS_PRODUCTS } from './constraints';

export function getSwiperProps(props?: SwiperOptions, defaultBreakpointsProps?: 'products'): SwiperProps | undefined {
  if (!props) return undefined;

  return {
    loop: props.row ? false : props.loop, // loop mode not working with multi rows, crashing
    navigation: props.navigation,
    scrollbar: props.scrollbar,
    freeMode: props.freeMode,
    effect: props.effect,
    breakpointsBase: props.breakpointsBase || 'container',
    spaceBetween: props.gap || props.spaceBetween || 0,
    slidesPerView: props.perView || props.slidesPerView || 1,
    slidesPerGroup: getSlidesPerGroup(props.fullScroll, props.perView),
    // slidesPerGroupAuto: true,
    centeredSlides: props.centered || props.centeredSlides,
    breakpoints: getBreakpoints(props.breakpoints, defaultBreakpointsProps, props.fullScroll),
    grid: getGrid(props.row),
    autoplay: getAutoplay({ autoplay: props.autoplay, pauseOnHover: props.pauseOnHover }),
    pagination: getPagination(props.pagination),
    creativeEffect: getCreativeEffect(props.effect),
    wrapperClass: getWrapperClassname(props.pagination),
    loopAddBlankSlides: true, // testing
  };
}

export function getSlidesPerGroup(fullScroll?: boolean, perView?: number): SwiperProps['slidesPerGroup'] {
  if (fullScroll && perView) return perView;
  return 1;
}

export function getGrid(rows: SwiperOptions['row']): SwiperProps['grid'] | undefined {
  if (!rows) return undefined;

  return { rows, fill: 'row' };
}

export function getPagination(pagination?: string): PaginationOptions | undefined {
  if (!pagination) return undefined;

  switch (pagination) {
    case 'bullet':
      return { clickable: true };
    case 'bullet_bottom':
      return { clickable: true };
    case 'dynamic':
      return { dynamicBullets: true };
    case 'progress':
      return { type: 'progressbar' };
    case 'fraction':
      return { type: 'fraction' };
    default:
      return undefined;
  }
}

export function getAutoplay({
  autoplay,
  pauseOnHover,
}: {
  autoplay?: number;
  pauseOnHover?: boolean;
}): AutoplayOptions | undefined {
  if (!autoplay) return undefined;
  return { delay: autoplay, pauseOnMouseEnter: pauseOnHover, disableOnInteraction: false };
}

export function getCreativeEffect(effect?: string): CreativeEffectOptions | undefined {
  if (!effect) return undefined;

  switch (effect) {
    case 'create':
      return { prev: { shadow: true, translate: [0, 0, -400] }, next: { translate: ['100%', 0, 0] } };
    default:
      return undefined;
  }
}

export function getBreakpoints(
  breakpoints: SwiperOptions['breakpoints'],
  defaultProps?: 'products',
  fullScroll?: boolean,
): SwiperProps['breakpoints'] | undefined {
  if (!breakpoints) {
    if (defaultProps === 'products') return DEFAULT_SWIPER_PROPS_PRODUCTS.breakpoints;
    return undefined;
  }

  return Object.entries(breakpoints).reduce((acc, cur) => {
    const [curKey, curValue] = cur;
    if (parseInt(curKey, 10)) return { ...acc, [curKey]: curValue };

    switch (curKey) {
      case 'xl':
        return { ...acc, 1536: { slidesPerView: curValue, slidesPerGroup: fullScroll ? curValue : 1 } };
      case 'lg':
        return { ...acc, 1280: { slidesPerView: curValue, slidesPerGroup: fullScroll ? curValue : 1 } };
      case 'md':
        return { ...acc, 1024: { slidesPerView: curValue, slidesPerGroup: fullScroll ? curValue : 1 } };
      case 'sm':
        return { ...acc, 768: { slidesPerView: curValue, slidesPerGroup: fullScroll ? curValue : 1 } };
      case 'xs':
        return { ...acc, 0: { slidesPerView: curValue, slidesPerGroup: fullScroll ? curValue : 1 } };
      default:
        return acc;
    }
  }, {});
}

export function getWrapperClassname(pagination?: string): string | undefined {
  if (pagination !== 'bullet_bottom') {
    return;
  }

  return 'pb-10';
}

export interface SwiperOptions extends Omit<SwiperProps, 'pagination' | 'autoplay' | 'breakpoints'> {
  perView?: number;
  pagination?: string;
  centered?: boolean;
  autoplay?: number;
  pauseOnHover?: boolean;
  gap?: number;
  breakpoints?: Record<
    string | number,
    {
      slidesPerView?: number;
      slidesPerGroup?: number;
      spaceBetween?: number;
    }
  >;
  row?: number;
  fullScroll?: boolean;
}
