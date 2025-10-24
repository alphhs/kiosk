import Link from '../../components/Link';

import { WidgetsType } from '../../widgets-type';

export interface TextBlockProps extends WidgetsType {
  data: {
    text: string;
  };
  link?: string;
}

export function TextBlock({ data, link }: TextBlockProps) {
  if (!data) return null;
  const { text, ...style } = data;

  return (
    <p data-component="text-block" style={style}>
      {link ? <Link href={link}>{text}</Link> : text}
    </p>
  );
}
