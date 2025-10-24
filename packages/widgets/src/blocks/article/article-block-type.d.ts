import { SwiperOptions } from '@kiosk/ui';

import { SortDirection } from '../../graphql';
import { BlocksType, ColumnWidth, ContentStyle, DisplayType, GridOptions } from '../blocks-type';

export interface ArticleBlockProps extends BlocksType {
  component: string;
  option?: 'image_only';
  id: string;
  hoverEffect?: null;
  hoverDuration?: number;
  borderRadius?: number;
  selector?: 'ids' | 'tags';
  ids?: string[];
  tags?: string[];
  template?: 'card' | 'list' | 'photo';
  size?: number;
  display?: DisplayType;
  contentStyle?: ContentStyle;
  gridOptions?: GridOptions;
  columnWidth?: ColumnWidth;
  sort?: SortDirection;
  swiperOptions?: SwiperOptions;
}
