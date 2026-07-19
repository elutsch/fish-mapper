import type { CSSProperties, ReactNode } from "react";

type LakeImageProps = {
  spotId: string;
  children?: ReactNode;
  className?: string;
  label?: string;
};

export function LakeImage({ spotId, children, className, label }: LakeImageProps) {
  return (
    <div
      className={`lake-image${className ? ` ${className}` : ""}`}
      style={{ "--lake-image": `url("/waterbodies/${spotId}.webp")` } as CSSProperties}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {children}
    </div>
  );
}
