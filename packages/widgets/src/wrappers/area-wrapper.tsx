import { FC, Suspense } from 'react';

import type { WidgetsType } from '../widgets-type';
import { WrapperFactoryDetector } from './wrapper-factory-detector';

export function AreaWrapper({ items, areaOptions = {}, wrappersFactory, extraBlocks }: AreaWrapperProps) {
  return (
    <div
      data-component="area-wrapper"
      className="relative z-0 grid"
      style={{
        alignItems: areaOptions.alignItems || 'stretch',
        columnGap: areaOptions.columnGap || 0,
        rowGap: areaOptions.rowGap || 0,
        gridTemplateColumns: areaOptions.templateColumns || 'unset',
        gridTemplateRows: areaOptions.templateRows || 'unset',
      }}
    >
      {items.map((item, idx) => {
        const { component, contentStyle, style = {} } = item || {};

        return (
          <div key={item.id || idx} style={{ ...style, ...contentStyle, zIndex: idx + 1, overflow: 'hidden' }}>
            <Suspense fallback={<div />}>
              <WrapperFactoryDetector
                {...item}
                wrappersFactory={wrappersFactory}
                component={component}
                extraBlocks={extraBlocks}
              />
            </Suspense>
          </div>
        );
      })}
    </div>
  );
}

export type AreaOptionsType = {
  alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  templateColumns?: string;
  templateRows?: string;
  columnGap?: number;
  rowGap?: number;
};

export type AreaWrapperProps = {
  component: 'AreaWrapper';
  items: Array<WidgetsType>;
  areaOptions?: AreaOptionsType;
  wrappersFactory: FC<WidgetsType>;
  extraBlocks?: Record<string, FC<WidgetsType>>;
  id?: string;
};
