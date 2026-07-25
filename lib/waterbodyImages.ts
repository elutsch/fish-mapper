const waterbodyHeroImages: Record<string, string> = {
  "lake-niapenco": "/waterbody-heroes/lake-niapenco.webp"
};

export function waterbodyHeroImage(spotId: string) {
  return waterbodyHeroImages[spotId];
}
