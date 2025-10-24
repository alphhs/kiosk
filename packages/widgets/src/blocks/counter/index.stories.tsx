import type { Meta, StoryObj } from '@storybook/react';

import { CounterBlock } from './counter-block';

const meta: Meta<typeof CounterBlock> = {
  component: CounterBlock,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CounterBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <CounterBlock {...props} />,
  name: 'CounterBlock',
  args: {
    expireAt: new Date('2025-10-10T00:00:00.000Z'),
  },
};
