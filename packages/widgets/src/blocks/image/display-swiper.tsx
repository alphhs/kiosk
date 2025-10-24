'use client';

import { useEffect, useState, lazy } from 'react';
import { SwiperWithRenderedItems } from '@kiosk/ui/swiper';
import { calculateLink } from '@cody-mn/utils';
import type { ImagePreviewType } from 'rc-image';
import type { PreviewProps } from 'rc-image/lib/Preview';
import type { SwiperProps, SwiperSlideProps } from 'swiper/react';

import type { ImageBlockItemProps, ImageBlockProps } from './image-block-type.d.ts';
import { SingleItem } from './single-item';

// Lazy-load rc-image PreviewGroup directly to ensure the whole lib is code-split
const LazyPreviewGroup = lazy(() => import('rc-image').then((m) => ({ default: m.default.PreviewGroup })));

function DisplaySwiper({
  items,
  swiperProps,
  swiperSlideProps,
  titleConfig,
  subtitleConfig,
  paddingText,
  borderRadius,
  borderColor,
  hoverDuration,
  hoverShadow,
  hoverImg,
  hoverEffect,
  backgroundColor,
  paddingImg,
  option,
  zoomOnClick,
}: DisplaySwiperProps) {
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  // Lazy-load icons and toolbar only when preview is opened
  const [icons, setIcons] = useState<PreviewProps['icons'] | null>(null);
  const [toolbarRender, setToolbarRender] = useState<ImagePreviewType['toolbarRender'] | null>(null);

  const images = items.flatMap((item) =>
    item.img ? calculateLink(item.img.id, item.img.file_name, 1200, 0, true)?.replace(/http:/g, 'https:') : '',
  );

  useEffect(() => {
    if (zoomOnClick && open && (!icons || !toolbarRender)) {
      import('./rc-image').then((m) => {
        setIcons(m.RCImageIcons);
        setToolbarRender(() => m.RCImageToolbar);
      });
    }
  }, [zoomOnClick, open, icons, toolbarRender]);

  return (
    <>
      <SwiperWithRenderedItems
        swiperProps={swiperProps}
        swiperSlideProps={swiperSlideProps}
        renderedItems={items.map((item, idx) => {
          const content = (
            <SingleItem
              key={idx}
              item={item}
              paddingText={paddingText}
              titleConfig={titleConfig}
              subtitleConfig={subtitleConfig}
              hoverShadow={hoverShadow}
              hoverImg={hoverImg}
              hoverEffect={hoverEffect}
              hoverDuration={hoverDuration}
              paddingImg={paddingImg}
              option={option}
              style={{
                borderRadius: `${borderRadius || 0}px`,
                border: borderColor ? `1px solid ${borderColor}` : 'unset',
                backgroundColor: backgroundColor || 'unset',
                transition: hoverDuration ? `all ${hoverDuration}ms ease-in-out` : 'unset',
              }}
              zoomOnClick={zoomOnClick}
            />
          );

          if (zoomOnClick) {
            return (
              <div
                key={idx}
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
                className="cursor-pointer"
              >
                {content}
              </div>
            );
          }

          return content;
        })}
      />

      {zoomOnClick && open && icons && toolbarRender ? (
        <LazyPreviewGroup
          icons={icons}
          preview={{
            visible: open,
            current: index,
            toolbarRender: toolbarRender,
            onChange: (i) => setIndex(i),
            onVisibleChange: (visible) => setOpen(visible),
          }}
          items={images}
        />
      ) : null}
    </>
  );
}

export default DisplaySwiper;

export interface DisplaySwiperProps {
  items: ImageBlockItemProps[];
  swiperProps?: SwiperProps;
  swiperSlideProps: SwiperSlideProps;
  titleConfig: ImageBlockProps['titleConfig'];
  subtitleConfig: ImageBlockProps['subtitleConfig'];
  paddingText: ImageBlockProps['paddingText'];
  borderRadius: ImageBlockProps['borderRadius'];
  borderColor: ImageBlockProps['borderColor'];
  backgroundColor: ImageBlockProps['backgroundColor'];
  hoverDuration: ImageBlockProps['hoverDuration'];
  hoverShadow: ImageBlockProps['hoverShadow'];
  hoverImg: ImageBlockProps['hoverImg'];
  hoverEffect: ImageBlockProps['hoverEffect'];
  paddingImg: ImageBlockProps['paddingImg'];
  option: ImageBlockProps['option'];
  zoomOnClick?: ImageBlockProps['zoomOnClick'];
}
