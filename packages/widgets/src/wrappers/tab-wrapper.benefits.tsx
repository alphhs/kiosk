import { calculateLink } from '@cody-mn/utils';
import cn from 'classnames';

import { BlocksFactory } from '../blocks/blocks-factory';
import { CodyImg } from '../blocks/image/image-block-type';
import { Text, TextConfig } from '../components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';

function getDirection(isVertical: boolean, isReverse: boolean) {
  if (isVertical) {
    return isReverse ? 'flex-row-reverse' : 'flex-row';
  }

  return isReverse ? ' flex-col-reverse' : 'flex-col';
}

export function TabWrapper({ items, tabOptions, textConfig }: TabWrapperProps) {
  const firstItem = items.length > 0 ? items[0]?.id : undefined;
  const isVertical = tabOptions?.position === 'left' || tabOptions?.position === 'right';
  const isReverse = tabOptions?.position === 'bottom' || tabOptions?.position === 'right';

  return (
    <Tabs defaultValue={firstItem}>
      <section className={cn('flex justify-center gap-4', getDirection(isVertical, isReverse))}>
        <TabsList
          className={cn(
            'flex gap-2',
            isVertical ? 'flex-col' : 'flex-row',
            // benefits specific code below
            isVertical ? 'shrink-0' : 'thin-scrollbar items-center overflow-x-auto lg:flex-wrap lg:justify-center',
          )}
        >
          {items.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={cn(
                'flex shrink-0 items-center justify-center',
                'rounded-full border px-6 py-2.5',
                'text-sm font-semibold uppercase',
                'text-primary bg-transparent shadow-sm',
                'hover:text-base-content focus:text-base-content transition-colors',
                'data-[state=active]:text-primary-content data-[state=active]:bg-linear-(--color-gradient)',
              )}
            >
              {tab.componentImage && (
                <img
                  src={calculateLink(tab.componentImage.id, tab.componentImage.file_name, 0, 0)}
                  className="tab-image"
                  alt="cody"
                />
              )}
              {!!tab.componentTitle && <Text content={{ ...textConfig, text: tab.componentTitle }} noFontWeight sameLineHeight />}
            </TabsTrigger>
          ))}
        </TabsList>
        {items.map((content) => (
          <TabsContent key={content.id} value={content.id}>
            <BlocksFactory {...content} />
          </TabsContent>
        ))}
      </section>
    </Tabs>
  );
}

interface TabItem {
  id: string;
  componentTitle: string;
  componentImage?: CodyImg;
  component: string;
}

export interface TabWrapperProps {
  items: Array<TabItem>;
  tabOptions?: TabOptionsType;
  textConfig?: TextConfig;
  component: 'TabWrapper';
}

export type TabOptionsType = {
  centered?: boolean;
  isCard?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
  isSticky?: boolean;
  stickyTopDesktop?: number;
  stickyTopMobile?: number;
};
