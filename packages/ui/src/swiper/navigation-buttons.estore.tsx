'use client';
export const NavigiationButtons = ({ handlePrev, handleNext }: { handlePrev: () => void; handleNext: () => void }) => (
  <>
    <button
      onClick={handlePrev}
      aria-label="button to previous slide"
      className="swiper-btn-prev bg-base-200 hover:border-base-content/20 absolute top-[50%] left-1 z-10 flex h-8 w-8 translate-y-[-50%] items-center justify-center rounded-full hover:border disabled:cursor-not-allowed disabled:opacity-60 md:h-12 md:w-12 md:translate-x-[-50%] lg:left-0"
    >
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
        <path
          d="M12.5 14.9995L7.5 9.99951L12.5 4.99951"
          stroke="#171717"
          strokeWidth="2.08"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <button
      onClick={handleNext}
      aria-label="button to next slide"
      className="swiper-btn-next bg-base-200 hover:border-base-content/20 absolute top-[50%] right-1 z-10 flex h-8 w-8 translate-y-[-50%] items-center justify-center rounded-full hover:border disabled:cursor-not-allowed disabled:opacity-60 md:h-12 md:w-12 md:translate-x-[50%] lg:right-0"
    >
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
        <path
          d="M7.5 14.9995L12.5 9.99951L7.5 4.99951"
          stroke="#171717"
          strokeWidth="2.08"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </>
);
