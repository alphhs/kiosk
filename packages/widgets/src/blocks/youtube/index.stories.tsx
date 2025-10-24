import type { Meta, StoryObj } from '@storybook/react';

import { YoutubeBlock } from './youtube-block';

const meta: Meta<typeof YoutubeBlock> = {
  component: YoutubeBlock,
  argTypes: {
    slug: { control: { type: 'text' } },
  },
};

export default meta;

type Story = StoryObj<typeof YoutubeBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <YoutubeBlock {...props} />,
  name: 'YoutubeBlock',
  args: {
    slug: 'https://www.youtube.com/watch?v=XN31mYlv5_Y',
  },
};
