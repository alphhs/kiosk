import React from 'react';

import css from './index.module.scss';
// import styled from 'styled-components';

export const YoutubeBlock = ({ slug }: { slug?: string }) => {
  let embed = slug;
  if (!embed) return null;
  if (slug && slug.includes('https://www.youtube.com/watch')) embed = slug.replace('/watch?v=', '/embed/');
  if (!embed.includes('youtube')) embed = `https://www.youtube.com/embed/${embed}`;

  return (
    <div className={css.youtube}>
      <iframe src={embed} frameBorder="0" allowFullScreen />
    </div>
  );
};
