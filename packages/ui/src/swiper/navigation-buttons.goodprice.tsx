'use client';

import React from 'react';
import { usePathname } from '@cody-mn/lingui-config/navigation';

export const NavigiationButtons = ({ handlePrev, handleNext }: { handlePrev: () => void; handleNext: () => void }) => {
  const pathname = usePathname();

  if (pathname.startsWith('/s'))
    return (
      <>
        <button
          onClick={handlePrev}
          aria-label="button to previous slide"
          className="swiper-btn-prev bg-base-100 border-base-content/10 absolute top-[50%] -left-1 z-10 flex h-12 w-12 translate-y-[-50%] items-center justify-center rounded-full border hover:border disabled:cursor-not-allowed disabled:opacity-60 min-[720px]:-left-10 min-[768px]:-left-1 min-[860px]:-left-10 min-[1024px]:-left-1 min-[1140px]:-left-10 min-[1320px]:-left-1 min-[1420px]:-left-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          aria-label="button to next slide"
          className="swiper-btn-next bg-base-100 border-base-content/10 absolute top-[50%] -right-1 z-10 flex h-12 w-12 translate-y-[-50%] items-center justify-center rounded-full border hover:border disabled:cursor-not-allowed disabled:opacity-60 min-[720px]:-right-10 min-[768px]:-right-1 min-[860px]:-right-10 min-[1024px]:-right-1 min-[1140px]:-right-10 min-[1320px]:-right-1 min-[1420px]:-right-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </>
    );

  return (
    <div className="absolute -top-10 right-0 z-10 flex">
      <button
        aria-label="button to previous slide"
        className="flex h-8 w-8 items-center justify-center rounded"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button aria-label="button to next slide" className="flex h-8 w-8 items-center justify-center rounded" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>{' '}
      </button>
    </div>
  );
};
