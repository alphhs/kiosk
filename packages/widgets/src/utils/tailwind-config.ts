// Updated replacement for @cody-mn/tailwind-config utilities
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
  if (!gridOptions) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';

  const columnGap = getColumnGap(gridOptions?.columnGap);
  const rowGap = getRowGap(gridOptions?.rowGap);

  let column = getGridTemplateColumnFromBreakpoints(gridOptions?.breakpoints);
  if (gridOptions?.type === 'width') {
    column = `grid-cols-[repeat(auto-fill,_minmax(${gridOptions?.colWidth}px,_1fr))]`;
  }

  // Provide defaults if no specific options are given
  if (!column && !columnGap && !rowGap) {
    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
  }

  return `${columnGap} ${rowGap} ${column}`.trim();
}
