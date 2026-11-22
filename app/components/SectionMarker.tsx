import type { ReactNode } from "react";

export type SectionMarkerProps = {
  /** Номер розділу, наприклад `01`. */
  index: string;
  /** Назва розділу капсом. */
  children: ReactNode;
  className?: string;
};

/** Позначка розділу: номер в акцентній рамці й назва поруч. */
export function SectionMarker({ index, children, className = "" }: SectionMarkerProps) {
  return (
    <div className={`flex items-center gap-3 font-ui text-label text-ink ${className}`.trim()}>
      <span className="border border-accent px-2 py-1">{index}</span>
      <span>{children}</span>
    </div>
  );
}
