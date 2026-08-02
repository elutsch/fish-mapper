const waterbodyHeroImages: Record<string, string> = {
  "lake-niapenco": "/waterbodies/lake-niapenco.webp"
};

export function waterbodyHeroImage(spotId: string) {
  return waterbodyHeroImages[spotId];
}
