import { IsLazy } from '@kiosk/ui';
import { CSSProperties, ElementType, ReactNode, Suspense } from 'react';

import ResponsiveSection from './components/responsive-section';
// import { IsLazy } from '@/components/helper/is-lazy';
import { WidgetsFactory } from './widgets-factory';
import { AnyData } from './widgets-type';

export interface BlocksRenderProps {
  items: Array<AnyData>;
  noContainer?: boolean;
  extraBlocks?: Record<string, ElementType>;
  withInspector?: boolean;
}

export function WidgetsRender({ items, noContainer, extraBlocks }: BlocksRenderProps) {
  return items.map(({ contentStyle, container, component, ...rest }, idx) => (
    <Item
      key={rest.id}
      idx={idx}
      component={component}
      contentStyle={contentStyle}
      container={noContainer ? { type: 'none' } : container}
      extraBlocks={extraBlocks}
      data={rest}
    />
  ));
}

export interface ItemProps {
  component: string;
  container: { type: 'none' | 'fluid' };
  contentStyle: CSSProperties;
  data: AnyData;
  idx: number;
  extraBlocks?: Record<string, ElementType>;
}

export function Item({ component, contentStyle, container, data, extraBlocks, idx }: ItemProps) {
  return (
    <ResponsiveSection
      hideMobile={data.hideMobile}
      hideDesktop={data.hideDesktop}
      description={data.componentDescription}
      mobileStyle={{
        ...data.mobileStyle,
        background: data.style?.background || undefined,
        border: data.style?.border || undefined,
      }}
      desktopStyle={data.style}
    >
      <ItemContainer container={container?.type}>
        <ItemContent contentStyle={contentStyle}>
          <IsLazy height={300} idx={idx} name={component} placeholder={<div className="skeleton mb-8 h-96" />}>
            <Suspense fallback={<div className="skeleton mb-8 h-96" />}>
              <WidgetsFactory component={component} extraBlocks={extraBlocks} {...data} />
            </Suspense>
          </IsLazy>
        </ItemContent>
      </ItemContainer>
    </ResponsiveSection>
  );
}

function getContainer(container: 'none' | 'fluid' | 'fixed') {
  if (!container) return 'container';
  if (container === 'fluid') return 'container-fluid';
  if (container === 'fixed') return 'container';
  if (container === 'none') return '';
  return '';
}

export function ItemContainer({ container, children }: { container: 'none' | 'fluid' | 'fixed'; children: ReactNode }) {
  return <div className={getContainer(container)}>{children}</div>;
}

export function ItemContent({ contentStyle, children }: { contentStyle: CSSProperties; children: ReactNode }) {
  return <div style={contentStyle}>{children}</div>;
}
