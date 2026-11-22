import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const items = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Навігація сайту: пункти меню. На широкому екрані пункти стоять у ряд, на вузькому меню згортається в кнопку. Відкрите меню показується поверх контенту й не зсуває сторінку вниз. Усі кольори, шрифти й кути беруться з токенів системи, власних значень у компоненті немає.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`items\` | масив \`{ label, href }\` | обов'язковий |
| \`active\` | \`href\` активного пункту | не задано |
| \`ariaLabel\` | підпис навігації для скрінрідерів | \`Main\` |
| \`menuLabel\` | текст кнопки на вузькому екрані | \`Menu\` |
| \`className\` | додаткові класи для розкладки | порожньо |

### Варіанти і стани

Варіантів немає. Стани пункту:

- **default** — текст \`ink-muted\`. Контраст вищий за 4,5:1.
- **hover** — текст \`ink\` і підкреслення.
- **focus** — контур \`ink\` (\`outline-2\` з відступом \`outline-offset-2\`) при навігації клавішею Tab. Контраст контуру вищий за 3:1.
- **активний** — пункт з \`href\`, збігається з \`active\`: текст \`ink\`, товсте підкреслення \`accent\`, \`aria-current="page"\`. Перемикається в Controls.

Вузький екран:

- Менше за брейкпойнт \`md\` меню згорнуте в кнопку (компонент Button, варіант secondary) з \`aria-expanded\` і \`aria-controls\`.
- Відкрите меню — панель поверх контенту (\`absolute\`, \`z-10\`), сторінка не зсувається. Панель закривається клавішею Escape (фокус повертається на кнопку), кліком поза меню або вибором пункту.
- Щоб перевірити, у тулбарі Storybook відкрий **Viewport** і вибери вузький екран (наприклад, mobile).

### Токени

Кольори: \`ink\`, \`ink-muted\`, \`accent\`, \`canvas\`, \`line\`. Текст: \`font-ui\`, \`text-label\`. Кути: \`rounded-control\`. Відступи: кроки 2, 3, 4, 8 (\`py-2\`, \`px-3\`, \`gap-2\`, \`p-4\`, \`gap-8\`, \`mt-2\`). Кнопка меню використовує токени компонента Button.

### Коли використовувати

- Головне меню сайту у шапці: 3–5 пунктів.
- Один пункт активний: той, що відповідає поточній сторінці чи розділу.
- Не клади в навігацію дії на кшталт «Написати»: для них є кнопка.
- Підписи коротко, одним словом.

### Як брати в код

\`\`\`tsx
import { Navigation } from "@/app/components/Navigation";

<Navigation
  active="#work"
  items={[
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ]}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    active: {
      control: "select",
      options: ["#work", "#about", "#contact"],
      description: "href активного пункту",
    },
    items: { control: false },
  },
  args: {
    items,
    active: "#work",
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  // Нижній блок показує, що відкрите меню лежить поверх контенту й не зсуває його.
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-ui text-logo text-ink">vh</span>
        <Navigation {...args} />
      </div>
      <p className="font-body text-body text-ink-muted">
        Вміст сторінки під навігацією. Коли меню відкрите на вузькому екрані, воно накладається на цей текст і не
        зсуває його вниз.
      </p>
    </div>
  ),
};
