import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Кнопка для дій на сторінці: надіслати форму, відкрити розділ, перейти до контактів. Має два варіанти, два розміри й чотири стани. Усі кольори, шрифти й кути беруться з токенів системи, власних значень у компоненті немає.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`variant\` | \`primary\`, \`secondary\` | \`primary\` |
| \`size\` | \`md\`, \`lg\` | \`md\` |
| \`disabled\` | \`true\`, \`false\` | \`false\` |
| \`disabledReason\` | текст пояснення | не задано |
| \`type\` | як у \`<button>\` | \`button\` |

Решта атрибутів \`<button>\` (\`onClick\`, \`aria-*\`, \`className\`) передаються далі. Атрибут \`disabled\` самого \`<button>\` не передається: вимкнений стан робить пропс \`disabled\`.

### Варіанти

- **primary** — основна дія, заливка \`accent\`, текст \`ink\`. Контраст тексту на \`accent\` вищий за 4,5:1. На сторінці має бути одна така кнопка на екран.
- **secondary** — другорядна дія, без заливки, межа \`ink-muted\` (контраст межі вищий за 3:1), текст \`ink\`.

### Розміри

- **md** — звичайний, відступи \`px-6 py-3\`.
- **lg** — великий, відступи \`px-8 py-4\`.

### Стани

- **default** — як у варіанті.
- **hover** — заливка й межа стають \`ink\` (primary) або \`ink-muted\` (secondary), текст \`canvas\`. Контраст тексту у hover вищий за 4,5:1.
- **focus** — контур \`ink\` (\`outline-2\` з відступом \`outline-offset-2\`) з'являється при навігації клавішею Tab (\`focus-visible\`). Контраст контуру вищий за 3:1.
- **disabled** — \`aria-disabled="true"\`: кнопка лишається у фокусі, але клік нічого не робить, hover вимкнено. Заливка \`surface\`, текст \`ink-muted\`, межа \`line\`. Якщо передати \`disabledReason\`, пояснення з'являється під кнопкою й зв'язується з нею через \`aria-describedby\`, тож скрінрідер читає причину разом з кнопкою.

### Токени

Кольори: \`accent\`, \`ink\`, \`ink-muted\`, \`canvas\`, \`surface\`, \`line\`. Текст: \`font-ui\`, \`text-button\` (кнопка), \`text-label\` (пояснення). Кути: \`rounded-control\`. Відступи: кроки 2, 3, 4, 6, 8 (\`py-3\`, \`px-6\`, \`gap-2\` тощо).

### Коли використовувати

- Дія в межах сторінки: відправка, перехід, відкриття.
- Для переходу на іншу сторінку краще посилання, а не кнопка.
- Вимикай кнопку тільки з поясненням у \`disabledReason\`: користувач має зрозуміти, що зробити, щоб вона стала активною.
- Не став на екран дві \`primary\` поруч: друга дія — \`secondary\`.

### Як брати в код

\`\`\`tsx
import { Button } from "@/app/components/Button";

<Button>Написати мені</Button>
<Button variant="secondary" size="lg">Дивитися кейси</Button>
<Button disabled disabledReason="Заповніть форму, щоб продовжити">
  Надіслати
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    children: "Get in touch",
    variant: "primary",
    size: "md",
    disabled: false,
    disabledReason: "Fill in the form to continue.",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
