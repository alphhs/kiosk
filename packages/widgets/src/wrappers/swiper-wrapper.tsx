import { getSwiperProps, SwiperOptions, SwiperWithRenderedItems } from '@kiosk/ui/swiper';
import { FC } from 'react';

import { WidgetsType } from '../widgets-type';
import { WrapperFactoryDetector } from './wrapper-factory-detector';

export function SwiperWrapper({ items, wrappersFactory, swiperOptions, extraBlocks }: SwiperWrapperProps) {
  const renderedItems = items.map((item, idx) => (
    <WrapperFactoryDetector key={idx} wrappersFactory={wrappersFactory} {...item} extraBlocks={extraBlocks} />
  ));

  return (
    <div data-component="swiper-wrapper">
      <SwiperWithRenderedItems swiperProps={getSwiperProps(swiperOptions)} renderedItems={renderedItems} />
    </div>
  );
}

export type SwiperWrapperProps = {
  component: 'SwiperWrapper';
  items: Array<WidgetsType>;
  wrappersFactory: FC<WidgetsType>;
  swiperOptions?: SwiperOptions;
  extraBlocks?: Record<string, FC<WidgetsType>>;
  id?: string;
};
