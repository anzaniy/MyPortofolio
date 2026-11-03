// Thumbnail card memakai versi kecil dari gambar galeri pertama.
export const thumb = (src?: string) =>
  src
    ? src.replace("/images/projects/", "/images/projects/thumbs/").replace(/\.png$/, ".webp")
    : undefined;