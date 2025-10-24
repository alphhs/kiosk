import { getBlockGridClassnames } from '../../utils/tailwind-config';

import { registry } from '../../registry';
import { ColumnWidth } from '../blocks-type';
import { ArticleBlockProps } from './article-block-type';
import { ArticlesQuery } from './articles.generated';

export function DisplayGrid({ gridOptions, articles, template }: DisplayGridProps) {
  const SingleArticle = registry.article!;

  return (
    <div data-component-display="grid" className={`grid ${getBlockGridClassnames(gridOptions)}`}>
      {articles.map(({ node }) => (
        <SingleArticle
          key={node.id}
          id={node.id}
          title={node.title}
          image={node.image}
          preview={node.preview}
          slug={node.slug}
          author={node.author}
          updatedAt={node.updatedAt}
          tagList={node.tagList}
          template={template}
          impressionsCount={node.impressionsCount}
        />
      ))}
    </div>
  );
}

export interface DisplayGridProps {
  columnWidth?: ColumnWidth;
  selector: ArticleBlockProps['selector'];
  ids: ArticleBlockProps['ids'];
  template?: ArticleBlockProps['template'];
  gridOptions: ArticleBlockProps['gridOptions'];
  articles: ArticlesQuery['articles']['edges'];
}
