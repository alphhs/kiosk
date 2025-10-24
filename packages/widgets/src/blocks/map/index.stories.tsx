import type { Meta, StoryObj } from '@storybook/react';

import { MapBlock } from './index';

const meta: Meta<typeof MapBlock> = {
  component: MapBlock,
  argTypes: {
    sideNavigation: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};
export default meta;

type Story = StoryObj<typeof MapBlock>;

export const Default: Story = {
  render: (props) => <MapBlock {...props} />,
  args: {
    sideNavigation: true,
    markers: [
      {
        id: '1',
        marker: {
          position: {
            lat: 47.916823,
            lng: 106.916165,
          },
        },
        info: {
          image: {
            file_name: '366372789_760168286113466_3178369431927233018_n.jpg',
            width: 720,
            height: 720,
            id: '268782',
          },
          title: 'Title title title',
          description: 'БЗД, Натур худалдааны төв',
          time: 'Цагийн хуваарь: 09:00 - 20:00',
          phone: '88118811',
        },
      },
      {
        id: '2',
        marker: {
          position: {
            lat: 47.913038,
            lng: 106.910873,
          },
        },
        info: {
          title: 'Title title title',
          description: 'БЗД, Натур худалдааны төв',
          time: 'Цагийн хуваарь: 09:00 - 20:00',
          phone: '88118811',
        },
      },
      {
        id: '3',
        marker: {
          position: {
            lat: 47.914039,
            lng: 106.910874,
          },
        },
        info: {
          title: 'Title title title',
          description: 'БЗД, Натур худалдааны төв',
          time: 'Цагийн хуваарь: 10:01 - 21:01',
          phone: '88118812',
        },
      },
      {
        id: '4',
        marker: {
          position: {
            lat: 47.92304,
            lng: 106.910875,
          },
        },
        info: {
          title: 'Title title title',
          description: 'БЗД, Натур худалдааны төв',
          time: 'Цагийн хуваарь: 11:02 - 22:02',
          phone: '88118813',
        },
      },
    ],
  },
};
