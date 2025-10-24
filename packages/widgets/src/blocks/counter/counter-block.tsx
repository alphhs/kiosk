'use client';

import { addLeadingZeros, CountDown } from '@kiosk/ui';
import cn from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

import { TextConfig } from '../../components';

export type CounterBlockProps = {
  expireAt: Date;
  showLabel?: 'top' | 'bottom';
  showLink?: 'top' | 'bottom';
  labelConfig: TextConfig;
  expireAtConfig: TextConfig;
  borderColor: string;
  backgroundColor: string;
  borderRadius: number;
};

const CountDownComp = ({
  days,
  hours,
  min,
  sec,
  expireAtConfig,
  showLabel,
  labelConfig,
  borderColor,
  borderRadius,
  backgroundColor,
}: {
  days: number;
  hours: number;
  min: number;
  sec: number;
  expireAtConfig?: TextConfig;
  showLabel?: 'top' | 'bottom';
  labelConfig: TextConfig;
  borderColor: string;
  borderRadius: number;
  backgroundColor: string;
}) => (
  <div className="grid auto-cols-max grid-flow-col items-center justify-center gap-3 p-2 text-center">
    <div
      className={cn('flex items-center', showLabel === 'bottom' ? 'flex-col-reverse' : 'flex-col')}
      style={{
        backgroundColor: backgroundColor || 'transparent',
        border: borderColor ? `1px solid ${borderColor}` : 'unset',
        borderRadius: borderRadius || 0,
      }}
    >
      <span className="countdown">
        <span
          style={
            {
              '--value': `${addLeadingZeros(days)}`,
              margin: 0,
              color: expireAtConfig?.color || '#000',
              fontSize: expireAtConfig?.fontSize || '14px',
              fontWeight: expireAtConfig?.fontWeight || 'bold',
              textAlign: expireAtConfig?.textAlign || 'left',
              lineLimit: expireAtConfig?.lineLimit || '1',
              lineHeight: '1',
            } as React.CSSProperties
          }
        />
      </span>
      {showLabel && (
        <span
          style={{
            margin: 0,
            color: labelConfig?.color || '#000',
            fontSize: labelConfig?.fontSize || '14px',
            fontWeight: labelConfig?.fontWeight || 'regular',
            textAlign: labelConfig?.textAlign || 'left',
            lineHeight: '1',
          }}
        >
          өдөр
        </span>
      )}
    </div>
    <div
      className={cn('flex items-center', showLabel === 'bottom' ? 'flex-col-reverse' : 'flex-col')}
      style={{
        backgroundColor: backgroundColor || 'transparent',
        border: borderColor ? `1px solid ${borderColor}` : 'unset',
        borderRadius: borderRadius || 0,
      }}
    >
      <span className="countdown">
        <span
          style={
            {
              '--value': `${addLeadingZeros(hours)}`,
              margin: 0,
              color: expireAtConfig?.color || '#000',
              fontSize: expireAtConfig?.fontSize || '14px',
              fontWeight: expireAtConfig?.fontWeight || 'bold',
              textAlign: expireAtConfig?.textAlign || 'left',
              lineLimit: expireAtConfig?.lineLimit || '1',
              lineHeight: '1',
            } as React.CSSProperties
          }
        />
      </span>
      {showLabel && (
        <span
          className="countdown"
          style={{
            margin: 0,
            color: labelConfig?.color || '#000',
            fontSize: labelConfig?.fontSize || '14px',
            fontWeight: labelConfig?.fontWeight || 'regular',
            textAlign: labelConfig?.textAlign || 'left',
          }}
        >
          цаг
        </span>
      )}
    </div>
    <div
      className={cn('flex items-center', showLabel === 'bottom' ? 'flex-col-reverse' : 'flex-col')}
      style={{
        backgroundColor: backgroundColor || 'transparent',
        border: borderColor ? `1px solid ${borderColor}` : 'unset',
        borderRadius: borderRadius || 0,
      }}
    >
      <span className="countdown">
        <span
          style={
            {
              '--value': `${addLeadingZeros(min)}`,
              margin: 0,
              color: expireAtConfig?.color || '#000',
              fontSize: expireAtConfig?.fontSize || '14px',
              fontWeight: expireAtConfig?.fontWeight || 'bold',
              textAlign: expireAtConfig?.textAlign || 'left',
              lineLimit: expireAtConfig?.lineLimit || '1',
              lineHeight: '1',
            } as React.CSSProperties
          }
        />
      </span>
      {showLabel && (
        <span
          className="countdown"
          style={{
            margin: 0,
            color: labelConfig?.color || '#000',
            fontSize: labelConfig?.fontSize || '14px',
            fontWeight: labelConfig?.fontWeight || 'regular',
            textAlign: labelConfig?.textAlign || 'left',
          }}
        >
          мин
        </span>
      )}
    </div>
    <div
      className={cn('flex items-center', showLabel === 'bottom' ? 'flex-col-reverse' : 'flex-col')}
      style={{
        backgroundColor: backgroundColor || 'transparent',
        border: borderColor ? `1px solid ${borderColor}` : 'unset',
        borderRadius: borderRadius || 0,
      }}
    >
      <span className="countdown">
        <span
          style={
            {
              '--value': `${addLeadingZeros(sec)}`,
              margin: 0,
              color: expireAtConfig?.color || '#000',
              fontSize: expireAtConfig?.fontSize || '14px',
              fontWeight: expireAtConfig?.fontWeight || 'bold',
              textAlign: expireAtConfig?.textAlign || 'left',
              lineLimit: expireAtConfig?.lineLimit || '1',
              lineHeight: '1',
            } as React.CSSProperties
          }
        />
      </span>
      {showLabel && (
        <span
          className="countdown"
          style={{
            margin: 0,
            color: labelConfig?.color || '#000',
            fontSize: labelConfig?.fontSize || '14px',
            fontWeight: labelConfig?.fontWeight || 'regular',
            textAlign: labelConfig?.textAlign || 'left',
          }}
        >
          сек
        </span>
      )}
    </div>
  </div>
);

export const CounterBlock = ({
  expireAt,
  expireAtConfig,
  showLabel,
  labelConfig,
  borderColor,
  backgroundColor,
  borderRadius,
}: CounterBlockProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const Component = useCallback(
    ({ days, hours, min, sec }: { days: number; hours: number; min: number; sec: number }) => (
      <CountDownComp
        days={days}
        hours={hours}
        min={min}
        sec={sec}
        showLabel={showLabel}
        labelConfig={labelConfig}
        borderColor={borderColor}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        expireAtConfig={expireAtConfig}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (!isClient) return null;

  return <CountDown date={expireAt} component={Component} />;
};
