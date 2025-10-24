'use client';

export const NavigiationButtons = ({ handlePrev, handleNext }: { handlePrev: () => void; handleNext: () => void }) => (
  <>
    <button
      onClick={handlePrev}
      aria-label="button to previous slide"
      className="swiper-btn-prev bg-base-200 hover:bg-base-content/10 absolute top-[50%] -left-4 z-10 flex size-10 translate-y-[-50%] items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-60 md:-left-6 md:size-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4 md:size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button
      onClick={handleNext}
      aria-label="button to next slide"
      className="swiper-btn-next bg-base-200 hover:bg-base-content/10 absolute top-[50%] -right-4 z-10 flex size-10 translate-y-[-50%] items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-60 md:-right-6 md:size-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4 md:size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </>
);
