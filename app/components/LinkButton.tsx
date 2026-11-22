import type { AnchorHTMLAttributes } from "react";
import { buttonBase, buttonSizes, buttonVariants, type ButtonSize, type ButtonVariant } from "./buttonStyles";

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Адреса: сторінка або якір на секцію, наприклад `#work`. */
  href: string;
  /** Вигляд: `primary` — основна дія на акценті, `secondary` — другорядна, без заливки. */
  variant?: ButtonVariant;
  /** Розмір: `md` — звичайний, `lg` — великий. */
  size?: ButtonSize;
  /** Стрілка ↗ після тексту: показує, що це перехід. */
  arrow?: boolean;
};

/**
 * Кнопка-посилання: вигляд Button, але це `<a>`, тож працює як перехід (сторінка або якір).
 * Стани: default, hover, focus (контур для клавіатури).
 */
export function LinkButton({
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a {...rest} className={`${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} gap-6 whitespace-nowrap ${className}`.trim()}>
      {children}
      {arrow && (
        <span className="font-body text-arrow" aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
}
