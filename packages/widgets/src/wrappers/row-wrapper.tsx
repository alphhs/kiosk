import cn from 'classnames';
import { FC } from 'react';

import { WidgetsType } from '../widgets-type';
import { WrapperFactoryDetector } from './wrapper-factory-detector';

export function RowWrapper({ items, wrappersFactory, rowOptions, extraBlocks }: RowWrapperProps) {
  return (
    <div
      data-component="row-wrapper"
      className={cn('flex flex-wrap', {
        'items-center': rowOptions?.align === 'middle',
        'items-start': rowOptions?.align === 'top',
        'items-end': rowOptions?.align === 'bottom',
        'items-stretch': rowOptions?.align === 'stretch',
        'justify-center': rowOptions?.justify === 'center',
        'justify-end': rowOptions?.justify === 'end',
        'justify-around': rowOptions?.justify === 'space-around',
        'justify-start': rowOptions?.justify === 'start',
      })}
      style={{
        rowGap: `${rowOptions?.gutter || 0}px`,
        marginLeft: `-${(rowOptions?.gutter || 0) / 2}px`,
        marginRight: `-${(rowOptions?.gutter || 0) / 2}px`,
      }}
    >
      {items.map((item, idx) => {
        const { contentStyle } = item || {};
        return (
          <div
            key={item.id || idx}
            style={{
              ...contentStyle,
              paddingLeft: (rowOptions?.gutter || 0) / 2,
              paddingRight: (rowOptions?.gutter || 0) / 2,
            }}
            className={`relative max-w-[100%] ${spans[item.columnWidth?.mobile] || 'w-full'} ${spansDesktop[item.columnWidth?.desktop] || 'w-full'}`}
          >
            <WrapperFactoryDetector
              {...item}
              wrappersFactory={wrappersFactory}
              component={item.component || ''}
              extraBlocks={extraBlocks}
            />
          </div>
        );
      })}
    </div>
  );
}

export interface RowWrapperProps {
  items: Array<WidgetsType & { columnWidth?: { desktop?: number; mobile?: number } }>;
  wrappersFactory: FC<WidgetsType>;
  rowOptions?: RowOptionsType;
  extraBlocks?: Record<string, FC<WidgetsType>>;
  component: 'RowWrapper';
}

export interface RowOptionsType {
  gutter?: number;
  align?: 'top' | 'middle' | 'bottom' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'space-around';
}

const spans: Record<number | string, string> = {
  auto: 'w-auto',
  0: 'hidden',
  2: 'w-1/12',
  4: 'w-1/6',
  6: 'w-1/4',
  8: 'w-1/3',
  10: 'w-5/12',
  12: 'w-1/2',
  14: 'w-7/12',
  16: 'w-2/3',
  18: 'w-3/4',
  20: 'w-5/6',
  22: 'w-11/12',
  24: 'w-full',
};
const spansDesktop: Record<number | string, string> = {
  auto: 'lg:w-auto',
  0: 'lg:hidden',
  2: 'lg:block lg:w-1/12',
  4: 'lg:block lg:w-1/6',
  6: 'lg:block lg:w-1/4',
  8: 'lg:block lg:w-1/3',
  10: 'lg:block lg:w-5/12',
  12: 'lg:block lg:w-1/2',
  14: 'lg:block lg:w-7/12',
  16: 'lg:block lg:w-2/3',
  18: 'lg:block lg:w-3/4',
  20: 'lg:block lg:w-5/6',
  22: 'lg:block lg:w-11/12',
  24: 'lg:block lg:w-full',
};
