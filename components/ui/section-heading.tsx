import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "right";
  inverted?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  inverted = false
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "grid gap-4 border-t px-4 py-5 md:grid-cols-[minmax(0,180px)_1fr] md:px-6 lg:px-8",
        inverted ? "border-paper/30" : "border-line"
      )}
    >
      <p
        className={cn(
          "eyebrow",
          inverted ? "text-paper/70" : "text-ink/65",
          align === "right" && "md:text-right"
        )}
      >
        {label}
      </p>
      <div className={cn(align === "right" && "md:text-right")}>
        <h2 className={cn("max-w-4xl text-3xl font-black uppercase tracking-brutal md:text-5xl", inverted && "text-paper")}>
          {title}
        </h2>
        {description ? (
          <p className={cn("mt-4 max-w-2xl text-sm leading-6 md:text-base", inverted ? "text-paper/78" : "text-ink/72")}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
