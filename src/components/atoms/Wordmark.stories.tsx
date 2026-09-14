import type { Meta, StoryObj } from '@storybook/react';
import { Wordmark } from './Wordmark';

const meta: Meta<typeof Wordmark> = {
  title: 'Atoms/Wordmark',
  component: Wordmark,
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      table: { defaultValue: { summary: undefined } },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Wordmark>;

export const Default: Story = {};

export const AsLink: Story = {
  args: {
    href: '/',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'text-2xl',
  },
};
