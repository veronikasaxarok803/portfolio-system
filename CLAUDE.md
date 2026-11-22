@AGENTS.md

## Git
- Уся робота йде в гілці `main`. Нових гілок не створюй, поки користувачка прямо не попросить.

## Проєкт і стек
Сайт-портфоліо UI/UX-дизайнерки Veronika Haran. Next.js (App Router) + React 19 + TypeScript, Tailwind CSS v4, oxlint, Storybook 10. Шрифти через `next/font` (`app/fonts.ts`). Публікується на Vercel.
- `app/globals.css`, блок `@theme` — єдине джерело токенів (збігаються зі змінними Figma).
- `app/components/` — компоненти й їхні історії (`*.stories.tsx`).
- `app/sections/` — секції сторінки, `app/sections.css` — стилі секцій 02–06.
- `assets/` — картинки (`forma-cover.png`, `portrait.webp`).

## Кольори
Стандартні кольори Tailwind скинуто (`--color-*: initial`), працюють тільки ці 7:
- `canvas` `#f5f1eb` — фон сторінки: `bg-canvas`.
- `surface` `#f4f3ef` — картки, поля, підписи під фото: `bg-surface`.
- `line` `#bab7ae` — лінії й рамки карток: `border-line`, `bg-line`.
- `accent` `#e94a22` — головна дія, курсор, рамка номера: `bg-accent`, `border-accent`.
- `ink` `#171715` — основний текст і сильні рамки: `text-ink`, `border-ink`.
- `ink-muted` `#68675f` — приглушений текст, плейсхолдери, вимкнене: `text-ink-muted`.
- `danger` `#b3123f` — помилка: `text-danger`, `border-danger`.

Акцент не для дрібного тексту на світлому фоні (контраст 3,41:1): лише заливки, рамки, текст на `ink`.
Мокапи концептів (Forma, Clarity) мають власну палітру в `app/sections.css`, вона поза системою.

## Типографіка
Розміри скинуто (`--text-*: initial`), кожен несе висоту рядка, трекінг і жирність:

| Клас | Розмір | Жирність | Для чого |
|---|---|---|---|
| `text-display` | 146px | 700 | головний заголовок першого екрана |
| `text-title` | 64px | 700 | заголовок секції |
| `text-heading` | 44px | 700 | підзаголовок секції |
| `text-subheading` | 28px | 700 | назва картки |
| `text-body` | 20px | 400 | основний текст, поля |
| `text-label` | 12px | 500 | мітки, підписи, помилки |
| `text-button` | 13px | 500 | текст кнопок |
| `text-logo` | 23px | 700 | підпис-лого |
| `text-arrow` | 23px | 400 | стрілка ↗ |

Шрифти: `font-display` (Space Grotesk, заголовки), `font-body` (Inter, текст), `font-ui` (IBM Plex Mono, мітки, кнопки, лого). Space Grotesk без кирилиці — для неї працює запасний шрифт.

## Відступи, радіуси й пропорції
- Відступи: окремих токенів немає. У компонентах тільки кроки 8, 12, 16, 24, 32 px, тобто числа 2, 3, 4, 6, 8 у класах: `p-4`, `gap-2`, `px-6 py-3`.
- Радіуси: `rounded-control` (кнопки, поля) і `rounded-card` (картки), обидва 0px.
- Пропорції: `aspect-portrait` (4/5, портрет), `aspect-cover` (4/3, обкладинка роботи).
- Токен розкладки `--container-page` (1224px): тільки для сторінок і секцій, не для компонентів.

## Компоненти
Лежать у `app/components/`, кожен має `<Name>.stories.tsx`. Приклад імпорту: `import { Button } from "./Button"`.

| Компонент | Варіанти / props | Стани |
|---|---|---|
| `Button` | `variant`: `primary`, `secondary`; `size`: `md`, `lg`; `disabled`, `disabledReason` | default, hover, focus, disabled |
| `LinkButton` | як `Button` + `href`, `arrow` (↗) | default, hover, focus |
| `FormField` | `label`, `error`, `errorText`, `disabled`, будь-які props `<input>` | default, hover, focus, заповнене, помилка, disabled |
| `Navigation` | `items`, `active`, `action`, `menuLabel`; ряд на широкому екрані, кнопка-меню на вузькому | пункт: default, hover, focus, активний |
| `WorkCard` | `title`, `description`, `image`, `imageAlt`, `href`; вся картка — посилання | default, hover, focus |
| `PortraitCard` | `image`, `imageAlt`, `name`, `role`, `priority` | не інтерактивна |
| `Signature` | `text`, `href` | default, focus |
| `SectionMarker` | `index`, `children` | не інтерактивна |
| `Divider` | `className` | не інтерактивна |

Службові: `buttonStyles.ts` — спільні класи `Button` і `LinkButton`; `abs.tsx` — позиціонування в мокапах концептів, не для сторінок.

## Правила
- Кольори, розміри тексту, радіуси й пропорції беремо тільки з токенів `@theme`. Значення оголошуємо лише там; hex у компонентах не пишемо.
- Класів, яких немає в `@theme` (`text-white`, `bg-black`, `text-lg`, `rounded-lg`), не використовуємо: вони не працюють.
- Відступи в компонентах тільки з кроків 8, 12, 16, 24, 32 px (числа 2, 3, 4, 6, 8). Токени розкладки сторінки (`--container-page`) тільки на сторінках і в секціях.
- Довільні значення в квадратних дужках заборонені: `p-[13px]`, `h-[150px]`, `text-[#e94a22]`.
- Нові кольори не додаємо. Потрібен інший колір — спершу запитай користувачку.
- Спершу використовуй готові компоненти, новий створюй, лише якщо жоден не підходить.
- Кожен інтерактивний елемент має стани default, hover, focus і disabled; поле форми ще й помилку. Focus: `focus-visible:outline-2 focus-visible:outline-ink`.
- Вимкнену кнопку робимо через `aria-disabled` (не атрибут `disabled`), з поясненням у `disabledReason`.
- Картинки лежать в `assets/` і імпортуються в код (`import cover from "@/assets/forma-cover.png"`).
- Після змін у компоненті оновлюй його історію (`*.stories.tsx`) і документацію в Storybook.
- Перед комітом: `npm run build` і `npm run lint`.

## Посилання
- План сайту: `План сайту-портфоліо.md` у корені.
- Дизайн у Figma: посилання в `README.md` (вузол 2:3430).
- Storybook: `npm run storybook` (http://localhost:6006), збірка `npm run build-storybook`. Сторінка токенів — `stories/Tokens.mdx`.
