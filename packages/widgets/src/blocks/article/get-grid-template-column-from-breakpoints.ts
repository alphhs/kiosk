import { getGridTemplateColumn } from './get-grid-template-column';

export function getGridTemplateColumnFromBreakpoints(breakpoints?: Record<string, number>): string {
  if (!breakpoints) return '';

  return Object.entries(breakpoints).reduce(
    (acc, [key, value]) => (key ? `${acc} ${getGridTemplateColumn(value, key)}` : acc),
    '',
  );
}

// return Object.entries(breakpoints).reduce((acc, [key, value]) => {
//   if (key) return `${acc} ${getGridTemplateColumn(value, key)}`;
//
//   return acc;
// }, '');
