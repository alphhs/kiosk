

import type { WidgetsType } from '../widgets-type';
import { ArticleBlock } from './article';
import { BrandBlock } from './brand';
import { BreadcrumbBlock } from './breadcrumb';
import { CodeBlock } from './code';
import { ComboBlock } from './combo';
import { CounterBlock } from './counter';
import { HTMLBlock } from './html';
import { ImageBlock } from './image';
import { MapBlock } from './map';
import { MediaBlock } from './media';
import { NotificationBlock } from './notification';
import { ProductBlock } from './product';
import { ReelsBlock } from './reels';
import { TextBlock } from './text';
import { YoutubeBlock } from './youtube';


export function BlocksFactory(props: WidgetsType) {
  if (props.extraBlocks && props.extraBlocks[props.component]) {
    const ExtraBlock = props.extraBlocks[props.component];
    return <ExtraBlock {...props} />;
  }

  switch (props.component) {
    case 'BrandBlock':
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <BrandBlock {...props} />;
    case 'CounterBlock':
      return <CounterBlock {...props} />;
    case 'YoutubeBlock':
      return <YoutubeBlock {...props} />;
    case 'ProductBlock':
      return <ProductBlock {...props} />;
    case 'ImageBlock':
      return <ImageBlock {...props} />;
    case 'BreadcrumbBlock':
      return <BreadcrumbBlock {...props} />;
    case 'HTMLBlock':
      return <HTMLBlock {...props} />;
    case 'NotificationBlock':
      return <NotificationBlock {...props} />;
    case 'MediaBlock':
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <MediaBlock {...props} />;
    case 'ArticleBlock':
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <ArticleBlock {...props} />;
    case 'TextBlock':
      return <TextBlock {...props} />;
    case 'ComboBlock':
      return <ComboBlock {...props} />;
    case 'ReelsBlock':
      return <ReelsBlock {...props} />;
    case 'MapBlock':
      return <MapBlock {...props} />;
    case 'CodeBlock':
      return <CodeBlock {...props} />;
    default:
      return <div data-component="no-block" />;
  }
}
