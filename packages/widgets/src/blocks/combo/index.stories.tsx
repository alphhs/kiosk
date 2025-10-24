import type { Meta, StoryObj } from '@storybook/react';

import { ComboBlock } from './combo-block';

const meta: Meta<typeof ComboBlock> = {
  component: ComboBlock,
};

export default meta;

type Story = StoryObj<typeof ComboBlock>;

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <ComboBlock {...props} />,
  name: 'ComboBlock',
  args: {
    component: 'ComboBlock',
    id: '57e638a08e535c8318d0c65c4c4eddb3467b1966',
    image: {
      width: 1504,
      height: 1003,
      id: '322483',
      file_name: 'BlackWidow_V3_Mini_Hyperspeed_Phantom_Pudding_Edition__2021__Studio_Shoot6.jpg',
    },
    type: 'on_image',
    items: [
      {
        left: '5',
        top: '46',
        sku: 'HOCOHEADPHONE-W58-ANC',
      },
      {
        left: '65',
        top: '15',
        sku: 'LS-27BM500EIXCI',
      },
      {
        left: '46',
        top: '52',
        sku: 'RAPOOKEYBOARD-K30',
      },
      {
        left: '85',
        top: '66',
        sku: 'RAPOOMOUSE-VT950C',
      },
      {
        left: '50',
        top: '77',
        name: 'Өндөр хатуулагтай ширээ',
        description: 'Урт: 120см\nӨргөн: 50см\nӨндөр: 60см',
      },
    ],
  },
};
