import type { CSSProperties, ReactNode } from "react";

type LakeImageProps = {
  spotId: string;
  children?: ReactNode;
  className?: string;
  label?: string;
  imagePath?: string;
};

export function LakeImage({ spotId, children, className, label, imagePath }: LakeImageProps) {
  const src = imagePath ?? `/waterbodies/${spotId}.webp`;

  return (
    <div
      className={`lake-image${className ? ` ${className}` : ""}`}
      style={{ "--lake-image": `url("${src}")` } as CSSProperties}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {children}
    </div>
  );
}
