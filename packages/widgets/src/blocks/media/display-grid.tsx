import { getBlockGridClassnames } from '../../utils/tailwind-config';

import { registry } from '../../registry';
import { MediaBlockProps } from './media-block-type';
import { NewsesQuery } from './newses.generated';

export function DisplayGrid({ gridOptions, template = 'card', items }: DisplayGridProps) {
  const SingleNews = registry.news!;

  return (
    <div data-component-display="grid" className={`grid ${getBlockGridClassnames(gridOptions)}`}>
      {items.map(({ node }) => (
        <SingleNews key={node.id} news={node} template={template} />
      ))}
    </div>
  );
}

export interface DisplayGridProps {
  items: NewsesQuery['newses']['edges'];
  template: MediaBlockProps['template'];
  gridOptions: MediaBlockProps['gridOptions'];
}
