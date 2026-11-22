import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Signature } from "./Signature";

const meta = {
  title: "Components/Signature",
  component: Signature,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Підпис-лого: літери й акцентний курсор. Стани: default, focus. Токени: font-ui, text-logo, accent, ink." } } },
  args: { text: "vh", href: "#top" },
} satisfies Meta<typeof Signature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

