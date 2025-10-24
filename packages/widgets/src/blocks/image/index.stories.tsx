import type { Meta, StoryObj } from '@storybook/react';

import { ImageBlock } from './image-block';

const meta: Meta<typeof ImageBlock> = {
  component: ImageBlock,
  argTypes: {
    backgroundColor: {},
  },
};

export default meta;

type Story = StoryObj<typeof ImageBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <ImageBlock {...props} />,
  name: 'ImageBlock',
  args: {
    display: 'grid',
    option: 'image_only',
    items: [
      {
        img: {
          width: 724,
          height: 483,
          id: '44681',
          file_name: 'Next-Woah-skin-care-and-Boohoo-Beauty-launches-wise-in-rising-online-beauty-boom-says-GlobalData.jpg',
        },
      },
    ],
  },
};
