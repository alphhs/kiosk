import React from 'react';

import css from './index.module.scss';

export const HTMLBlock = ({ content }: HTMLBlockProps) => {
  if (!content || content.length === 0) return <div />;
  return <div data-component="html-block" className={css.html_block} dangerouslySetInnerHTML={{ __html: content }} />;
};

export type HTMLBlockProps = {
  content: string;
};
