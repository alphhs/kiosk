import { FC } from 'react';
import classNames from 'classnames';

import { BlocksFactory } from '../blocks/blocks-factory';
import { TextProps } from '../blocks/blocks-type';
import { WidgetsType } from '../widgets-type';

export function CollapseWrapper({ items, textConfig, collapseOptions, id, extraBlocks }: CollapseWrapperProps) {
  if (!items || items?.length === 0) return null;

  return (
    <section data-component="collapse-wrapper" data-component-type="collapse" className="space-y-4">
      {items.map(
        (item, idx) =>
          item.componentTitle && (
            <div
              key={idx}
              className={classNames(
                'collapse rounded-lg',
                `${icons[collapseOptions?.icon || 'angle']}`,
                `${collapseOptions?.ghost ? '' : 'border-base-content/20 border'}`,
              )}
            >
              {/*<input*/}
              {/*    type={collapseOptions?.accordion ? 'radio' : 'checkbox'}*/}
              {/*    name={`collapse-wrapper-input-${id}`}*/}
              {/*    className="hidden after:!hidden"*/}
              {/*    id={`collapse-wrapper-input-${id}-${idx}`}*/}
              {/*/>*/}
              <input type="checkbox" className="" defaultChecked={idx === 0 && collapseOptions?.defaultOpenFirst} />
              <label
                className={`collapse-title h-fit min-h-min px-4 after:text-xl ${collapseOptions?.ghost ? '' : 'bg-base-300'}`}
                htmlFor={`collapse-wrapper-input-${id}-${idx}`}
              >
                <h3 style={textConfig} className="text-md mb-0 p-0 font-medium">
                  {item.componentTitle}
                </h3>
              </label>
              <div className="collapse-content">
                <div className="mt-4">
                  <BlocksFactory {...item} extraBlocks={extraBlocks} />
                </div>
              </div>
            </div>
          ),
      )}
    </section>
  );
}

const icons: Record<string, string> = {
  plus: 'collapse-plus',
  angle: 'collapse-arrow',
};

export interface CollapseWrapperProps {
  id: string;
  component: 'CollapseWrapper';
  items?: Array<WidgetsType>;
  textConfig?: Omit<TextProps, 'text' | 'lineLimit'>;
  extraBlocks?: Record<string, FC<WidgetsType>>;
  collapseOptions?: {
    accordion?: boolean;
    ghost?: boolean;
    iconRight?: boolean;
    icon: Icon;
    defaultOpenFirst?: boolean;
  };
}

type Icon = 'plus' | 'hide' | 'angle' | 'arrow';
