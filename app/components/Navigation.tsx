"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Button } from "./Button";

export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationProps = {
  /** Пункти меню в порядку показу. */
  items: NavigationItem[];
  /** `href` активного пункту: він отримує `aria-current="page"` і виділяється підкресленням. */
  active?: string;
  /** Підпис навігації для скрінрідерів. */
  ariaLabel?: string;
  /** Текст кнопки, в яку меню згортається на вузькому екрані. */
  menuLabel?: string;
  /** Необов'язкова дія в кінці меню, наприклад кнопка-посилання «Let's talk». */
  action?: ReactNode;
  className?: string;
};

const itemBase =
  "rounded-control px-3 py-2 font-ui text-label outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink";
const itemDefault = "text-ink-muted hover:text-ink hover:underline";
const itemActive = "text-ink underline decoration-accent decoration-2";

/**
 * Навігація сайту. На широкому екрані пункти стоять у ряд, на вузькому згортаються в кнопку:
 * відкрите меню з'являється поверх контенту й закривається клавішею Escape або кліком поза меню.
 * Стани пункту: default, hover, focus (контур для клавіатури), активний.
 */
export function Navigation({
  items,
  active,
  ariaLabel = "Main",
  menuLabel = "Menu",
  action,
  className = "",
}: NavigationProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        // Повертаємо фокус на кнопку меню, щоб він не загубився після закриття.
        rootRef.current?.querySelector("button")?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <nav ref={rootRef} aria-label={ariaLabel} className={`relative ${className}`.trim()}>
      <div className="md:hidden">
        <Button
          variant="secondary"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {menuLabel}
        </Button>
      </div>

      {/* На вузькому екрані це панель поверх контенту (absolute), на широкому обгортка зникає (contents). */}
      <div
        id={menuId}
        className={`${open ? "absolute right-0 top-full z-10 mt-2 border border-line bg-canvas p-4" : "hidden"} md:contents`}
      >
        <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
          {items.map((item) => {
            const isActive = item.href === active;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`${itemBase} ${isActive ? itemActive : itemDefault} block`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          {action && <li>{action}</li>}
        </ul>
      </div>
    </nav>
  );
}
