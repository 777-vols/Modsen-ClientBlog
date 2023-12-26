import type { Meta, StoryObj } from '@storybook/react';

import WhyWeStarted from '.';

const meta: Meta<typeof WhyWeStarted> = {
  title: 'components/WhyWeStarted',
  component: WhyWeStarted,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'WhyWeStarted',
  args: {
    locale: 'en',
  },
};
