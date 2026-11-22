import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SectionMarker } from "./SectionMarker";

const meta = {
  title: "Components/SectionMarker",
  component: SectionMarker,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Позначка розділу: номер в акцентній рамці й назва капсом. Токени: accent, ink, font-ui, text-label." } } },
  args: { index: "01", children: "INDEPENDENT UI/UX & WEB DESIGNER" },
} satisfies Meta<typeof SectionMarker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

