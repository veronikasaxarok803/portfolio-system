"use client";

import { useId, useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";

export type FormFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** Підпис поля. Завжди стоїть над полем і зв'язаний з ним через `htmlFor`. */
  label: ReactNode;
  /** Стан помилки: межа `danger`, `aria-invalid`. Текст помилки задається в `errorText`. */
  error?: boolean;
  /** Текст помилки під полем, з іконкою. Показується тільки коли `error`. */
  errorText?: string;
  /** Багаторядкове поле (`<textarea>`) для довшого тексту, наприклад опису проєкту. */
  multiline?: boolean;
};

const fieldBase =
  "w-full rounded-control border bg-surface px-4 py-3 font-body text-body text-ink transition-colors " +
  "placeholder:text-ink-muted outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink " +
  "disabled:cursor-not-allowed disabled:border-line disabled:bg-canvas disabled:text-ink-muted";

const borderDefault = "border-ink-muted enabled:hover:border-ink data-filled:border-ink";
const borderError = "border-danger";

function ErrorIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.5v4" strokeLinecap="round" />
      <circle cx="8" cy="11.25" r="0.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Текстове поле з підписом. Підпис над полем, стани default, hover, focus, заповнене, помилка і disabled.
 * Помилка читається не лише кольором: є іконка й текст, зв'язаний з полем через `aria-describedby`.
 */
export function FormField({
  label,
  error = false,
  errorText,
  multiline = false,
  disabled = false,
  id,
  type = "text",
  value,
  defaultValue,
  onChange,
  className = "",
  ...rest
}: FormFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const errorId = `${inputId}-error`;
  const [typed, setTyped] = useState(String(defaultValue ?? ""));

  const current = value !== undefined ? String(value) : typed;
  const filled = !disabled && current.length > 0;
  const showError = error && Boolean(errorText);

  const handleChange = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setTyped(event.target.value);
    onChange?.(event);
  };

  const controlProps = {
    id: inputId,
    disabled,
    value,
    defaultValue,
    onChange: handleChange,
    "aria-invalid": error || undefined,
    "aria-describedby": showError ? errorId : rest["aria-describedby"],
    "data-filled": filled ? "" : undefined,
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="font-ui text-label text-ink">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          {...controlProps}
          rows={3}
          className={`${fieldBase} resize-none ${error ? borderError : borderDefault} ${className}`.trim()}
        />
      ) : (
        <input
          {...rest}
          {...controlProps}
          type={type}
          className={`${fieldBase} ${error ? borderError : borderDefault} ${className}`.trim()}
        />
      )}
      {showError && (
        <p id={errorId} className="flex items-start gap-2 font-ui text-label text-danger">
          <ErrorIcon />
          <span>{errorText}</span>
        </p>
      )}
    </div>
  );
}
