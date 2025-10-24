import { calculateLink } from '@cody-mn/utils';
import cn from 'classnames';

import { BlocksFactory } from '../blocks/blocks-factory';
import { CodyImg } from '../blocks/image/image-block-type';
import { Text, TextConfig } from '../components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';

export function TabWrapper({ items, tabOptions, textConfig }: TabWrapperProps) {
  const firstItem = items.length > 0 ? items[0]?.id : undefined;

  return (
    <Tabs defaultValue={firstItem}>
      <section>
        <div className="">
          <TabsList
            className={cn(
              `-mb-px flex space-x-8`,
              { ['justify-center']: tabOptions?.centered },
              { ['!space-x-1 md:!space-x-2']: tabOptions?.isCard },
            )}
          >
            {items.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  'hover:border-base-content data-[state=active]:bg-primary data-[state=active]:text-primary-content',
                  { [`border-base-content/20 rounded-3xl border px-2 md:px-8`]: tabOptions?.isCard },
                  'flex flex-col items-center gap-2 py-2 text-sm font-medium whitespace-nowrap md:py-3',
                )}
              >
                {tab.componentImage && (
                  <img
                    src={calculateLink(tab.componentImage.id, tab.componentImage.file_name, 0, 0)}
                    className="tab-image"
                    alt="cody"
                  />
                )}
                {!!tab.componentTitle && (
                  <Text content={{ ...textConfig, text: tab.componentTitle }} noFontWeight sameLineHeight />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {items.map((content) => (
          <TabsContent key={content.id} value={content.id} className="mt-4">
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
