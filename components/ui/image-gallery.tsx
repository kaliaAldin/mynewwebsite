import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
  title: string;
  aspect?: "landscape" | "portrait";
};

export function ImageGallery({ images, title, aspect = "landscape" }: ImageGalleryProps) {
  return (
    <div className="grid gap-4">
      {images.map((image, index) => (
        <figure key={image} className="border border-line bg-fog/30 p-2">
          <div className={`relative overflow-hidden border border-line ${aspect === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"}`}>
            <Image
              src={image}
              alt={`${title} gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 75vw, 100vw"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink/58">
            Project image {String(index + 1).padStart(2, "0")}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
