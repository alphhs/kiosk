import type { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbBlock } from './breadcrumb-block';

const meta: Meta<typeof BreadcrumbBlock> = {
  component: BreadcrumbBlock,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BreadcrumbBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <BreadcrumbBlock
      routes={[
        { breadcrumbName: 'h', path: '/' },
        { breadcrumbName: 'h', path: '/' },
        { breadcrumbName: 'h', path: '/' },
        { breadcrumbName: 'h', path: '/' },
      ]}
    />
  ),
  name: 'BreadcrumbBlock',
  args: {},
};
