import type { Meta, StoryObj } from '@storybook/react';

import { NotificationBlock } from './notification-block';

const meta: Meta<typeof NotificationBlock> = {
  component: NotificationBlock,
  argTypes: {
    url: { control: { type: 'text' } },
  },
};

export default meta;

type Story = StoryObj<typeof NotificationBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <NotificationBlock {...props} />,
  name: 'NotificationBlock',
  args: {
    duration: 10000,
    message: { text: 'Hello' },
    image: {
      width: 724,
      height: 483,
      id: '44681',
      file_name: 'Next-Woah-skin-care-and-Boohoo-Beauty-launches-wise-in-rising-online-beauty-boom-says-GlobalData.jpg',
    },
  },
};
