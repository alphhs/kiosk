import React, { HTMLAttributes } from 'react';
import { calculateLink } from '@cody-mn/utils';

// import css from './Picture.module.scss';

const calcLink = (img: codyImage, type: string, wxh: number[], webp = true) =>
  calculateLink(img.id, img.file_name, wxh[0], wxh[1], webp, type);

declare type Modify<T, R> = Omit<T, keyof R> & R;

export interface PictureProps extends HTMLAttributes<HTMLPictureElement> {
  media: Record<string, number[]>;
  img: codyImage;
  type?: string;
  alt?: string;
  imgProps?: Modify<HTMLAttributes<HTMLImageElement>, { src?: string }>;
}

const calcRatio = (firstMedia: Array<number>, img: codyImage) => {
  const haventZero = firstMedia.every((m) => m !== 0);
  if (haventZero) return firstMedia[0]! / firstMedia[1]!;
  if (img.width && img.height) return img.width / img.height;
  return undefined;
};

export const Picture: React.FC<PictureProps> = ({
  className,
  media = {},
  img,
  type = 'img',
  alt = 'cody',
  imgProps = {},
  ...rest
}) => {
  const firstMedia = Object.values(media)[0];
  if (!img || !firstMedia) return null;

  const ratio = calcRatio(firstMedia, img);

  return (
    <picture
      {...rest}
      style={{ aspectRatio: ratio ? `${ratio}` : 'unset' }}
      // className={cn(css.picture, className)}
    >
      {Object.entries(media).map(([m, wxh]) => (
        <source
          key={`wp-${wxh.join('x')}-${img.id}`}
          type="image/webp"
          media={`(${m})`}
          srcSet={`${calcLink(img, type, wxh, true)}, ${calcLink(
            img,
            type,
            wxh.map((x) => x * 2),
            true,
          )} 2x`}
        />
      ))}
      {Object.entries(media).map(([m, wxh]) => (
        <source
          key={`${wxh.join('x')}-${img.id}`}
          media={`(${m})`}
          srcSet={`${calcLink(img, type, wxh)}, ${calcLink(
            img,
            type,
            wxh.map((x) => x * 2),
          )} 2x`}
        />
      ))}
      <img src={calcLink(img, type, firstMedia)} alt={alt} className={className} {...imgProps} />
    </picture>
  );
};

export interface codyImage {
  id: string | number;
  file_name: string;
  width?: number;
  height?: number;
}
