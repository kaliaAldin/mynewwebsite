import Link from "next/link";
import { cn } from "@/lib/utils";

type CVDownloadButtonProps = {
  className?: string;
  href: string;
  inverted?: boolean;
  download?: boolean;
  label?: string;
};

export function CVDownloadButton({ className, href, inverted = false, download = false, label = "View CV" }: CVDownloadButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center border px-5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors",
        inverted
          ? "border-paper text-paper hover:bg-paper hover:text-ink"
          : "border-line text-ink hover:border-ink hover:bg-accent/12",
        className
      )}
    >
      {label}
    </Link>
  );
}
