import type { Meta, StoryObj } from '@storybook/react';

import { StoryBlock } from './story';

const meta: Meta<typeof StoryBlock> = {
  component: StoryBlock,
  argTypes: {
    display: {
      control: 'inline-radio',
      options: ['swiper', 'grid'],
      defaultValue: 'swiper',
    },
  },
};

export default meta;

type Story = StoryObj<typeof StoryBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <StoryBlock {...props} />,
  name: 'ProductBlock',
  args: {
    display: 'swiper',
    swiperOptions: {
      perView: 4,
    },
    gridOptions: {
      breakpoints: {
        lg: 5,
        md: 4,
        xs: 2,
      },
      columnGap: 4,
      rowGap: 4,
    },
  },
};
