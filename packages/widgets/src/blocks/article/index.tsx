import { getSwiperProps } from '@kiosk/ui';

import type { SortDirection } from '../../graphql';
import { registry } from '../../registry';
import type { ArticleBlockProps } from './article-block-type';
import { ArticlesDocument, ArticlesQuery, ArticlesQueryVariables } from './articles.generated';
import { DisplayGrid } from './display-grid';
import { DisplaySwiper } from './display-swiper';

export async function ArticleBlock({
  display,
  columnWidth,
  swiperOptions,
  selector,
  ids,
  sort,
  tags,
  size,
  gridOptions,
  template,
}: ArticleBlockProps) {
  const variables = getVariables({ selector, ids, size, sort, tags });
  if (registry.apolloClient === undefined) throw new Error('Apollo client is not configured');

  const { data, error } = await registry
    .apolloClient()
    .query<ArticlesQuery, ArticlesQueryVariables>({ query: ArticlesDocument, variables, fetchPolicy: 'cache-first' });

  if (error || !data?.articles?.edges)
    return <div className="dark:bg-base-200 bg-gray-200 py-8 text-center">{error?.message || 'No data found'}</div>;

  switch (display) {
    case 'grid':
      return (
        <div data-component="article-block display-grid">
          <DisplayGrid
            articles={data.articles.edges}
            selector={selector}
            ids={ids}
            columnWidth={columnWidth}
            gridOptions={gridOptions}
            template={template}
          />
        </div>
      );
    case 'swiper':
      return (
        <div data-component="article-block display-swiper">
          <DisplaySwiper articles={data.articles.edges} swiperProps={getSwiperProps(swiperOptions)} template={template} />
        </div>
      );
    default:
      return <div className="grid h-96 place-content-center rounded bg-gray-200">ArticleBlock: display is not selected</div>;
  }
}

function getVariables({
  selector,
  ids,
  sort,
  size,
  tags,
}: {
  selector: ArticleBlockProps['selector'];
  ids: ArticleBlockProps['ids'];
  tags?: ArticleBlockProps['tags'];
  sort?: SortDirection;
  size?: number;
}): ArticlesQueryVariables {
  if (selector === 'ids' && ids)
    return {
      first: ids.length,
      sort: { direction: sort, field: 'updatedAt' },
      filter: { isPublished: { eq: true }, id: { in: ids } },
    };
  if (selector === 'tags' && tags)
    return {
      first: size || 20,
      sort: { direction: sort, field: 'updatedAt' },
      filter: { isPublished: { eq: true }, tags: { name: { in: tags } } },
    };
  return { first: size || 20, sort: { direction: sort, field: 'updatedAt' }, filter: { isPublished: { eq: true } } };
}
