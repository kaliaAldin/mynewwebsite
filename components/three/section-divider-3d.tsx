"use client";

import dynamic from "next/dynamic";
import { WebGLFallback } from "@/components/three/webgl-fallback";

const DynamicDividerCanvas = dynamic(
  () => import("@/components/three/divider-canvas").then((mod) => mod.DividerCanvas),
  {
    ssr: false,
    loading: () => <WebGLFallback label="Section divider" />
  }
);

export function SectionDivider3D() {
  return (
    <div className="border-y border-line bg-ink">
      <div className="container-shell grid min-h-[180px] items-center py-4 md:grid-cols-[1fr_220px] md:py-6">
        <div className="px-4 md:px-0">
          <p className="eyebrow text-paper/58">Structure / Interference / Surface</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-paper/76">
            3D accents are used as dividers and headers to support the site&apos;s spatial identity, not to distract from
            the work itself.
          </p>
        </div>
        <div className="h-[150px] border border-paper/25 bg-paper/8">
          <DynamicDividerCanvas />
        </div>
      </div>
    </div>
  );
}
