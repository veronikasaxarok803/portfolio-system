export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "md" | "lg";

/** Спільні класи кнопки й кнопки-посилання: один вигляд, один набір токенів. */
export const buttonBase =
  "inline-flex items-center justify-center rounded-control border font-ui text-button transition-colors " +
  "cursor-pointer outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink " +
  "aria-disabled:cursor-not-allowed aria-disabled:border-line aria-disabled:bg-surface aria-disabled:text-ink-muted";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-ink " +
    "not-aria-disabled:hover:border-ink not-aria-disabled:hover:bg-ink not-aria-disabled:hover:text-canvas",
  secondary:
    "border-ink-muted text-ink " +
    "not-aria-disabled:hover:border-ink-muted not-aria-disabled:hover:bg-ink-muted not-aria-disabled:hover:text-canvas",
};

export const buttonSizes: Record<ButtonSize, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};
