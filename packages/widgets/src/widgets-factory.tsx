// import { BlocksFactory } from './blocks/blocks-factory';
import { BlocksFactory } from './blocks';
import type { WidgetsType } from './widgets-type';
import { WrappersFactory } from './wrappers/wrappers-factory';

export function WidgetsFactory({ component = '', ...rest }: WidgetsType) {
  if (component.match(/Wrapper$/g)) return <WrappersFactory component={component} {...rest} />;

  return <BlocksFactory component={component} {...rest} />;
}
