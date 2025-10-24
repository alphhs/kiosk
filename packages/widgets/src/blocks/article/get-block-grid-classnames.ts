import { getColumnGap } from './get-column-gap';
import { getGridTemplateColumnFromBreakpoints } from './get-grid-template-column-from-breakpoints';
import { getRowGap } from './get-row-gap';

export function getBlockGridClassnames(gridOptions?: {
  columnGap?: number;
  rowGap?: number;
  colWidth?: number;
  type?: 'width' | 'breakpoint';
  breakpoints?: { xl?: number; lg?: number; md?: number; sm?: number; xs?: number };
}): string {
  if (!gridOptions) return '';

  const columnGap = getColumnGap(gridOptions?.columnGap);
  const rowGap = getRowGap(gridOptions?.rowGap);

  let column = getGridTemplateColumnFromBreakpoints(gridOptions?.breakpoints);
  if (gridOptions?.type === 'width') {
    column = `grid-cols-[repeat(auto-fill,_minmax(${gridOptions?.colWidth}px,_1fr))]`;
  }

  return `${columnGap} ${rowGap} ${column}`;
}
