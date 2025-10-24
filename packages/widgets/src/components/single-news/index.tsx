import React, { lazy, Suspense } from 'react';

import { MediaBlockProps } from '../../blocks/media/media-block-type';
import { NewsesQuery } from '../../blocks/media/newses.generated';

type NewsType = NewsesQuery['newses']['edges'][0]['node'];

interface TemplateProps {
  news: NewsType;
}

const Loading = () => <div className="skeleton h-20 w-full" />;

const TemplateDefault = lazy(() => import('./template-default'));
const TemplateList = lazy(() => import('./template-list'));
const TemplatePhoto = lazy(() => import('./template-photo'));

type Templates = 'card' | 'list' | 'photo';

const templateMap: Record<Templates, React.ComponentType<TemplateProps>> = {
  card: TemplateDefault,
  list: TemplateList,
  photo: TemplatePhoto,
};

export const SingleNews = ({ news, template }: { news: NewsType; template: MediaBlockProps['template'] }) => {
  const Comp = templateMap[template || 'card'] || TemplateDefault;

  return (
    <Suspense fallback={<Loading />}>
      <Comp news={news} />
    </Suspense>
  );
};
