import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LinkButton } from "./LinkButton";

const meta = {
  title: "Components/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Кнопка-посилання: вигляд Button, але це <a> для переходу на сторінку чи якір. Варіанти primary і secondary, розміри md і lg, необов'язкова стрілка. Стани: default, hover, focus. Усі значення з токенів." } } },
  args: { href: "#work", children: "EXPLORE MY WORK" },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "GET IN TOUCH" } };
