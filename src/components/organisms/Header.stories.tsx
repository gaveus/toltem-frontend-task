import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {
    activePath: {
      control: 'text',
      description:
        'Currently active route pathname. Used to highlight the matching nav item.',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    activePath: '',
  },
};

export const WithActiveMenu: Story = {
  args: {
    activePath: '/menu',
  },
};

export const MobilePreview: Story = {
  args: {
    activePath: '',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileMenuOpen: Story = {
  args: {
    activePath: '',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
