'use client';

import { Lottie } from '@kiosk/ui/lottie';
import { useState } from 'react';

import css from './index.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LottieBlock = ({ data }: { data?: any }) => {
  const [width, setWidth] = useState<number>(0);
  if (!data) return null;

  return (
    <div
      className={css.lottie}
      ref={(node) => {
        if (node && width !== node.offsetWidth) {
          setWidth(node.offsetWidth);
        }
      }}
    >
      <div className={css.inner} style={{ width: data.w, height: data.h }}>
        <Lottie options={{ animationData: data }} />
      </div>
    </div>
  );
};
