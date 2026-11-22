import Image, { type StaticImageData } from "next/image";

export type WorkCardProps = {
  /** Назва роботи. Це заголовок картки й основа назви посилання для скрінрідерів. */
  title: string;
  /** Короткий опис в одне-два речення. */
  description: string;
  /** Обкладинка. Імпортується з теки `assets`, наприклад `import cover from "@/assets/cover.png"`. */
  image: StaticImageData;
  /** Опис обкладинки для скрінрідерів. Порожній рядок, якщо картинка суто декоративна. */
  imageAlt?: string;
  /** Адреса сторінки роботи: уся картка є посиланням. */
  href: string;
  className?: string;
};

/**
 * Картка роботи: обкладинка, назва, короткий опис. Уся картка клікабельна.
 * Стани: default, hover (межа обкладинки й підкреслення назви), focus (контур для клавіатури).
 */
export function WorkCard({ title, description, image, imageAlt = "", href, className = "" }: WorkCardProps) {
  return (
    <a
      href={href}
      className={`group flex flex-col gap-4 rounded-card outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink ${className}`.trim()}
    >
      <div className="relative aspect-cover w-full overflow-hidden rounded-card border border-line bg-surface transition-colors group-hover:border-ink">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1200px) 596px, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-subheading text-ink group-hover:underline">{title}</h3>
        <p className="font-body text-body text-ink-muted">{description}</p>
      </div>
    </a>
  );
}
