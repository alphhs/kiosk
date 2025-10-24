'use client';

export const NavigiationButtons = ({ handlePrev, handleNext }: { handlePrev: () => void; handleNext: () => void }) => (
  <>
    <button
      onClick={handlePrev}
      aria-label="button to previous slide"
      className="swiper-btn-prev bg-base-200 hover:border-base-content/20 hover:border-base-content/10 3xl:-left-6 3xl:size-12 absolute top-[50%] left-1 z-10 flex size-10 translate-y-[-50%] items-center justify-center rounded-full border border-transparent disabled:cursor-not-allowed disabled:opacity-60"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
        <path
          fillRule="evenodd"
          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <button
      onClick={handleNext}
      aria-label="button to next slide"
      className="swiper-btn-next bg-base-200 hover:border-base-content/20 hover:border-base-content/10 3xl:-right-6 3xl:size-12 absolute top-[50%] right-1 z-10 flex size-10 translate-y-[-50%] items-center justify-center rounded-full border border-transparent disabled:cursor-not-allowed disabled:opacity-60"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
        <path
          fillRule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </>
);
