'use client';

import { calculateLink } from '@cody-mn/utils';
import { ImageLoader } from 'next/dist/shared/lib/get-img-props';
import { useCallback } from 'react';

export function NextImage({ id, file_name, width, height, ...rest }: NextImageProps) {
  const imageLoader = useCallback<ImageLoader>(
    (params) => {
      if (params.width > width || !params.width) return params.src;
      return calculateLink(id, file_name, params.width || 0, 0, true)?.replace(/http:/g, 'https:');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  if (!id || !file_name) return null;

  return (
    <img
      // unoptimized
      alt={file_name}
      // placeholder="blur"
      // blurDataURL={`https://via.placeholder.com/${width}x${height}?text=${file_name}`}
      src={calculateLink(id, file_name, width || 0, height || 0, true)?.replace(/http:/g, 'https:')}
      // removed sizes because its breaking when change browser width, when used within AreaWrapper
      // sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, (max-width: 1080px) 100vw, (max-width: 1200px) 100vw, (max-width: 1920px) 100vw"
      {...rest}
    />
  );
}

export interface NextImageProps  {
  id: string | number;
  file_name: string;
  width: number;
  height: number;
}
