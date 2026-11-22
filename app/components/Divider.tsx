/** Розділова лінія на всю ширину: колір `line`, товщина 1px. */
export function Divider({ className = "" }: { className?: string }) {
  return <hr className={`h-px w-full border-0 bg-line ${className}`.trim()} />;
}
