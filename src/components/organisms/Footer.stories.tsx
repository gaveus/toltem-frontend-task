import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  argTypes: {
    description: { control: 'text' },
    address: { control: 'text' },
    phone: { control: 'text' },
    email: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    description: 'A modern dining experience served with care.',
    address: 'Dome Alagbaka, Akure',
    phone: '07012345678',
    email: 'hello@toltem.example',
  },
};

export const WithCustomInfo: Story = {
  args: {
    description: 'Farm-to-table dishes crafted daily.',
    address: '456 Food Avenue, Metropolis',
    phone: '+1 (555) 123-4567',
    email: ' reservations@toltem.example ',
  },
};

export const Minimal: Story = {
  args: {
    description: undefined,
    address: undefined,
    phone: undefined,
    email: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Uses all default placeholder values. Useful when real info is not yet available.',
      },
    },
  },
};
