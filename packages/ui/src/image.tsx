import { calculateLink } from '@cody-mn/utils';
import { ImgHTMLAttributes, useCallback } from 'react';

export function Image({ id, file_name, width, height, priority, fill, sizes, unoptimized, src, alt, ...rest }: ImageProps) {
  const getImageSrc = useCallback(() => {
    // If src is provided directly, use it (for regular image URLs)
    if (src) return src;
    
    // Otherwise use our custom calculateLink function
    if (!id || !file_name) return '';
    return calculateLink(id, file_name, width || 0, height || 0, true)?.replace(/http:/g, 'https:') || '';
  }, [src, id, file_name, width, height]);

  const getImageSrcSet = useCallback(() => {
    // Don't generate srcset if using direct src
    if (src || !id || !file_name) return '';
    
    const sizes = [320, 480, 640, 750, 828, 1080, 1200, 1920];
    
    return sizes
      .filter(size => size <= (width || 1920))
      .map(size => {
        const src = calculateLink(id, file_name, size, 0, true)?.replace(/http:/g, 'https:');
        return `${src} ${size}w`;
      })
      .join(', ');
  }, [src, id, file_name, width, getImageSrc]);

  const finalSrc = getImageSrc();
  if (!finalSrc) return null;

  return (
    <img
      alt={alt || file_name || ''}
      src={finalSrc}
      srcSet={getImageSrcSet()}
      width={width}
      height={height}
      loading="lazy"
      {...rest}
    />
  );
}

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'id'> {
  // Our custom props (for calculateLink usage)
  id?: string | number;
  file_name?: string;
  // Standard img props (for direct URL usage)
  src?: string;
  alt?: string;
  // Size props
  width?: number;
  height?: number;
  // Next.js specific props (will be ignored in Vite)
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  unoptimized?: boolean;
  blurDataURL?: string;
}

export default Image;
