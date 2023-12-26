import type { Meta, StoryObj } from '@storybook/react';

import JoinOurTeam from '.';

const meta: Meta<typeof JoinOurTeam> = {
  title: 'components/JoinOurTeam',
  component: JoinOurTeam,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'JoinOurTeam',
  args: {
    locale: 'en',
  },
};
