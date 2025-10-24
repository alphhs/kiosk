'use client';

import { useEffect, useState, lazy, Suspense } from 'react';
import { getBlockGridClassnames } from '../../utils/tailwind-config';
import { calculateLink } from '@cody-mn/utils';
import type { ImagePreviewType } from 'rc-image';
import type { PreviewProps } from 'rc-image/lib/Preview';

import { ImageBlockItemProps, ImageBlockProps } from './image-block-type';
import { SingleItem } from './single-item';

// Lazy-load rc-image PreviewGroup directly to ensure the whole lib is code-split
const LazyPreviewGroup = lazy(() => import('rc-image').then((m) => ({ default: m.default.PreviewGroup })));

function DisplayGrid({
  items,
  gridOptions,
  titleConfig,
  subtitleConfig,
  paddingText,
  backgroundColor,
  borderColor,
  borderRadius,
  hoverDuration,
  hoverShadow,
  hoverImg,
  hoverEffect,
  paddingImg,
  option,
  zoomOnClick,
}: DisplayGridProps) {
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const gridClassnames = getBlockGridClassnames(gridOptions);
  const images = items.flatMap((item) =>
    item.img ? calculateLink(item.img.id, item.img.file_name, 1200, 0, true)?.replace(/http:/g, 'https:') : '',
  );

  // Lazy-load icons and toolbar only when preview is opened
  const [icons, setIcons] = useState<PreviewProps['icons'] | null>(null);
  const [toolbarRender, setToolbarRender] = useState<ImagePreviewType['toolbarRender'] | null>(null);

  useEffect(() => {
    if (zoomOnClick && open && (!icons || !toolbarRender)) {
      import('./rc-image').then((m) => {
        setIcons(m.RCImageIcons);
        setToolbarRender(() => m.RCImageToolbar);
      });
    }
  }, [zoomOnClick, open, icons, toolbarRender]);

  return (
    <div
      className={`relative grid items-start ${gridClassnames}`}
      style={{ rowGap: gridOptions?.rowGap, columnGap: gridOptions?.columnGap }}
    >
      {items.map((item, idx) => {
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
    </div>
  );
}

export default DisplayGrid;

export interface DisplayGridProps {
  items: ImageBlockItemProps[];
  gridOptions: ImageBlockProps['gridOptions'];
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
