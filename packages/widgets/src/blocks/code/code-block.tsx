import React from 'react';

export const CodeBlock = ({ content }: HTMLBlockProps) => {
  if (!content || content.length === 0) return <div />;
  return <div data-component="code-block" dangerouslySetInnerHTML={{ __html: content }} />;
};

export type HTMLBlockProps = {
  content: string;
};
