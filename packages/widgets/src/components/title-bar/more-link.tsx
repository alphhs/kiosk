import Link from '../Link';

import { moreType } from './Title-bar';

export const MoreLink = ({ more }: { more: moreType }) => {
  if (!more.label) return null;

  return (
    <Link
      href={more.url || '/'}
      className="underline"
      style={{
        color: more.label.color,
        fontSize: more.label.fontSize || '14px',
        fontWeight: more.label.fontWeight || 'normal',
        textAlign: more.label.textAlign || 'center',
      }}
    >
      {more.label.text}
    </Link>
  );
};
