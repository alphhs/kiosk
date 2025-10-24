import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { HTMLBlock } from './html-block';

test('Page', () => {
  render(<HTMLBlock content="hello world" />);
  expect(screen.getByText('hello world')).toBeDefined();
});
