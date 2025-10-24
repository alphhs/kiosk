import React from 'react';

import { Text } from '../text';
import { MoreLink } from './more-link';

type CustomTextType = {
  text?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  textAlign?: 'left' | 'center' | 'right';
  lineLimit?: number;
};

export type moreType = {
  label: CustomTextType;
  url?: string;
  position?: 'fixed_top_right' | 'title_inline' | 'title_bottom';
};

export type TitleBarProps = {
  title?: CustomTextType;
  more?: moreType;
  showMore?: boolean;
};

export const TitleBar: React.FC<TitleBarProps> = ({ title, showMore, more }) => {
  if (!title || !title.text) return null;

  return (
    <div className="relative mb-4 flex items-center justify-between gap-2">
      {title && <Text level={5} content={title} />}
      {showMore && more && more.position !== 'title_inline' && <MoreLink more={more} />}
    </div>
  );
};
