'use client';

export const NavigiationButtons = ({ handlePrev, handleNext }: { handlePrev: () => void; handleNext: () => void }) => (
  <>
    <button
      onClick={handlePrev}
      className="swiper-btn-prev bg-base-200 hover:border-base-content/20 absolute top-[50%] left-1 z-10 flex h-14 w-8 translate-y-[-50%] items-center justify-center rounded-lg hover:border disabled:cursor-not-allowed disabled:opacity-60"
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
      className="swiper-btn-next bg-base-200 hover:border-base-content/20 absolute top-[50%] right-1 z-10 flex h-14 w-8 translate-y-[-50%] items-center justify-center rounded-lg hover:border disabled:cursor-not-allowed disabled:opacity-60"
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
