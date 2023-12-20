import type { Meta, StoryObj } from '@storybook/react';

import Categories from '.';

const meta: Meta<typeof Categories> = {
  title: 'components/Categories',
  component: Categories,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Categories',
  args: {
    locale: 'en',
  },
};
