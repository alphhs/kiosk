'use client';

export const NavigiationButtons = ({ handlePrev, handleNext }: { handlePrev: () => void; handleNext: () => void }) => (
  <>
    <button
      onClick={handlePrev}
      aria-label="button to previous slide"
      className="swiper-btn-prev bg-base-200 hover:border-base-content/20 absolute top-[50%] -left-3 z-10 flex size-8 translate-y-[-50%] items-center justify-center rounded-full hover:border disabled:cursor-not-allowed disabled:opacity-60 md:-left-4 lg:-left-6 lg:size-12"
    >
      <svg className="size-5" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 15.5L7.5 10.5L12.5 5.5" stroke="#171717" strokeWidth="2.08" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    <button
      onClick={handleNext}
      aria-label="button to next slide"
      className="swiper-btn-next bg-base-200 hover:border-base-content/20 absolute top-[50%] -right-3 z-10 flex size-8 translate-y-[-50%] items-center justify-center rounded-full hover:border disabled:cursor-not-allowed disabled:opacity-60 md:-right-4 lg:-right-6 lg:size-12"
    >
      <svg className="size-5" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 15.5L12.5 10.5L7.5 5.5" stroke="#171717" strokeWidth="2.08" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </>
);
