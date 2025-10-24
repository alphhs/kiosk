import { SwiperOptions } from '@kiosk/ui/swiper';

import { CodyImageProps, ContentStyle, DisplayType, GridOptions, TextProps } from '../blocks-type';

export interface BrandBlockProps {
  showCover?: boolean;
  showPromo?: boolean;
  showSale?: boolean;
  showSamples?: boolean;
  showLogo?: boolean;
  borderRadius?: number;
  borderColor?: string;
  backgroundColor?: string;
  display?: DisplayType;
  contentStyle?: ContentStyle;
  swiperOptions?: SwiperOptions;
  gridOptions?: GridOptions;
  items?: BrandBlockItem[];
}

export interface BrandBlockItem {
  id: string;
  logo: CodyImageProps;
  cover: CodyImageProps;
  name?: TextProps;
  category?: TextProps;
  code: string;
  productsCount: number;
  // listings?: any[];
  listingsCount?: number;
  salesCount?: number;
  promotionsCount?: number;
}
