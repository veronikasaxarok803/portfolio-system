"use client";

import { useId, type ButtonHTMLAttributes, type MouseEvent } from "react";

import { buttonBase as base, buttonSizes as sizes, buttonVariants as variants } from "./buttonStyles";

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
