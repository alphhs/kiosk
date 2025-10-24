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

// Only changed some styling
// Please copy over any functional from main
export function TabWrapper({ items, tabOptions, textConfig }: TabWrapperProps) {
  const firstItem = items.length > 0 ? items[0]?.id : undefined;
  const position = tabOptions?.position ?? 'top';

  const isVertical = position === 'left' || position === 'right';
  const isReverse = position === 'bottom' || position === 'right';

  return (
    <Tabs defaultValue={firstItem}>
      <section
        className={cn(
          'flex min-w-0',
          getDirection(isVertical, isReverse),

          // use this gap to control space between tab list and tab content
          'gap-4',
        )}
      >
        <div
          className={cn(
            //'border-base-content/20',
            //{
            //  ['border-b']: position === 'top',
            //  ['border-l']: position === 'right',
            //  ['border-t']: position === 'bottom',
            //  ['border-r']: position === 'left',
            //},
            isVertical && 'shrink-0',
          )}
        >
          <div className={cn('flex', { ['justify-center']: tabOptions?.centered })}>
            <TabsList
              className={cn(
                'flex',
                'thin-scrollbar overflow-auto',
                isVertical ? 'flex-col' : 'flex-row',
                //tabOptions?.isCard ? 'gap-1' : 'gap-8',
                tabOptions?.isCard ? 'gap-1' : 'gap-4',
                //{
                //  ['-mb-px']: position === 'top',
                //  ['-ml-px']: position === 'right',
                //  ['-mt-px']: position === 'bottom',
                //  ['-mr-px']: position === 'left',
                //},
              )}
            >
              {items.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    //'border-transparent hover:border-base-content/60',
                    //'data-[state=active]:border-primary data-[state=active]:text-primary',
                    'data-[state=active]:text-primary',
                    'shrink-0',
                    { ['data-[state=active]:bg-base-200']: tabOptions?.isCard },
                    //{ [`px-4`]: tabOptions?.isCard }, // dunno what this does?
                    'flex flex-col items-center gap-2 text-sm font-medium whitespace-nowrap',
                    'min-h-9 justify-center rounded transition-colors',
                    !tab.componentImage && 'border-accent hover:bg-accent/30 data-[state=active]:bg-accent/50 border px-3',
                    //{
                    //  ['border-b-2 py-4']: position === 'top',
                    //  ['border-l-2 px-4']: position === 'right',
                    //  ['border-t-2 py-4']: position === 'bottom',
                    //  ['border-r-2 px-4']: position === 'left',
                    //},
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
        </div>
        {items.map((content) => (
          <TabsContent key={content.id} value={content.id} className="grow">
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
