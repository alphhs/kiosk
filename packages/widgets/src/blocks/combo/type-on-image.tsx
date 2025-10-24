'use client';

import { Image as NextImage } from '@kiosk/ui';
import { useState } from 'react';

import { registry } from '../../registry';
import { CodyImg } from '../image/image-block-type';
import { ComboItemType } from './combo-block';

function leftOrRight(left?: string) {
  const screenCenter = 50;
  const leftPercentage = parseFloat(left || '0');
  return leftPercentage < screenCenter ? 'left' : 'right';
}

function getTooltipPositionH(left?: string) {
  if (!left) return '';
  return leftOrRight(left) === 'left' ? 'lg:left-0 lg:ml-8' : 'lg:right-0 lg:mr-8';
}

function getTooltipPositionV(top?: string) {
  if (!top) return 'lg:translate-y-1/2';

  const topPercentage = parseFloat(top);

  if (topPercentage >= 0 && topPercentage <= 40) return 'lg:translate-y-full';
  if (topPercentage > 40 && topPercentage <= 60) return 'lg:translate-y-1/2';
  if (topPercentage > 60 && topPercentage <= 100) return 'lg:translate-y-6';

  return 'lg:translate-y-1/2';
}

export function TypeOnImage({ items = [], image }: { items: ComboItemType[]; image: CodyImg }) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState(true);
  const SingleProduct = registry.product!;

  const toggleTooltip = (idx: number) => {
    setActiveTooltip((prev) => (prev === idx ? null : idx));
  };
  const validPoints = items.filter((item) => item && item.top && item.left) || [];

  return (
    <div>
      <div className="relative">
        <NextImage
          priority
          id={image.id}
          file_name={image.file_name}
          width={image.width || 80}
          height={image.height || 80}
          onClick={() => setActiveTooltip(null)}
          className="skeleton rounded-none"
        />
        {showTooltip &&
          validPoints.map((item, idx) => (
            <div
              key={idx}
              onClick={() => toggleTooltip(idx)}
              style={{ top: `${item.top}%`, left: `${item.left}%` }}
              className={`absolute flex size-6 cursor-pointer ${activeTooltip !== idx ? 'animate-bounce' : ''} bg-primary text-primary-content hover:bg-accent hover:text-accent-content items-center justify-center rounded-sm shadow-lg hover:animate-none`}
            >
              {idx + 1}
              {activeTooltip !== idx ? (
                <div className="border-t-primary absolute -bottom-1.5 left-1/2 size-0 -translate-x-1/2 border-t-8 border-r-8 border-l-8 border-transparent drop-shadow-lg" />
              ) : (
                <>
                  {leftOrRight(item.left) === 'left' ? (
                    <div className="border-l-primary absolute -right-1.5 bottom-1 size-0 border-t-8 border-b-8 border-l-8 border-transparent drop-shadow-lg" />
                  ) : (
                    <div className="border-r-primary absolute bottom-1 -left-1.5 size-0 border-t-8 border-r-8 border-b-8 border-transparent drop-shadow-lg" />
                  )}
                </>
              )}

              {activeTooltip === idx && (
                <div className="bg-base-content bg-opacity-50 fixed inset-0 z-40 grid place-items-center lg:static">
                  <div
                    className={`bg-base-200 text-neutral z-40 w-max max-w-lg space-y-2 rounded-md p-2 shadow-lg lg:absolute lg:bottom-full ${getTooltipPositionH(item.left)} ${getTooltipPositionV(item.top)}`}
                  >
                    {!!item.name && <h5 className="text-left text-base font-semibold">{item.name}</h5>}
                    {!!item.description && (
                      <div className="text-left text-sm" dangerouslySetInnerHTML={{ __html: item.description }} />
                    )}
                    {item.product && (
                      <div className="mx-auto w-72">
                        <SingleProduct product={item.product} fromBlocks={true} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>

      <div className="mt-4 flex w-full items-center justify-end gap-2">
        <p className="text-base font-medium">Харах</p>
        <input
          type="checkbox"
          checked={showTooltip}
          onChange={() => setShowTooltip(!showTooltip)}
          className="toggle border-primary text-primary checked:text-primary-content checked:bg-[var(--color-primary)]"
        />
      </div>
    </div>
  );
}
