import { CSSProperties } from 'react';

export type WidgetsType = {
  component: string;
  items?: WidgetsType[];
  data?: DataType;
} & AnyData;

export type JSON = Record<string, AnyData>;

export interface DataType extends CSSProperties {
  text?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyData = any & {
  componentDescription?: string;
};
