import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import cover from "@/assets/forma-cover.png";
import { WorkCard } from "./WorkCard";

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Картка роботи для списку кейсів: обкладинка, назва й короткий опис. Уся картка є посиланням на сторінку роботи. Усі кольори, шрифти й кути беруться з токенів системи, власних значень у компоненті немає.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`title\` | назва роботи | обов'язковий |
| \`description\` | короткий опис | обов'язковий |
| \`image\` | обкладинка, імпортована з \`assets\` | обов'язковий |
| \`imageAlt\` | опис обкладинки для скрінрідерів | порожній рядок (декоративна) |
| \`href\` | адреса сторінки роботи | обов'язковий |
| \`className\` | додаткові класи для розкладки | порожньо |

### Варіанти і стани

Варіантів немає, є стани:

- **default** — обкладинка з межею \`line\`, назва \`ink\`, опис \`ink-muted\`.
- **hover** — межа обкладинки стає \`ink\`, назва підкреслюється.
- **focus** — контур \`ink\` (\`outline-2\` з відступом \`outline-offset-2\`) навколо всієї картки при навігації клавішею Tab. Контраст контуру вищий за 3:1.

### Токени

Кольори: \`line\`, \`surface\`, \`ink\`, \`ink-muted\`. Текст: \`font-display\`, \`text-subheading\` (назва), \`font-body\`, \`text-body\` (опис). Кути: \`rounded-card\`. Пропорція обкладинки: \`aspect-cover\`. Відступи: кроки 2 і 4 (\`gap-2\`, \`gap-4\`).

### Коли використовувати

- Список або сітка робіт на головній чи сторінці портфоліо.
- Одна картка веде на одну роботу. Не клади в картку інші посилання чи кнопки: уся картка вже посилання.
- Обкладинка в пропорції \`aspect-cover\`: інші пропорції будуть обрізані (\`object-cover\`).
- Опис пиши коротко, в одне-два речення: проблема й результат.

### Як брати в код

Обкладинка лежить у теці \`assets\` і імпортується, а не береться з \`public\`.

\`\`\`tsx
import cover from "@/assets/forma-cover.png";
import { WorkCard } from "@/app/components/WorkCard";

<WorkCard
  title="Forma — a quieter kind of web"
  description="An editorial website concept for an interior design studio."
  image={cover}
  imageAlt="Forma website concept"
  href="/work/forma"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageAlt: { control: "text" },
    href: { control: "text" },
    image: { control: false },
  },
  args: {
    title: "Forma — a quieter kind of web",
    description: "An editorial website concept for an interior design studio.",
    image: cover,
    imageAlt: "Forma website concept",
    href: "#",
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
