import { NextImage } from '@kiosk/ui/image';
import { Link } from '@tanstack/react-router';
import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';

import type { CodyImg, ImageBlockItemProps, ImageBlockProps } from './image-block-type.d.ts';
import styles from './styles.module.scss';

export function SingleItem({
  item,
  paddingText,
  paddingImg,
  titleConfig,
  subtitleConfig,
  hoverShadow,
  hoverEffect,
  hoverImg,
  hoverDuration,
  option,
  style,
  zoomOnClick,
}: {
  item: ImageBlockItemProps;
  titleConfig: ImageBlockProps['titleConfig'];
  subtitleConfig: ImageBlockProps['subtitleConfig'];
  paddingText: ImageBlockProps['paddingText'];
  paddingImg: ImageBlockProps['paddingImg'];
  hoverShadow: ImageBlockProps['hoverShadow'];
  hoverImg: ImageBlockProps['hoverImg'];
  hoverEffect: ImageBlockProps['hoverEffect'];
  hoverDuration: ImageBlockProps['hoverDuration'];
  option: ImageBlockProps['option'];
  style: CSSProperties;
  zoomOnClick?: ImageBlockProps['zoomOnClick'];
}) {
  return (
    <LinkOrDiv href={zoomOnClick ? '' : typeof item.link === 'string' ? item.link : item.link?.url}>
      <div
        className={cn(styles.item, {
          [styles.hoverShadow ?? '']: hoverShadow,
          [styles.hoverImg ?? '']: hoverImg,
          [styles.zoomIn ?? '']: hoverEffect === 'zoom_in',
          [styles.zoomOut ?? '']: hoverEffect === 'zoom_out',
          [styles.toColor ?? '']: hoverEffect === 'to_color',
          [styles.toGray ?? '']: hoverEffect === 'to_gray',
        })}
        style={style}
      >
        {option !== 'text_only' && item.img && (
          <div
            className={styles.imageFrame}
            style={{
              padding: paddingImg || 0,
              borderRadius: `${style.borderRadius || 0}`,
              transition: hoverDuration ? `all ${hoverDuration}ms ease-in-out` : 'unset',
            }}
          >
            {hoverEffect === 'flip' ? (
              <FlipperImage front={item.img} back={item.imgHover || item.img} style={style} />
            ) : (
              <>
                <NextImage
                  {...item.img}
                  width={item.img.width || 80}
                  height={item.img.height || 80}
                  className={cn(styles.imageTag, { [styles.normal ?? '']: item.imgHover })}
                  style={{
                    transition:
                      hoverEffect && hoverDuration && ['fade', 'zoom_in', 'zoom_out'].includes(hoverEffect)
                        ? `all ${hoverDuration}ms ease-in-out`
                        : 'unset',
                  }}
                />
                {hoverImg && item.imgHover && (
                  <NextImage
                    {...item.imgHover}
                    width={item.img.width || 80}
                    height={item.img.height || 80}
                    
                  />
                )}
              </>
            )}
          </div>
        )}

        {(item.title || item.subtitle) && (
          <div className="w-full" style={{ padding: paddingText }}>
            {item.title && <h4 style={titleConfig}>{item.title}</h4>}
            {item.subtitle && <p style={subtitleConfig}>{item.subtitle}</p>}
          </div>
        )}
      </div>
    </LinkOrDiv>
  );
}

const LinkOrDiv = ({ href, children }: { href?: string; children: ReactNode }) =>
  href && href.length > 0 ? (
    <Link className="grid place-items-center" to={href}>
      {children}
    </Link>
  ) : (
    <div className="grid place-items-center">{children}</div>
  );

const FlipperImage = ({ front, back, style }: FlipperImageProps) => (
  <div className={styles.flipper}>
    <div className={styles.inner} style={style}>
      <div className={styles.front}>
        <NextImage {...front} style={style} />
      </div>
      <div className={styles.back}>
        <NextImage {...back} style={style} />
      </div>
    </div>
  </div>
);

type FlipperImageProps = {
  front: CodyImg;
  back: CodyImg;
  style?: CSSProperties;
};
