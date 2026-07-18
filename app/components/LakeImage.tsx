import type { CSSProperties, ReactNode } from "react";

type LakeImageProps = {
  spotId: string;
  children?: ReactNode;
};

export function LakeImage({ spotId, children }: LakeImageProps) {
  return (
    <div
      className="lake-image"
      style={{ "--lake-image": `url("/waterbodies/${spotId}.webp")` } as CSSProperties}
    >
      {children}
    </div>
  );
}
