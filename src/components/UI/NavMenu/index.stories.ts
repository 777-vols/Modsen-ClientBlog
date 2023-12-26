import type { Meta, StoryObj } from '@storybook/react';

import NavMenu from '.';

const meta: Meta<typeof NavMenu> = {
  title: 'components/NavMenu',
  component: NavMenu,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'NavMenu',
  args: {
    locale: 'en',
    isFooterNav: false,
    isMobileNav: false,
    closeMenu: () => null,
  },
};
