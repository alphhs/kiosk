import React from 'react';


import { MediaBlockProps } from '../../blocks/media/media-block-type';
import { NewsesQuery } from '../../blocks/media/newses.generated';

type NewsType = NewsesQuery['newses']['edges'][0]['node'];

interface TemplateProps {
  news: NewsType;
}

const loading = () => <div className="skeleton h-20 w-full" />;

const TemplateDefaultLazy = React.lazy<React.ComponentType<TemplateProps>>(() => import('./template-default'));
const TemplateListLazy = React.lazy<React.ComponentType<TemplateProps>>(() => import('./template-list'));
const TemplatePhotoLazy = React.lazy<React.ComponentType<TemplateProps>>(() => import('./template-photo'));

const TemplateDefault: React.FC<TemplateProps> = (props) => (
  <React.Suspense fallback={loading()}>
    <TemplateDefaultLazy {...props} />
  </React.Suspense>
);

const TemplateList: React.FC<TemplateProps> = (props) => (
  <React.Suspense fallback={loading()}>
    <TemplateListLazy {...props} />
  </React.Suspense>
);

const TemplatePhoto: React.FC<TemplateProps> = (props) => (
  <React.Suspense fallback={loading()}>
    <TemplatePhotoLazy {...props} />
  </React.Suspense>
);

type Templates = 'card' | 'list' | 'photo';

const templateMap: Record<Templates, React.ComponentType<TemplateProps>> = {
  card: TemplateDefault,
  list: TemplateList,
  photo: TemplatePhoto,
};

export const SingleNews = ({ news, template }: { news: NewsType; template: MediaBlockProps['template'] }) => {
  const Comp = templateMap[template || 'card'] || TemplateDefault;

  return <Comp news={news} />;
};
