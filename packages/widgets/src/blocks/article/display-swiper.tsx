import { SwiperWithRenderedItems } from '@kiosk/ui';
import type { SwiperProps, SwiperSlideProps } from 'swiper/react';

import { registry } from '../../registry';
import { ArticleBlockProps } from './article-block-type';
import { ArticlesQuery } from './articles.generated';

export function DisplaySwiper({ articles, swiperProps, swiperSlideProps, template }: DisplaySwiperProps) {
  const SingleArticle = registry.article!;

  const renderedItems = articles.map(({ node }) => (
    <SingleArticle
      key={node.id}
      id={node.id}
      title={node.title}
      image={node.image}
      preview={node.preview}
      slug={node.slug}
      author={node.author}
      tagList={node.tagList}
      template={template}
      updatedAt={node.updatedAt}
    />
  ));

  return <SwiperWithRenderedItems renderedItems={renderedItems} swiperProps={swiperProps} swiperSlideProps={swiperSlideProps} />;
}

export interface DisplaySwiperProps {
  swiperProps?: SwiperProps;
  swiperSlideProps?: SwiperSlideProps;
  template?: ArticleBlockProps['template'];
  articles: ArticlesQuery['articles']['edges'];
}
