import { getSwiperProps, SwiperOptions, SwiperWithRenderedItems } from '@kiosk/ui/swiper';

import { registry } from '../../registry';
import { MediaBlockProps } from './media-block-type';
import { NewsesQuery } from './newses.generated';

export function DisplaySwiper({ items, template = 'card', swiperOptions }: DisplaySwiperProps) {
  const SingleNews = registry.news!;
  const swiperProps = getSwiperProps(swiperOptions);
  const renderedItems = items.map(({ node }) => <SingleNews key={node.id} template={template} news={node} />);

  return <SwiperWithRenderedItems renderedItems={renderedItems} swiperProps={swiperProps} />;
}

export interface DisplaySwiperProps {
  swiperOptions?: SwiperOptions;
  template: MediaBlockProps['template'];
  items: NewsesQuery['newses']['edges'];
}
