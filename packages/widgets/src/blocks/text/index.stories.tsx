import type { Meta, StoryObj } from '@storybook/react';

import { TextBlock } from './text-block';

const meta: Meta<typeof TextBlock> = {
  component: TextBlock,
  argTypes: {
    data: {
      text: { control: { type: 'text' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <TextBlock {...props} />,
  name: 'TextBlock',
  args: {
    data: {
      text: 'Hello',
    },
    link: '/test',
  },
};
