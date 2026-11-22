import type { Preview } from "@storybook/nextjs-vite";
import { inter, spaceGrotesk, ibmPlexMono } from "../app/fonts";
import "../app/globals.css";

// next/font віддає змінні шрифтів класами; на сайті їх несе <html> у layout, у Storybook layout немає.
const fontClasses = `${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`;

// Сторінки документації (MDX) стоять поза декораторами історій, тому класи вішаємо й на <html> iframe.
if (typeof document !== "undefined") {
  document.documentElement.classList.add(...fontClasses.split(" "));
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={fontClasses}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
