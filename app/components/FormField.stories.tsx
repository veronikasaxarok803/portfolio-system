import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Текстове поле з підписом для форм: ім'я, пошта, короткий опис. Підпис завжди над полем. Стани: default, hover, focus, заповнене, помилка й disabled. Усі кольори, шрифти й кути беруться з токенів системи, власних значень у компоненті немає.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`label\` | підпис над полем | обов'язковий |
| \`defaultValue\` | початкове значення (стан «заповнене») | порожньо |
| \`value\` | кероване значення, якщо поле контролює батьківський компонент | не задано |
| \`error\` | \`true\`, \`false\` | \`false\` |
| \`errorText\` | текст помилки під полем | не задано |
| \`disabled\` | \`true\`, \`false\` | \`false\` |
| \`type\` | як у \`<input>\` | \`text\` |
| \`placeholder\`, \`name\`, \`autoComplete\`, \`onChange\` | як у \`<input>\` | не задано |

Решта атрибутів \`<input>\` передаються далі. Зв'язок підпису з полем (\`htmlFor\` і \`id\`) компонент створює сам, \`id\` можна задати власний.

### Варіанти і стани

Варіантів немає, є стани:

- **default** — межа \`ink-muted\`, заливка \`surface\`, текст \`ink\`, підказка в полі \`ink-muted\`. Контраст межі вищий за 3:1.
- **hover** — межа стає \`ink\`.
- **focus** — контур \`ink\` (\`outline-2\` з відступом \`outline-offset-2\`) з'являється при фокусі. Контраст контуру вищий за 3:1.
- **заповнене** — є значення: межа \`ink\`. Перемикається в Controls через \`defaultValue\`.
- **помилка** — \`error\` разом з \`errorText\`: межа \`danger\`, під полем іконка й текст \`danger\`, поле має \`aria-invalid\`, а текст помилки зв'язаний з ним через \`aria-describedby\`. Помилка видна не лише кольором.
- **disabled** — поле вимкнене, межа \`line\`, текст \`ink-muted\`, фон \`canvas\`, курсор «заборонено».

### Токени

Кольори: \`surface\`, \`canvas\`, \`ink\`, \`ink-muted\`, \`line\`, \`danger\`. Текст: \`font-ui\`, \`text-label\` (підпис і помилка), \`font-body\`, \`text-body\` (поле). Кути: \`rounded-control\`. Відступи: кроки 2, 3, 4 (\`gap-2\`, \`px-4\`, \`py-3\`).

### Коли використовувати

- Один рядок тексту: ім'я, пошта, тема.
- Не використовуй поле без підпису: підпис потрібен і людям, і скрінрідерам. Підказка в самому полі підпис не замінює.
- Текст помилки пиши так, щоб було зрозуміло, що виправити: «Введіть пошту у форматі name@example.com», а не «Помилка».
- Для довгого тексту потрібне окреме багаторядкове поле, цей компонент для нього не підходить.

### Як брати в код

\`\`\`tsx
import { FormField } from "@/app/components/FormField";

<FormField label="Your name" name="name" placeholder="How should I call you?" />

<FormField
  label="Email address"
  type="email"
  error
  errorText="Enter an email like name@example.com"
/>

<FormField label="Project" disabled />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    defaultValue: { control: "text" },
    error: { control: "boolean" },
    errorText: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Email address",
    placeholder: "Where can I reach you?",
    defaultValue: "",
    error: false,
    errorText: "Enter an email like name@example.com",
    disabled: false,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  // key перемальовує поле, коли в Controls змінюється значення: сама зміна defaultValue поле не оновлює.
  render: (args) => <FormField key={String(args.defaultValue ?? "")} {...args} />,
};
