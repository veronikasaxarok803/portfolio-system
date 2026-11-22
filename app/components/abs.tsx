import type { CSSProperties, ReactNode } from "react";

type Props = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  font?: "sans" | "grotesk" | "mono";
  size?: number;
  color?: string;
  ls?: number;
  lh?: number;
  bg?: string;
  pre?: boolean;
  children?: ReactNode;
};

/** Абсолютно позиціонований елемент усередині ілюстрації-концепту (мокап картки). */
export function Abs({ x, y, w, h, font = "sans", size, color, ls, lh = 1.45, bg, pre, children }: Props) {
  const style: CSSProperties = {
    position: "absolute",
    left: x,
    top: y,
    width: w,
    height: h,
    fontFamily: `var(--font-${font})`,
    fontWeight: font === "grotesk" ? 700 : font === "mono" ? 500 : 400,
    fontSize: size,
    lineHeight: lh,
    letterSpacing: ls,
    color: color ? `var(--color-${color})` : undefined,
    background: bg ? `var(--color-${bg})` : undefined,
    whiteSpace: pre ? "pre" : undefined,
  };
  return <div style={style}>{children}</div>;
}
