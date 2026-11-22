# Portfolio — Veronika Haran

Сайт-портфоліо UI/UX-дизайнерки. План сайту: `План сайту-портфоліо.md` у корені. Дизайн у Figma (посилання в README.md). Публікується на Vercel.

## Стек
- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS v4: токени в блоці `@theme` у `app/globals.css`
- Шрифти через `next/font` (`app/fonts.ts`): Inter, Space Grotesk, IBM Plex Mono
- Лінт: oxlint

## Структура
- `app/` — сторінки, layout, стилі, шрифти
- `assets/` — картинки (імпортуються в код)

## Статус
Уся сторінка (вузол Figma 2:3430) перенесена: секції в `app/sections/`, стилі секцій 02–06 у `app/sections.css`. Токени мінімізовані й збігаються зі змінними та стилями у Figma. Далі: компоненти (дизайн-система).


## Команди
- `npm run dev` — локальний сервер (http://localhost:3000)
- `npm run build` — збірка
- `npm run lint` — лінт

## Правила
- Значення кольорів, шрифтів і відступів беремо з Figma й оголошуємо тільки в `@theme`; hex у компонентах не пишемо.
- Перед комітом запускай `npm run build` і `npm run lint`.
