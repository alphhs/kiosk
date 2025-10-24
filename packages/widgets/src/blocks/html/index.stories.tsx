import type { Meta, StoryObj } from '@storybook/react';

import { HTMLBlock } from './html-block';

const meta: Meta<typeof HTMLBlock> = {
  component: HTMLBlock,
  argTypes: {
    content: { control: { type: 'text' } },
  },
};

export default meta;

type Story = StoryObj<typeof HTMLBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <HTMLBlock {...props} />,
  name: 'HTMLBlock',
  args: {
    content: 'Hello',
  },
};
