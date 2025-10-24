import { FC } from 'react';

export interface TextProps {
  content: TextConfig;
  level?: 1 | 2 | 3 | 4 | 5;
  noMargin?: boolean;
  noFontWeight?: boolean;
  sameLineHeight?: boolean;
}

export type TextConfig = {
  text?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  textAlign?: 'left' | 'center' | 'right';
  lineLimit?: number;
};

export const Text: FC<TextProps> = ({ content, level, noFontWeight, sameLineHeight }) => {
  if (level) {
    // const Heading = `h${level}` as 'h1'; can't use header tag because of not properly ordered headings problem
    return (
      <p
        style={{
          margin: 0,
          display: 'block',
          color: content.color,
          fontSize: content.fontSize,
          fontWeight: noFontWeight ? 'inherit' : content.fontWeight || '600',
          textAlign: content.textAlign || 'left',
          lineHeight: sameLineHeight ? '1' : 'inherit',
        }}
      >
        {content.text}
      </p>
    );
  }

  return (
    <div
      style={{
        margin: 0,
        display: 'block',
        color: content.color,
        fontSize: content.fontSize,
        fontWeight: noFontWeight ? 'inherit' : content.fontWeight || 'bold',
        textAlign: content.textAlign || 'left',
        lineHeight: sameLineHeight ? '1' : 'inherit',
      }}
    >
      {content.text}
    </div>
  );
};
