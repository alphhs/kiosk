'use client';

import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ESService, HitObject } from '@cody-mn/utils/es-service';
import cn from 'classnames';
import { flatten } from 'lodash';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { registry } from '../../registry';
import { WidgetsType } from '../../widgets-type';
import { FacebookReel } from './facebook-reel';
import { InstagramReel } from './instagram-reel';

type SocialType = 'facebook' | 'instagram';

export interface ReelsBlockProps extends WidgetsType {
  items?: Array<{
    reelId: string;
    skus: string;
  }>;
  gap: number;
  social?: SocialType;
  initialPosition?: 'start' | 'center' | 'end';
}

const blockMap: Record<SocialType, React.ComponentType<{ id: string; product?: HitObject }>> = {
  facebook: FacebookReel,
  instagram: InstagramReel,
};

export function ReelsBlock({ items = [], gap = 16, social, initialPosition = 'center' }: ReelsBlockProps) {
  const [products, setProducts] = useState<HitObject[]>([]);
  const skuArray = flatten(items.map((i) => i.skus?.split(',').map((s) => s.trim())));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const esServiceInstance = useMemo(() => registry?.esService || ESService.getInstance, [registry]);

  useEffect(() => {
    if (!skuArray.length) return;
    esServiceInstance()
      .products({ sku: skuArray })
      .then((r) => setProducts(r));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (social === 'instagram') {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sliderRef = useRef<SwiperRef>(null);
  const { handlePrev, handleNext } = useSwiperControls(sliderRef as RefObject<SwiperRef>);

  if (!items || !social) return null;

  const reelWidths = {
    facebook: '!w-[267px]',
    instagram: '!w-[326px]',
  };

  const reelWidth = reelWidths[social];
  const ReelComp = blockMap[social];
  const initialSlide = getInitialSlideFromPosition(items.length, initialPosition);

  return (
    <div className="">
      <Swiper
        ref={sliderRef}
        centeredSlides={true}
        freeMode={true}
        cssMode={true}
        wrapperClass={cn(
          'group-[&:not(.swiper-initialized)]:grid',
          'block py-5 group-[&:not(.swiper-initialized)]:overflow-hidden',
        )}
        slidesPerView="auto"
        className={cn('group @container')}
        pagination={true}
        spaceBetween={gap || 16}
        initialSlide={initialSlide}
      >
        {items.map((i, idx) => {
          const product = products.find((p) => p.sku === i.skus);
          return (
            <SwiperSlide
              key={i.reelId}
              className={cn(`group/slide py-6`, reelWidth)}
              onClick={() => {
                sliderRef.current?.swiper.slideTo(idx);
              }}
            >
              <ReelComp id={i.reelId} product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {items.length > 1 && (
        <div className="flex justify-center gap-2">
          <button type="button" onClick={handlePrev} className="btn btn-square btn-ghost btn-sm" aria-label="previous slide">
            <ArrowIcon className="" />
          </button>
          <button type="button" onClick={handleNext} className="btn btn-square btn-ghost btn-sm" aria-label="next slide">
            <ArrowIcon className="rotate-180" />
          </button>
        </div>
      )}
    </div>
  );
}

const ArrowIcon = ({ className }: { className: string }) => (
  <svg width="18" height="10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M5 8.9a1 1 0 0 1-1.414 0L.395 5.708a1 1 0 0 1-.001-1.415L3.586 1.1A1 1 0 0 1 5 2.515L3.515 4H17a1 1 0 1 1 0 2H3.515L5 7.485A1 1 0 0 1 5 8.9Z"
      fill="#090A0B"
    ></path>
  </svg>
);

function useSwiperControls(sliderRef: React.RefObject<SwiperRef>) {
  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, [sliderRef]);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, [sliderRef]);

  return { handlePrev, handleNext };
}

function getInitialSlideFromPosition(itemsLength: number, position: ReelsBlockProps['initialPosition']) {
  if (position === 'start') {
    return 0;
  }

  if (position === 'end') {
    return itemsLength - 1;
  }

  return Math.floor(itemsLength / 2);
}
