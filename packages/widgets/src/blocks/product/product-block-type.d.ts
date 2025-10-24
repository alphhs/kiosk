import { SwiperOptions } from '@kiosk/ui';

import { ContentStyle, DisplayType, GridOptions, TextProps } from '../blocks-type';
import { QueryProps } from './fetch-products';

export interface ProductBlockProps extends QueryProps {
  id?: string;
  more?: moreType;
  showMore?: boolean;
  display?: DisplayType;
  contentStyle?: ContentStyle;
  gridOptions?: GridOptions;
  swiperOptions?: SwiperOptions;
  title?: TextProps;
  size?: number;
  order?: 'date_desc' | 'date_asc' | 'price_desc' | 'price_asc' | 'sale_desc' | 'most_sold' | '1M' | '1W' | '1D' | 'featured';
  leasingPrice?: boolean;
}

type moreType = {
  label: CustomTextType;
  url?: string;
  position?: 'fixed_top_right' | 'title_inline' | 'title_bottom';
};
