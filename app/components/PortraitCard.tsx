import Image, { type StaticImageData } from "next/image";

export type PortraitCardProps = {
  /** Фото, імпортоване з теки `assets`. */
  image: StaticImageData;
  /** Опис фото для скрінрідерів. */
  imageAlt: string;
  /** Верхній, приглушений рядок підпису (ім'я). */
  name: string;
  /** Нижній рядок підпису (роль). */
  role: string;
  /** Завантажувати фото одразу: для картки на першому екрані. */
  priority?: boolean;
  className?: string;
};

/** Картка-портрет: фото в пропорції `aspect-portrait` з підписом на `surface` під ним. */
export function PortraitCard({ image, imageAlt, name, role, priority = false, className = "" }: PortraitCardProps) {
  return (
    <figure className={`w-full max-w-85 flex-none rounded-card border border-ink ${className}`.trim()}>
      <div className="relative aspect-portrait w-full overflow-hidden">
        <Image src={image} alt={imageAlt} fill priority={priority} sizes="340px" className="object-cover" />
      </div>
      <figcaption className="flex flex-col gap-2 bg-surface px-4 py-4 font-ui text-label">
        <span className="text-ink-muted">{name}</span>
        <span className="text-ink">{role}</span>
      </figcaption>
    </figure>
  );
}
