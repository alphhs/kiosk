
import React from 'react';
import type { WidgetsType } from '../widgets-type';
import { AreaWrapper } from './area-wrapper';
import { CollapseWrapper } from './collapse-wrapper';
import { RowWrapper } from './row-wrapper';
import { TabWrapper } from './tab-wrapper';


const SwiperWrapper = React.lazy(() =>
  import('./swiper-wrapper').then((mod) => ({ default: mod.SwiperWrapper }))
);

export function WrappersFactory({ component, ...props }: WidgetsType) {
  switch (component) {
    case 'AreaWrapper':
      return <AreaWrapper wrappersFactory={WrappersFactory} {...props} component={component} />;
    case 'RowWrapper':
      return <RowWrapper wrappersFactory={WrappersFactory} {...props} component={component} />;
    case 'SwiperWrapper':
      return <SwiperWrapper wrappersFactory={WrappersFactory} {...props} component={component} />;
    case 'TabWrapper':
      return <TabWrapper wrappersFactory={WrappersFactory} {...props} component={component} />;
    case 'CollapseWrapper':
      return <CollapseWrapper wrappersFactory={WrappersFactory} {...props} component={component} />;
    default:
      return <div data-component="no-block" />;
  }
}
