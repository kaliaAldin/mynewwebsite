"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useI18n } from "@/components/providers/i18n-provider";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const links = [
    { href: "/", label: t.nav.home },
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="container-shell grid gap-4 py-3 md:grid-cols-[1fr_auto_auto] md:items-center">
        <Link href="/" className="focus-ring inline-flex w-fit flex-col">
          <span className="eyebrow text-ink/60">{siteConfig.location}</span>
          <span className="text-base font-black uppercase tracking-[0.18em] md:text-lg">
            {siteConfig.name}
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 md:justify-end">
            {links.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "focus-ring inline-flex min-h-11 items-center border px-4 text-sm font-medium uppercase tracking-[0.16em] transition-colors",
                      active
                        ? "border-ink bg-ink text-paper"
                        : "border-line text-ink hover:border-ink hover:bg-accent/10"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
