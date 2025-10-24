import type { Meta, StoryObj } from '@storybook/react';

import { ReelsBlock } from './reels-block';

const meta: Meta<typeof ReelsBlock> = {
  component: ReelsBlock,
  argTypes: {
    social: {
      options: ['facebook', 'instagram'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReelsBlock>;

export const Facebook: Story = {
  render: (props) => <ReelsBlock {...props} />,
  name: 'Facebook',
  args: {
    social: 'facebook',
    gap: 16,
    initialPosition: 'start',
    items: [
      {
        reelId: '456408414182453',
        skus: 'diskont-70295712',
      },
      {
        reelId: '564202779754375',
        skus: 'diskont-70295712',
      },
      {
        reelId: '1947568635740208',
        skus: 'diskont-70295712',
      },
      {
        reelId: '844045577865221',
        skus: 'diskont-70295712',
      },
      {
        reelId: '404977069347407',
        skus: 'diskont-70295712',
      },
    ],
  },
};

export const Instagram: Story = {
  render: (props) => <ReelsBlock {...props} />,
  name: 'Instagram',
  args: {
    social: 'instagram',
    gap: 16,
    initialPosition: 'start',
    items: [
      {
        reelId: 'DDWT5WIsrT2',
        skus: 'diskont-70295712',
      },
      {
        reelId: 'DCrA7L6hqRb',
        skus: 'diskont-70295712',
      },
      {
        reelId: 'C7ECndhyMNy',
        skus: 'diskont-70295712',
      },
      {
        reelId: 'DAXfzoDMBiM',
        skus: 'diskont-70295712',
      },
      {
        reelId: 'DDWT5WIsrT2',
        skus: 'diskont-70295712',
      },
      {
        reelId: 'DCjW8_pyKzU',
        skus: 'diskont-70295712',
      },
    ],
  },
};

export const WithoutSku: Story = {
  render: (props) => <ReelsBlock {...props} />,
  name: 'Without sku',
  args: {
    social: 'facebook',
    gap: 16,
    initialPosition: 'start',
    items: [
      {
        reelId: '456408414182453',
        skus: '',
      },
      {
        reelId: '564202779754375',
        skus: '',
      },
      {
        reelId: '1947568635740208',
        skus: '',
      },
      {
        reelId: '844045577865221',
        skus: '',
      },
      {
        reelId: '404977069347407',
        skus: '',
      },
    ],
  },
};
