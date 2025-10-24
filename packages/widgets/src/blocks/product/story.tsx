import { FC } from 'react';

import { ProductBlock } from './product-block';
import { ProductBlockProps } from './product-block-type';

export const StoryBlock: FC<ProductBlockProps> = (props) => <ProductBlock {...props} />;
