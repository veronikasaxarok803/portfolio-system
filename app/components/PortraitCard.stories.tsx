import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import portrait from "@/assets/portrait.webp";
import { PortraitCard } from "./PortraitCard";

const meta = {
  title: "Components/PortraitCard",
  component: PortraitCard,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Картка-портрет: фото в пропорції aspect-portrait з підписом на surface. Токени: ink, surface, ink-muted, font-ui, text-label, rounded-card." } } },
  args: { image: portrait, imageAlt: "Veronika Haran", name: "VERONIKA HARAN", role: "UI/UX & WEB DESIGNER" },
} satisfies Meta<typeof PortraitCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

