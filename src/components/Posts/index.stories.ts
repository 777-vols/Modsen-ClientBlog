import type { Meta, StoryObj } from '@storybook/react';

import Posts from '.';

const meta: Meta<typeof Posts> = {
  title: 'components/Posts',
  component: Posts,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Posts',
  args: {
    locale: 'en',
  },
};
