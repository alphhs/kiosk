'use client';

import { calculateLink } from '@cody-mn/utils';

export function NextImage({ id, file_name, width, height, ...rest }: NextImageProps) {
  if (!id || !file_name) return null;

  return (
    <img
      alt={file_name}
      src={calculateLink(id, file_name, width || 0, height || 0, true)?.replace(/http:/g, 'https:')}
      {...rest}
    />
  );
}

export interface NextImageProps {
  id: string | number;
  file_name: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
}
