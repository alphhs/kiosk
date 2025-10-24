import { CSSProperties } from 'react';

import type { SwiperOptions } from '@/lib/helper/swiper/get-swiper-props';

import type { BlocksType, ColumnWidth, ContentStyle, DisplayType, GridOptions } from '../blocks-type';

export interface ImageBlockProps extends BlocksType {
  id: string;
  component: string;
  option?: 'image_only' | 'text_only';
  items: ImageBlockItemProps[];
  hoverEffect?: 'zoom_out' | 'zoom_in' | 'to_color' | 'to_gray' | 'fade' | 'flip';
  hoverDuration?: number;
  hoverShadow?: boolean;
  hoverImg?: boolean;
  borderRadius?: number;
  borderColor?: string;
  backgroundColor?: string;
  paddingText?: number;
  paddingImg?: number;
  display?: DisplayType;
  contentStyle?: ContentStyle;
  columnWidth?: ColumnWidth;
  titleConfig?: CSSProperties;
  subtitleConfig?: CSSProperties;
  gridOptions?: GridOptions;
  swiperOptions?: SwiperOptions;
  zoomOnClick?: boolean;
}

export interface ImageBlockItemProps {
  img?: CodyImg;
  imgHover?: CodyImg;
  link?: string | LinkObject;
  title?: string;
  subtitle?: string;
}

interface LinkObject {
  url?: string;
}

export interface CodyImg {
  id: string | number;
  file_name: string;
  width: number;
  height: number;
}
