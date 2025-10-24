import Link from '../Link';

import { moreType } from './Title-bar';

export const MoreLink = ({ more }: { more: moreType }) => {
  if (!more.label) return null;

  return (
    <Link
      href={more.url || '/'}
      className="flex flex-nowrap items-center gap-2 text-xs lg:text-sm"
      style={{
        color: more.label.color,
        fontWeight: more.label.fontWeight || 'normal',
        textAlign: more.label.textAlign || 'center',
      }}
    >
      {more.label.text}
      <svg viewBox="0 0 20 20" fill="none" className="size-4 lg:size-5">
        <path d="M4.16699 10H15.8337" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M10 4.16667L15.8333 10L10 15.8333"
          stroke="currentColor"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};
