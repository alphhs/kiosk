'use client';

import { Image as NextImage } from '@kiosk/ui';
import cn from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from '../../components/Link';

interface CustomTextProps {
  text?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  textAlign?: 'left' | 'right' | 'center';
}

export interface NotificationBlockProps {
  id: string;
  component: string;
  placement?: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'center';
  width?: number;
  message?: CustomTextProps;
  description?: CustomTextProps;
  image?: { id: string; file_name: string; width?: number; height?: number };
  url?: string;
  appearIn?: number;
  duration?: number;
  video?: string;
  youtube?: string;
}

function positionClasses(placement?: string): string {
  switch (placement) {
    case 'center':
      return 'top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]';
    case 'top':
      return 'top-4 left-[50%] transform translate-x-[-50%]';
    case 'topLeft':
      return 'top-4 left-4';
    case 'topRight':
      return 'top-4 right-4';
    case 'bottom':
      return 'bottom-4 left-[50%] transform translate-x-[-50%]';
    case 'bottomLeft':
      return 'bottom-4 left-4';
    case 'bottomRight':
      return 'bottom-4 right-4';
    default:
      return 'bottom-4 right-4';
  }
}

const CustomText = ({ item }: { item: CustomTextProps }) => (
  <p
    style={{
      color: item.color || '#242424',
      fontSize: `${item.fontSize || 14}px`,
      fontWeight: item.fontWeight || 'normal',
      textAlign: item.textAlign || 'left',
    }}
  >
    {item.text}
  </p>
);

export function NotificationBlock({
  id,
  message,
  description,
  image,
  video,
  youtube,
  duration = 0,
  url,
  placement,
  width,
  appearIn,
}: NotificationBlockProps) {
  const lsKey = `closed_${id}`;
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const onClose = useCallback(() => {
    setShow(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(lsKey, Date.now().toString());
    }
  }, [lsKey]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastClose = localStorage.getItem(lsKey);
      if (lastClose) {
        const minutesSinceClose = (Date.now() - parseInt(lastClose, 10)) / (1000 * 60);
        if (!appearIn || minutesSinceClose >= appearIn) {
          setShow(true);
        }
      } else {
        setShow(true);
      }
    }
  }, [appearIn, lsKey]);

  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => onClose(), duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  // For better keyboard accessibility
  useEffect(() => {
    const handleClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && show) {
        onClose();
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (show && !modalRef.current?.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleClose);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleClose);
      document.removeEventListener('click', handleClick);
    };
  }, [show, onClose]);

  return show ? (
    <>
      {placement === 'center' && (
        <button type="button" aria-hidden="true" className="bg-neutral-content/50 fixed inset-0 z-[100] transition-opacity" />
      )}
      <div
        data-component="notification-block"
        ref={modalRef}
        style={{ width: `${width || 200}px` }}
        className={cn(`fixed z-[101] block max-w-[90vw] shadow transition-all`, positionClasses(placement), {
          ['hidden']: !show,
        })}
      >
        <div className="relative">
          <button className="btn btn-xs absolute top-2 right-2 z-[102] w-10 cursor-pointer" onClick={onClose}>
            {closeIcon}
          </button>

          <Link href={url || ''} className="bg-base-100 block">
            {(message?.text || description?.text) && (
              <div className="mb-4 space-y-0.5 px-3">
                {message?.text && <CustomText item={message} />}
                {description?.text && <CustomText item={description} />}
              </div>
            )}
            {image && (
              <NextImage {...image} width={image.width || 0} height={image.height || 0} className="w-full object-contain" />
            )}
            {video && (
              <video autoPlay loop muted preload="true" width="100%" controls={false}>
                <source src={video} type="video/mp4" />
              </video>
            )}
            {youtube && (
              <div>
                <iframe
                  allowFullScreen
                  style={{ border: 0 }}
                  className="aspect-[16/9] w-full"
                  src={`https://www.youtube.com/embed/${youtube}?autoplay=1&controls=0&showinfo=0&autohide=1`}
                />
              </div>
            )}
          </Link>
        </div>
      </div>
    </>
  ) : null;
}

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
