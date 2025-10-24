export const NavigiationButtons = ({ handlePrev, handleNext }: { handlePrev: () => void; handleNext: () => void }) => (
  <>
    <button
      onClick={handlePrev}
      aria-label="button to previous slide"
      className="swiper-btn-prev bg-base-200 site-primeat:bg-base-100 hover:border-base-content/20 absolute top-[50%] -left-1 z-10 flex h-10 w-8 translate-y-[-50%] items-center justify-center rounded-lg hover:border disabled:cursor-not-allowed disabled:opacity-60 min-[720px]:-left-10 min-[768px]:-left-1 min-[860px]:-left-10 min-[1024px]:-left-1 min-[1140px]:-left-10 min-[1320px]:-left-1 min-[1420px]:-left-10 md:h-20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="site-primeat:text-base-content size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button
      onClick={handleNext}
      aria-label="button to next slide"
      className="swiper-btn-next bg-base-200 site-primeat:bg-base-100 hover:border-base-content/20 absolute top-[50%] -right-1 z-10 flex h-10 w-8 translate-y-[-50%] items-center justify-center rounded-lg hover:border disabled:cursor-not-allowed disabled:opacity-60 min-[720px]:-right-10 min-[768px]:-right-1 min-[860px]:-right-10 min-[1024px]:-right-1 min-[1140px]:-right-10 min-[1320px]:-right-1 min-[1420px]:-right-10 md:h-20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="site-primeat:text-base-content size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </>
);
