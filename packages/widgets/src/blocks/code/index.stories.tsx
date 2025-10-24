import type { Meta, StoryObj } from '@storybook/react';

import { CodeBlock } from './code-block';

const meta: Meta<typeof CodeBlock> = {
  component: CodeBlock,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CodeBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <CodeBlock {...props} />,
  name: 'CodeBLock',
  args: {},
};
