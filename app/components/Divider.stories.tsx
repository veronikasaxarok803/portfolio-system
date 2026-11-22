import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Divider } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Розділова лінія на всю ширину, колір line, товщина 1px." } } },
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

