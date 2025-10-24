import { TitleBar } from '../../components/title-bar';
import type { SortDirection } from '../../graphql';
import { registry } from '../../registry';
import { DisplayGrid } from './display-grid';
import { DisplaySwiper } from './display-swiper';
import type { MediaBlockProps } from './media-block-type';
import { NewsesDocument, NewsesQuery, NewsesQueryVariables } from './newses.generated';

export async function MediaBlock({
  template,
  title,
  selector,
  ids,
  sort,
  tags,
  size,
  display,
  gridOptions,
  swiperOptions,
}: MediaBlockProps) {
  const variables = buildQuery({ selector, ids, size, sort, tags });
  if (registry.apolloClient === undefined) throw new Error('Apollo client is not configured');

  const { data, error } = await registry
    .apolloClient()
    .query<NewsesQuery, NewsesQueryVariables>({ query: NewsesDocument, variables });

  if (error || !data?.newses?.edges)
    return <div className="dark:bg-base-200 bg-gray-200 py-8 text-center">{error?.message || 'No data found'}</div>;

  switch (display) {
    case 'grid':
      return (
        <div data-component="media-block display-grid">
          <TitleBar title={title} />
          <DisplayGrid items={data.newses.edges} gridOptions={gridOptions} template={template} />
        </div>
      );
    case 'swiper':
      return (
        <div data-component="media-block display-swiper">
          <TitleBar title={title} />
          <DisplaySwiper items={data.newses.edges} swiperOptions={swiperOptions} template={template} />
        </div>
      );
    default:
      return <div className="grid h-96 place-content-center rounded bg-gray-200">MediaBlock: display is not selected</div>;
  }
}

function buildQuery({
  selector,
  ids,
  sort,
  size,
  tags,
}: {
  selector: MediaBlockProps['selector'];
  ids: MediaBlockProps['ids'];
  tags?: MediaBlockProps['tags'];
  sort?: SortDirection;
  size?: number;
}): NewsesQueryVariables {
  if (selector === 'ids' && ids)
    return {
      first: ids.length,
      sort: { direction: sort, field: 'updatedAt' },
      filter: { active: { eq: true }, id: { in: ids } },
    };
  if (selector === 'tags' && tags)
    return {
      first: size || 20,
      sort: { direction: sort, field: 'updatedAt' },
      filter: { active: { eq: true }, tags: { name: { in: tags } } },
    };
  return { first: size || 20, sort: { direction: sort, field: 'updatedAt' }, filter: { active: { eq: true } } };
}
