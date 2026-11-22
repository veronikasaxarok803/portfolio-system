export type SignatureProps = {
  /** Літери підпису. */
  text?: string;
  /** Куди веде підпис, зазвичай на початок сторінки. */
  href?: string;
  className?: string;
};

/** Підпис-лого: літери й акцентний курсор. Стани: default, focus (контур для клавіатури). */
export function Signature({ text = "vh", href = "#top", className = "" }: SignatureProps) {
  return (
    <a
      href={href}
      aria-label={text}
      className={`inline-flex items-center gap-2 text-ink outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink ${className}`.trim()}
    >
      <span className="font-ui text-logo">{text}</span>
      <span aria-hidden="true" className="h-5.5 w-2.5 bg-accent" />
    </a>
  );
}
