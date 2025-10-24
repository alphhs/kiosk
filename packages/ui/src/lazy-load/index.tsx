'use client';
import { FC, ReactNode } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';

export type IsLazyProps = {
  height?: number;
  name: string;
  idx: number;
  children: ReactNode;
  placeholder?: ReactNode;
};

export const IsLazy: FC<IsLazyProps> = ({ children, placeholder, height = 250, name, idx }) => {
  if (['TitleBlock'].includes(name) || idx < 5) return children;

  return (
    <LazyLoad height={height} triggerOnce key={idx} placeholder={placeholder}>
      {children}
    </LazyLoad>
  );
};

export type LazyLoadProps = {
  children: ReactNode;
  placeholder?: ReactNode;
  height?: number;
} & IntersectionOptions;

export const LazyLoad = ({ children, height, placeholder, threshold = 0, ...options }: LazyLoadProps) => {
  const { ref, inView } = useInView({ threshold, ...options });

  return (
    <div ref={ref} style={inView ? undefined : { height }}>
      {inView ? children : placeholder}
    </div>
  );
};
