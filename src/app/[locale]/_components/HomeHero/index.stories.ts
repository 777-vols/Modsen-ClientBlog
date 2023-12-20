import type { Meta, StoryObj } from '@storybook/react';

import HomeHero from '.';

const meta: Meta<typeof HomeHero> = {
  title: 'components/HomeHero',
  component: HomeHero,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'HomeHero',
  args: {
    locale: 'en',
  },
};
