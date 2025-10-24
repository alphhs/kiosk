import { getSwiperProps } from '@kiosk/ui/swiper';
import { lazy } from 'react';

import { ImageBlockProps } from './image-block-type';
const DisplayBackground = lazy(() => import('./display-background'));
const DisplayGrid = lazy(() => import('./display-grid'));
const DisplaySwiper = lazy(() => import('./display-swiper'));

export function ImageBlock({
  items = [],
  display,
  paddingText,
  paddingImg,
  swiperOptions,
  gridOptions,
  titleConfig,
  subtitleConfig,
  borderRadius,
  borderColor,
  backgroundColor,
  hoverDuration,
  hoverShadow,
  hoverImg,
  hoverEffect,
  option,
  zoomOnClick,
}: ImageBlockProps) {
  if (items.length === 0 || !display) return null;

  switch (display) {
    case 'grid':
      return (
        <div data-component="image-block">
          <DisplayGrid
            items={items}
            gridOptions={gridOptions}
            subtitleConfig={subtitleConfig}
            titleConfig={titleConfig}
            paddingText={paddingText}
            borderRadius={borderRadius}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            hoverDuration={hoverDuration}
            hoverShadow={hoverShadow}
            hoverImg={hoverImg}
            hoverEffect={hoverEffect}
            paddingImg={paddingImg}
            option={option}
            zoomOnClick={zoomOnClick}
          />
        </div>
      );
    case 'swiper':
      return (
        <div data-component="image-block">
          <DisplaySwiper
            items={items}
            swiperProps={getSwiperProps(swiperOptions)}
            swiperSlideProps={{}}
            subtitleConfig={subtitleConfig}
            titleConfig={titleConfig}
            paddingText={paddingText}
            borderRadius={borderRadius}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            hoverDuration={hoverDuration}
            hoverShadow={hoverShadow}
            hoverImg={hoverImg}
            hoverEffect={hoverEffect}
            paddingImg={paddingImg}
            option={option}
            zoomOnClick={zoomOnClick}
          />
        </div>
      );
    case 'background':
      return <DisplayBackground items={items} backgroundColor={backgroundColor} />;
    default:
      return (
        <div data-component="image-block" className="grid h-96 place-content-center rounded bg-gray-200">
          ImageBlock: display is not selected
        </div>
      );
  }
}
