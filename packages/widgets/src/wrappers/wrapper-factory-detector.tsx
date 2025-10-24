import type { FC } from 'react';

import { BlocksFactory } from '../blocks/blocks-factory';
import { WidgetsType } from '../widgets-type';

export function WrapperFactoryDetector({ wrappersFactory: WrappersFactory, component = '', ...rest }: FactoryDetectorProps) {
  if (component.match(/Wrapper$/g)) return <WrappersFactory {...rest} component={component} />;

  return <BlocksFactory component={component} {...rest} />;
}

export interface FactoryDetectorProps extends WidgetsType {
  wrappersFactory: FC<WidgetsType>;
  component: string;
}
