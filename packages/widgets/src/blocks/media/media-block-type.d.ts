import { SwiperOptions } from '@kiosk/ui/swiper';

import { SortDirection } from '../../graphql';
import { BlocksType, ContentStyle, DisplayType, GridOptions, TextProps } from '../blocks-type';

export interface MediaBlockProps extends BlocksType {
  component: string;
  id: string;
  selector?: null | 'ids' | 'tags';
  ids?: string[];
  tags?: string[];
  size?: number;
  template?: 'card' | 'list' | 'photo';
  display?: DisplayType;
  contentStyle?: ContentStyle;
  swiperOptions?: SwiperOptions;
  gridOptions?: GridOptions;
  sort?: SortDirection;
  title?: TextProps;
}
