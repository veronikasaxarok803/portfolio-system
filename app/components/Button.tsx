"use client";

import { useId, type ButtonHTMLAttributes, type MouseEvent } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
  /** Вигляд кнопки: `primary` — основна дія на акценті, `secondary` — другорядна, без заливки. */
  variant?: Variant;
  /** Розмір: `md` — звичайний, `lg` — великий. */
  size?: Size;
  /** Вимкнена кнопка. Лишається у фокусі (`aria-disabled`), клік нічого не робить. */
  disabled?: boolean;
  /** Пояснення під вимкненою кнопкою, зв'язане з нею через `aria-describedby`. Показується тільки коли `disabled`. */
  disabledReason?: string;
};

const base =
  "inline-flex items-center justify-center rounded-control border font-ui text-button transition-colors " +
  "cursor-pointer outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink " +
  "aria-disabled:cursor-not-allowed aria-disabled:border-line aria-disabled:bg-surface aria-disabled:text-ink-muted";

const variants: Record<Variant, string> = {
  primary:
    "border-accent bg-accent text-ink " +
    "not-aria-disabled:hover:border-ink not-aria-disabled:hover:bg-ink not-aria-disabled:hover:text-canvas",
  secondary:
    "border-ink-muted text-ink " +
    "not-aria-disabled:hover:border-ink-muted not-aria-disabled:hover:bg-ink-muted not-aria-disabled:hover:text-canvas",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

/**
 * Кнопка дизайн-системи. Два варіанти, два розміри, стани default, hover, focus і disabled.
 * Вимкнена кнопка лишається доступною з клавіатури: використовується `aria-disabled`, а не атрибут `disabled`.
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  disabledReason,
  type = "button",
  className = "",
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const reasonId = useId();
  const showReason = disabled && Boolean(disabledReason);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  const button = (
    <button
      {...rest}
      type={type}
      aria-disabled={disabled || undefined}
      aria-describedby={showReason ? reasonId : rest["aria-describedby"]}
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()}
    >
      {children}
    </button>
  );

  if (!showReason) return button;

  return (
    <div className="inline-flex flex-col items-start gap-2">
      {button}
      <p id={reasonId} className="font-ui text-label text-ink-muted">
        {disabledReason}
      </p>
    </div>
  );
}
