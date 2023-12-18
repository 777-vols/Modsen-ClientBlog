import type { Meta, StoryObj } from '@storybook/react';

import AboutUs from '.';

const meta: Meta<typeof AboutUs> = {
  title: 'components/AboutUs',
  component: AboutUs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'AboutUs',
  args: {
    locale: 'en',
  },
};
