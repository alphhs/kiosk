export interface BlocksType {
  hideMobile?: boolean;
  hideDesktop?: boolean;
  hideInApp?: boolean;
}

export interface GridOptions {
  rowGap?: number;
  columnGap?: number;
  type?: 'breakpoint' | 'width';
  colWidth?: number;
  breakpoints?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
}

export interface ContentStyle {
  gridArea?: string;
}

export interface ColumnWidth {
  desktop?: string;
  mobile?: string;
}

export type DisplayType = 'grid' | 'swiper' | 'background' | 'single';

export interface CodyImageProps {
  id: string | number;
  file_name: string;
  width?: number;
  height?: number;
}

export interface TextProps {
  text?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  textAlign?: 'left' | 'center' | 'right';
  lineLimit?: number;
}
